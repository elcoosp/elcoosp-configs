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
- Unified workspace`,
    about: 'Monorepo of tools config files',
    installation: 'See individual packages',
    acknowledgments: '',
    gettingStarted: 'See screenshot',
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
