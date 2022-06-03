import type { BuildExecutorSchema } from './schema';

import executor from './build.impl';

const options: BuildExecutorSchema = {
  name: 'test'
};

describe('Build Executor', () => {
  it('can run', async () => {
    const output = await executor(options);
    expect(output.success).toBe(true);
  });
});
