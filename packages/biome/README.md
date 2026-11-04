[![NPM version][npm-version-shield]][npm-version-url]
[![License][license-shield]][license-url]

<div align="center">
  <a href="https://github.com/elcoosp/elcoosp-configs">
    <img src="https://raw.githubusercontent.com/elcoosp/elcoosp-configs/HEAD/images/logo.png" style="max-height: 200px; object-fit: contain;" alt="Logo">
  </a>
  <h3 align="center">Configs</h3>
  <h4 align="center">@elcoosp-configs/biome</h4>
  <p align="center">
    Presets configs for biome
  </p>
</div>

> You are inside the **@elcoosp-configs/biome** workspace member package,
> not the repository entry point.

## About the project

This package ships a shareable [Biome](https://biomejs.dev/) configuration
preset. The preset enables the formatter with single quotes, space
indentation, import organization and CSS modules parsing.

## Installation

```sh
npm add @elcoosp-configs/biome
```
```sh
pnpm add @elcoosp-configs/biome
```
```sh
yarn add @elcoosp-configs/biome
```
```sh
deno add npm:@elcoosp-configs/biome
```

## Usage

Reference the preset file from your own `biome.json`:

```json
{
  "extends": ["./node_modules/@elcoosp-configs/biome/src/fmt-base.json"]
}
```

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

Project Link: [https://github.com/elcoosp/elcoosp-configs](https://github.com/elcoosp/elcoosp-configs)

<!--MARKDOWN LINKS & IMAGES-->

[npm-version-shield]: https://img.shields.io/npm/v/@elcoosp-configs/biome.svg?style=for-the-badge
[npm-version-url]: https://www.npmjs.com/package/@elcoosp-configs/biome
[license-shield]: https://img.shields.io/github/license/elcoosp/elcoosp-configs.svg?style=for-the-badge
[license-url]: https://github.com/elcoosp/elcoosp-configs/blob/main/LICENSE.txt
