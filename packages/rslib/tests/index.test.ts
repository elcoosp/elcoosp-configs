import { expect, test } from 'vitest';
import { createRsLibConfig } from '../src/index';

test('createRsLibConfig', async () => {
  expect(await createRsLibConfig({ preset: 'dual' })).toMatchSnapshot();
});
