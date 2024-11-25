import { type RslibConfig, defineConfig } from "@rslib/core";
export type Config = {
	preset: "dual";
};
const presets = {
	dual: {
		lib: [
			{
				format: "esm",
				syntax: "es2021",
				dts: true,
			},
			{
				format: "cjs",
				output: {
					distPath: {
						root: "./dist/cjs",
					},
				},
			},
		],
	},
} as const satisfies Record<Config["preset"], RslibConfig>;
export function createRsLibConfig({ preset }: Config) {
	return defineConfig(presets[preset]);
}
