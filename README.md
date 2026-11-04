<a id="readme-top"></a>

[![Codecov][codecov-shield]][codecov-url]
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stargazers-shield]][stargazers-url]
[![Commit activity][commit-activity-shield]][commit-activity-url]
[![Branch action runs][branch-action-runs-shield]][branch-action-runs-url]
[![License][license-shield]][license-url]

<div align="center">
  <a href="https://github.com/elcoosp/elcoosp-configs">
    <img src="https://raw.githubusercontent.com/elcoosp/elcoosp-configs/HEAD/images/logo.png" style="max-height: 200px; object-fit: contain;" alt="Logo">
  </a>
  <h3 align="center">Configs</h3>
  <p align="center">
    Monorepo of shareable tool configuration presets
  </p>
</div>

## About the project

This repository is a pnpm workspace that publishes reusable configuration
presets for common web development tools. Each preset lives in its own
workspace package, is versioned and released independently with changesets,
and is consumed as a regular npm dependency.

| Package                                            | Description                      |
| -------------------------------------------------- | -------------------------------- |
| [@elcoosp-configs/biome](packages/biome)           | Presets configs for biome        |
| [@elcoosp-configs/cspell](packages/cspell)         | Presets configs for cspell       |
| [@elcoosp-configs/docusaurus](packages/docusaurus) | Presets configs for docusaurus   |
| [@elcoosp-configs/lefthook](packages/lefthook)     | Presets configs for lefthook     |
| [@elcoosp-configs/rslib](packages/rslib)           | Presets configs for rslib        |

## Features

- Multiple presets per tool
- Composable lefthook presets
- Unified workspace with turbo pipelines

## Getting started

Browse the package list above and install the preset you need as a
dependency of your project. Each package README documents its own
installation and usage instructions.

## Usage

This repository is also its own first consumer: the root level
`biome.json`, `cspell.yml` and `lefthook.yml` files extend the presets
published by the workspace packages, so the repository source doubles as
a working reference for every preset.

Common workspace scripts:

```sh
pnpm build     # build all packages with turbo
pnpm check     # biome check with fixes
pnpm test      # run vitest suites
pnpm test:cov  # run vitest suites with coverage
```

## Contributing

Any contributions you make are greatly appreciated. Open an issue with
the [bug report](https://github.com/elcoosp/elcoosp-configs/issues/new?template=bug-report.yml&title=%5BBug%5D%3A+&labels=bug&assignees=elcoosp)
or [feature request](https://github.com/elcoosp/elcoosp-configs/issues/new?template=feature-request.yml&title=%5BFeat%5D%3A+&labels=enhancement&assignees=elcoosp)
template before submitting a change.

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

## Acknowledgments

All the tools that made those configs shareable.

<!--MARKDOWN LINKS & IMAGES-->
<!--https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[codecov-shield]: https://img.shields.io/codecov/c/github/elcoosp/elcoosp-configs/main.svg?style=for-the-badge
[codecov-url]: https://codecov.io/github/elcoosp/elcoosp-configs/tree/main
[contributors-shield]: https://img.shields.io/github/contributors/elcoosp/elcoosp-configs.svg?style=for-the-badge
[contributors-url]: https://github.com/elcoosp/elcoosp-configs/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/elcoosp/elcoosp-configs.svg?style=for-the-badge
[forks-url]: https://github.com/elcoosp/elcoosp-configs/network/members
[stargazers-shield]: https://img.shields.io/github/stars/elcoosp/elcoosp-configs.svg?style=for-the-badge
[stargazers-url]: https://github.com/elcoosp/elcoosp-configs/stargazers
[commit-activity-shield]: https://img.shields.io/github/commit-activity/w/elcoosp/elcoosp-configs.svg?style=for-the-badge
[commit-activity-url]: https://github.com/elcoosp/elcoosp-configs/commits
[branch-action-runs-shield]: https://img.shields.io/github/check-runs/elcoosp/elcoosp-configs/main.svg?style=for-the-badge
[branch-action-runs-url]: https://github.com/elcoosp/elcoosp-configs/actions?query=branch%3Amain
[license-shield]: https://img.shields.io/github/license/elcoosp/elcoosp-configs.svg?style=for-the-badge
[license-url]: https://github.com/elcoosp/elcoosp-configs/blob/main/LICENSE.txt
