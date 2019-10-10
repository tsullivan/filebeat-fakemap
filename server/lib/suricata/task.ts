import moment from 'moment';
import { get as getGuarded } from 'lodash';
import {
  RunContext,
  CancellableTask,
  RunResult,
  TaskDefinition,
} from '../../../../../x-pack/legacy/plugins/task_manager/task';
import { MAPS_INGEST_TEMPLATE_NAME, MAPS_INGEST_TASK_TYPE } from '../../../constants';
import { Logger } from '../logger';
import { getExampleJson } from './get_example_json';

export const fakeSuricataIngestTask = (callEs: any, logger: Logger): { [type: string]: TaskDefinition } => {
  return {
    [MAPS_INGEST_TASK_TYPE]: {
      type: 'xpack_kibana_fakemap',
      title: 'Ingest Maps Data',
      createTaskRunner({ taskInstance: { runAt: currentRunDate, state: taskState } }: RunContext): CancellableTask {
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
            await callEs('index', {
              index: `filebeat-${nowYear}.${nowMonth}.${nowDay}`,
              body: {
                '@timestamp': timestampNow,
                ...getExampleJson(),
              },
            });

            const nextMo = moment(currentRunDate).add('minute', 1);
            const taskRuns = getGuarded(taskState, 'stats.runs', 0);

            logger.info(`Indexed a Suricata event. Next run: ${nextMo.toISOString()}`);

            return { state: { stats: { runs: taskRuns + 1 } }, runAt: new Date(nextMo.valueOf()) };
          },
          async cancel(): Promise<void> {
            throw new Error("Can't cancel!");
          },
        };
      },
    },
  };
};
