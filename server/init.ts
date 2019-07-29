import { Logger } from './lib/logger';
import { getFeature } from './feature';
import { registerTaskDefinitions } from './register_tasks';
import { scheduleAutoTasks } from './schedule_auto';
import { registerRoutes } from './routes';

export function initPlugin(server): void {
  const logger = new Logger(server);
  logger.info('hello from fakemap plugin');

  const { kbnServer } = server.plugins.xpack_main.status.plugin;
  const { plugins: { task_manager: taskManager, xpack_main: xpackMainPlugin } } = server;

  if (xpackMainPlugin) {
    xpackMainPlugin.registerFeature(getFeature('filebeat_fakemap'));
    registerTaskDefinitions(server, taskManager, logger)
    .then(() => {
      registerRoutes(server, logger);
      scheduleAutoTasks(taskManager, logger);
    });
  }
}

