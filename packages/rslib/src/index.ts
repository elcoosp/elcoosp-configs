import path from 'node:path';
import type { RslibConfig } from '@rslib/core';
import { readPackage } from 'read-pkg';
// @ts-ignore
import terminalLink from 'terminal-link';
export type Config = {
  preset: 'dual';
};
const presets = {
  dual: async () => {
    const pkg = await readPackage();
    const cjsOutDistPathRoot = './dist/cjs' as const;
    const expectedMain = `${cjsOutDistPathRoot}/index.cjs` as const;

    const pkgMainLink = terminalLink(
      `${pkg.name} package.json \`main\` field`,
      `file://${path.join('package.json')}`,
    );
    const pkgExportsRequireLink = terminalLink(
      `${pkg.name} package.json \`exports["."].require\` field`,
      `file://${path.join('package.json')}`,
    );
    if (!pkg.main)
      throw new Error(
        `The ${pkgMainLink} should be set to ${expectedMain}, it is undefined`,
      );
    if (pkg.main !== expectedMain) {
      throw new Error(
        `The package.json 'main' field should be set to ${expectedMain}, instead got ${pkg.main}`,
      );
    }
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
