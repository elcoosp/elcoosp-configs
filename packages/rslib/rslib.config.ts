import { defineConfig } from '@rslib/core';
import { createRsLibConfig } from './src/index';

export default defineConfig(async () => createRsLibConfig({ preset: 'dual' }));
