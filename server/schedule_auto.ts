import { TaskManager } from '../../../x-pack/legacy/plugins/task_manager/task_manager';
import { MAPS_INGEST_TASK_TYPE } from '../constants';
import { Logger } from './lib/logger';

export async function scheduleAutoTasks(taskManager: TaskManager, logger: Logger): Promise<void> {
  try {
    const task = await taskManager.schedule({
      id: MAPS_INGEST_TASK_TYPE + '_task',
      taskType: MAPS_INGEST_TASK_TYPE,
      params: {},
      state: {},
    });
    logger.info(`Task was scheduled: ${task.id}`);

  } catch(err) {
    logger.info('Task scheduling failed: ' + err);
  }
}
