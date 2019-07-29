import { TaskManager } from '../../../x-pack/legacy/plugins/task_manager';
import { Logger } from './lib/logger';
import { fakeSuricataIngestTask } from './lib/suricata';

export async function registerTaskDefinitions(server, taskManager: TaskManager, logger: Logger): Promise<void> {
  const suricata = await fakeSuricataIngestTask(server, logger);
  taskManager.registerTaskDefinitions({
    ...suricata,
  });
}

