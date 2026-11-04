[![NPM version][npm-version-shield]][npm-version-url]
[![License][license-shield]][license-url]

<div align="center">
  <a href="https://github.com/elcoosp/elcoosp-configs">
    <img src="https://raw.githubusercontent.com/elcoosp/elcoosp-configs/HEAD/images/logo.png" style="max-height: 200px; object-fit: contain;" alt="Logo">
  </a>
  <h3 align="center">Configs</h3>
  <h4 align="center">@elcoosp-configs/lefthook</h4>
  <p align="center">
    Presets configs for lefthook
  </p>
</div>

> You are inside the **@elcoosp-configs/lefthook** workspace member package,
> not the repository entry point.

## About the project

This package ships composable
[lefthook](https://lefthook.dev/) git hooks presets. Available presets:

| Preset                  | Purpose                                         |
| ----------------------- | ----------------------------------------------- |
| `biome-node.yml`        | biome check and format on staged files          |
| `biome-deno.yml`        | biome check and format for deno projects        |
| `cargo.yml`             | cargo checks for rust projects                  |
| `cspell.yml`            | cspell spell checking                           |
| `cspell-commitlint.yml` | commit message linting, extended by the presets |

## Installation

```sh
npm add @elcoosp-configs/lefthook
```
```sh
pnpm add @elcoosp-configs/lefthook
```
```sh
yarn add @elcoosp-configs/lefthook
```
```sh
deno add npm:@elcoosp-configs/lefthook
```

## Usage

Extend a preset file from your own `lefthook.yml`:

```yaml
extends: [./node_modules/@elcoosp-configs/lefthook/src/biome-node.yml]
```

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

Project Link: [https://github.com/elcoosp/elcoosp-configs](https://github.com/elcoosp/elcoosp-configs)

<!--MARKDOWN LINKS & IMAGES-->

[npm-version-shield]: https://img.shields.io/npm/v/@elcoosp-configs/lefthook.svg?style=for-the-badge
[npm-version-url]: https://www.npmjs.com/package/@elcoosp-configs/lefthook
[license-shield]: https://img.shields.io/github/license/elcoosp/elcoosp-configs.svg?style=for-the-badge
[license-url]: https://github.com/elcoosp/elcoosp-configs/blob/main/LICENSE.txt
