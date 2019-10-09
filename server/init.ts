import { MAPS_INGEST_TASK_TYPE } from '../constants';
import { Logger } from './lib/logger';
import { fakeSuricataIngestTask, setupEsIndex } from './lib/suricata';
import { registerRoutes } from './routes';

export async function initPlugin(server: any): Promise<void> {
  const logger = new Logger(server);
  const { kbnServer } = server.plugins.xpack_main.status.plugin;
  const {
    plugins: { task_manager: taskManager },
  } = server;
  const config = server.config();
  const { elasticsearch } = server.plugins;
  const { callWithRequest } = elasticsearch.getCluster('data');
  const fakeReq = {
    headers: {
      authorization: `Basic ${
        Buffer.from(config.get('filebeat_fakemap.ingestAuth')).toString('base64')
      }`,
    },
  }; // prettier-ignore
  const callEs = callWithRequest.bind(null, fakeReq);

  logger.info('hello from fakemap plugin');

  taskManager.registerTaskDefinitions({
    ...fakeSuricataIngestTask(callEs, logger),
  });

  kbnServer.afterPluginsInit(async () => {
    try {
      const task = await taskManager.schedule({
        id: MAPS_INGEST_TASK_TYPE + '_task',
        taskType: MAPS_INGEST_TASK_TYPE,
        params: {},
        state: {},
      });
      logger.info(`Task was scheduled: ${task.id}`);
    } catch (err) {
      logger.info('Task scheduling failed: ' + err);
    }
  });

  await setupEsIndex(callEs, logger);

  registerRoutes(server, logger);
}
