import type { RslibConfig } from '@rslib/core';
import { readPackage } from 'read-pkg';
export type Config = {
  preset: 'dual';
};
const presets = {
  dual: async () => {
    const pkg = await readPackage();
    // TODO check that match inside package.json
    const cjsOutDistPathRoot = './dist/cjs';
    return {
      lib: [
        {
          format: 'esm',
          syntax: 'es2021',
          dts: true,
        },
        {
          format: 'cjs',
          output: {
            distPath: {
              root: cjsOutDistPathRoot,
            },
          },
        },
      ],
    };
  },
} as const satisfies Record<Config['preset'], () => Promise<RslibConfig>>;
export async function createRsLibConfig({
  preset,
}: Config): Promise<RslibConfig> {
  // Should not call defineConfig otherwise build fail
  return await presets[preset]();
}
