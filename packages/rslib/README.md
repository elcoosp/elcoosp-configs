[![NPM version][npm-version-shield]][npm-version-url]
[![License][license-shield]][license-url]

<div align="center">
  <a href="https://github.com/elcoosp/elcoosp-configs">
    <img src="https://raw.githubusercontent.com/elcoosp/elcoosp-configs/HEAD/images/logo.png" style="max-height: 200px; object-fit: contain;" alt="Logo">
  </a>
  <h3 align="center">Configs</h3>
  <h4 align="center">@elcoosp-configs/rslib</h4>
  <p align="center">
    Presets configs for rslib
  </p>
</div>

> You are inside the **@elcoosp-configs/rslib** workspace member package,
> not the repository entry point.

## About the project

This package ships a programmatic
[rslib](https://rslib.dev/) configuration factory. The `dual` preset
emits esm and cjs bundles plus declaration files, and validates that the
package `main` field points to the expected `./dist/cjs/index.cjs`
output.

## Installation

```sh
npm add @elcoosp-configs/rslib
```
```sh
pnpm add @elcoosp-configs/rslib
```
```sh
yarn add @elcoosp-configs/rslib
```
```sh
deno add npm:@elcoosp-configs/rslib
```

## Usage

Use the factory inside your `rslib.config.ts`:

```ts
import { defineConfig } from '@rslib/core';
import { createRsLibConfig } from '@elcoosp-configs/rslib';

export default defineConfig(async () =>
  createRsLibConfig({ preset: 'dual', bundle: true }),
);
```

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

Project Link: [https://github.com/elcoosp/elcoosp-configs](https://github.com/elcoosp/elcoosp-configs)

<!--MARKDOWN LINKS & IMAGES-->

[npm-version-shield]: https://img.shields.io/npm/v/@elcoosp-configs/rslib.svg?style=for-the-badge
[npm-version-url]: https://www.npmjs.com/package/@elcoosp-configs/rslib
[license-shield]: https://img.shields.io/github/license/elcoosp/elcoosp-configs.svg?style=for-the-badge
[license-url]: https://github.com/elcoosp/elcoosp-configs/blob/main/LICENSE.txt
