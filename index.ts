import { resolve } from 'path';
import { existsSync } from 'fs';
import { LegacyPluginSpec } from '../../src/legacy/plugin_discovery/types';
import { initPlugin } from './server/init';

export default function(kibana): LegacyPluginSpec {
  return new kibana.Plugin({
    require: ['elasticsearch'],
    name: 'filebeat_fakemap',

    config(Joi): void {
      return Joi.object({
        enabled: Joi.boolean().default(true),
        ingestAuth: Joi.string().default(`Basic ${Buffer.from('elastic:changeme').toString('base64')}`)
      }).default();
    },

    init: initPlugin,
  });
}
