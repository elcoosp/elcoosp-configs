import { expect, test } from 'vitest';
import { createRsLibConfig } from '../src/index';

test('squared', async () => {
  expect(await createRsLibConfig({ preset: 'dual' })).toMatchSnapshot();
});
