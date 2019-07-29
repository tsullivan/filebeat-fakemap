import * as fs from 'fs';
import * as path from 'path';
import { promisify } from 'util';
import { get as getGuarded } from 'lodash';
import {
  RunContext,
  CancellableTask,
  RunResult,
} from '../../../../../x-pack/legacy/plugins/task_manager/task';
import { MAPS_INGEST_TEMPLATE_NAME, MAPS_INGEST_TASK_TYPE } from '../../../constants';
import { Logger } from '../logger';
import { getExampleJson } from './get_example_json';

const readFile = promisify(fs.readFile);

export const fakeSuricataIngestTask = async (server, logger: Logger) => {
  const config = server.config();
  const { elasticsearch } = server.plugins;
  const { callWithRequest: callEs } = elasticsearch.getCluster('data');
  const fakeReq = {
    headers: { authorization: config.get('filebeat_fakemap.ingestAuth') },
  };

  // putTemplate
  const templateJson = await readFile(path.join(__dirname, 'template.json'), 'utf8');
  await callEs(fakeReq, 'indices.putTemplate', {
    name: MAPS_INGEST_TEMPLATE_NAME,
    body: templateJson,
  });

  return {
    [MAPS_INGEST_TASK_TYPE]: {
      type: 'xpack_kibana_fakemap',
      title: 'Ingest Maps Data',
      createTaskRunner({ taskInstance: { state: taskState } }: RunContext): CancellableTask {
        return {
          async run(): Promise<RunResult> {
            const nowDate = new Date();
            const [nowYear, nowMonth, nowDay] = [
              nowDate.getUTCFullYear(),
              nowDate.getUTCMonth() + 1,
              nowDate.getUTCDate(),
            ];

            // ingest data
            const now = new Date();
            const timestampNow = now.toISOString();
            await callEs(fakeReq, 'index', {
              index: `filebeat-${nowYear}.${nowMonth}.${nowDay}`,
              body: {
                '@timestamp': timestampNow,
                ...getExampleJson(),
              },
            });

            // calculate next run
            const nextDateObj = new Date(Date.now() + 60000); // 1min from now
            const taskRuns = getGuarded(taskState, 'stats.runs', 0);

            logger.info(
              `indexed fake data: ${JSON.stringify({
                timestamp: timestampNow,
                nextRun: nextDateObj.toISOString(),
                taskState,
              })}`
            );

            return { state: { stats: { runs: taskRuns + 1 } }, runAt: nextDateObj };
          },
          async cancel(): Promise<void> {
            throw new Error("Can't cancel!");
          },
        };
      },
    },
  };
};
