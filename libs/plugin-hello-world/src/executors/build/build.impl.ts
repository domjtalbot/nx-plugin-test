import { logger } from '@nrwl/devkit';

import { BuildExecutorSchema } from './schema';

export async function buildExecutor(options: BuildExecutorSchema) {
  logger.debug('NX Plugin Hello World', options);

  logger.warn(`Hello, ${options.name}!`);

  return {
    success: true,
  };
}

export default buildExecutor;
