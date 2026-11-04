[![NPM version][npm-version-shield]][npm-version-url]
[![License][license-shield]][license-url]

<div align="center">
  <a href="https://github.com/elcoosp/elcoosp-configs">
    <img src="https://raw.githubusercontent.com/elcoosp/elcoosp-configs/HEAD/images/logo.png" style="max-height: 200px; object-fit: contain;" alt="Logo">
  </a>
  <h3 align="center">Configs</h3>
  <h4 align="center">@elcoosp-configs/docusaurus</h4>
  <p align="center">
    Presets configs for docusaurus
  </p>
</div>

> You are inside the **@elcoosp-configs/docusaurus** workspace member package,
> not the repository entry point.

## About the project

This package ships helpers to build a
[Docusaurus](https://docusaurus.io/) configuration: a classic preset
factory, a theme config factory and a config factory that merges sensible
defaults (url, base url, favicon, i18n and the faster build flag) with
your own partial config.

## Installation

```sh
npm add @elcoosp-configs/docusaurus
```
```sh
pnpm add @elcoosp-configs/docusaurus
```
```sh
yarn add @elcoosp-configs/docusaurus
```
```sh
deno add npm:@elcoosp-configs/docusaurus
```

## Usage

Compose the helpers inside your `docusaurus.config.ts`:

```ts
import {
  classicPreset,
  createDocusaurusConfig,
  themeConfig,
} from '@elcoosp-configs/docusaurus';

const config = createDocusaurusConfig(
  { projectName: 'my-project', organizationName: 'my-org' },
  (derivedConfig) => ({
    presets: [classicPreset(derivedConfig)],
    themeConfig: themeConfig(derivedConfig),
  }),
);

export default config;
```

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

Project Link: [https://github.com/elcoosp/elcoosp-configs](https://github.com/elcoosp/elcoosp-configs)

<!--MARKDOWN LINKS & IMAGES-->

[npm-version-shield]: https://img.shields.io/npm/v/@elcoosp-configs/docusaurus.svg?style=for-the-badge
[npm-version-url]: https://www.npmjs.com/package/@elcoosp-configs/docusaurus
[license-shield]: https://img.shields.io/github/license/elcoosp/elcoosp-configs.svg?style=for-the-badge
[license-url]: https://github.com/elcoosp/elcoosp-configs/blob/main/LICENSE.txt
