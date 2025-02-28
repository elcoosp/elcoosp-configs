import type { types } from 'jsr:@readma/core';
const name = 'elcoosp-configs';
const author = 'elcoosp';
const config: types.ReadmeTemplateArgs = {
  language: 'ts',
  title: 'Configs',
  author,
  githubUsername: author,
  repoName: name,
  xHandle: author,
  domain: 'gmail',
  email: author,
  urls: {
    doc: `https://${name}.vercel.app/`,
  },
  repobeats: 'b4ebcd827d58791b008f7bf5bddd78a2dd0e6a43',
  images: { logo: 'images/logo.png' },
  sections: {
    projectDescription: 'Monorepo of tools config files',
    features: `
- Multiple presets per tool
- Lefthook composable presets
- Unified workspace`,
    about: 'Monorepo of tools config files',
    installation: 'See individual packages',
    acknowledgments: 'All tools that made those configs shareable',
    gettingStarted:
      'Browse the packages list and individually install the config you need',
    roadmap: '',
    usage: '',
  },
  template: {
    bugReport: 'bug-report.yml',
    featRequest: 'feature-request.yml',
  },
  backToTop: false,
} as const;
export default config;
