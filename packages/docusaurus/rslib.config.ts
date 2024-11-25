import { defineConfig } from "@rslib/core";
import {createRsLibConfig  } from "@elcoosp-configs/rslib";

export default defineConfig({
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
});
