[![NPM version][npm-version-shield]][npm-version-url]
[![License][license-shield]][license-url]

<div align="center">
  <a href="https://github.com/elcoosp/elcoosp-configs">
    <img src="https://raw.githubusercontent.com/elcoosp/elcoosp-configs/HEAD/images/logo.png" style="max-height: 200px; object-fit: contain;" alt="Logo">
  </a>
  <h3 align="center">Configs</h3>
  <h4 align="center">@elcoosp-configs/cspell</h4>
  <p align="center">
    Presets configs for cspell
  </p>
</div>

> You are inside the **@elcoosp-configs/cspell** workspace member package,
> not the repository entry point.

## About the project

This package ships a shareable [cspell](https://cspell.org/) configuration
preset focused on TypeScript projects. The preset registers a dictionary
of common TypeScript library words, enables the `typescript`, `node` and
`npm` dictionaries and ignores common generated paths.

## Installation

```sh
npm add @elcoosp-configs/cspell
```
```sh
pnpm add @elcoosp-configs/cspell
```
```sh
yarn add @elcoosp-configs/cspell
```
```sh
deno add npm:@elcoosp-configs/cspell
```

## Usage

Import the preset file from your own `cspell.yml`:

```yaml
import:
  - ./node_modules/@elcoosp-configs/cspell/src/base-ts.yml
```

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

Project Link: [https://github.com/elcoosp/elcoosp-configs](https://github.com/elcoosp/elcoosp-configs)

<!--MARKDOWN LINKS & IMAGES-->

[npm-version-shield]: https://img.shields.io/npm/v/@elcoosp-configs/cspell.svg?style=for-the-badge
[npm-version-url]: https://www.npmjs.com/package/@elcoosp-configs/cspell
[license-shield]: https://img.shields.io/github/license/elcoosp/elcoosp-configs.svg?style=for-the-badge
[license-url]: https://github.com/elcoosp/elcoosp-configs/blob/main/LICENSE.txt
