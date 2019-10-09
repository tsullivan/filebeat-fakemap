import { Root as JoiModule, ObjectSchema } from 'joi';
import { resolve } from 'path';
import { existsSync } from 'fs';
import { LegacyPluginSpec } from '../../src/legacy/plugin_discovery/types';
import { initPlugin } from './server/init';

export default function(kibana: any): LegacyPluginSpec {
  return new kibana.Plugin({
    require: ['elasticsearch'],
    name: 'filebeat_fakemap',

    config(Joi: JoiModule): ObjectSchema {
      return Joi.object({
        enabled: Joi.boolean().default(true),
        ingestAuth: Joi.string().default('elastic:changeme')
      }).default();
    },

    init: initPlugin,
  });
}
