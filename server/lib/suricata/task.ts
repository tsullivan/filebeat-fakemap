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

            const nextDateObj = new Date(currentRunDate.valueOf() + 60000); // calculate 1min from when the task was supposed to run
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
