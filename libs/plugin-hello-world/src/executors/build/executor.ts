import { logger } from '@nrwl/devkit';

import { BuildExecutorSchema } from './schema';

export default async function runExecutor(options: BuildExecutorSchema) {
  logger.debug('NX Plugin Hello World', options);
  
  logger.warn('Hello World!');

  return {
    success: true,
  };
}
