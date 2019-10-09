import * as path from 'path';
import * as fs from 'fs';
import { promisify } from 'util';
import { MAPS_INGEST_TEMPLATE_NAME, MAPS_INGEST_TASK_TYPE } from '../../../constants';
import { Logger } from '../logger';

const readFile = promisify(fs.readFile);

export const setupEsIndex = async (callEs: any, logger: Logger): Promise<void> => {
  // putTemplate
  const templateJson = await readFile(path.join(__dirname, 'template.json'), 'utf8');
  await callEs('indices.putTemplate', {
    name: MAPS_INGEST_TEMPLATE_NAME,
    body: templateJson,
  });

  // TODO install the sample saved objects
}
