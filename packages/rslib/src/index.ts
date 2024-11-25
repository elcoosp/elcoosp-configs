import type { RslibConfig } from '@rslib/core';
export type Config = {
  preset: 'dual';
};
const presets = {
  dual: () => {
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
} as const satisfies Record<Config['preset'], () => RslibConfig>;
export function createRsLibConfig({ preset }: Config): RslibConfig {
  // Should not call defineConfig otherwise build fail
  return presets[preset]();
}
