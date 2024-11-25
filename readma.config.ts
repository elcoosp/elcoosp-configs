import { types } from "jsr:@readma/core";
const name = "elcoosp-configs";
const author = "elcoosp";
const config: types.ReadmeTemplateArgs = {
  language: "ts",
  title: "Configs",
  author,
  githubUsername: author,
  repoName: name,
  xHandle: author,
  domain: "gmail",
  email: author,
  urls: {
    doc: `https://${name}.vercel.app/`,
  },
  repobeats: "b4ebcd827d58791b008f7bf5bddd78a2dd0e6a43",
  images: { screenshot: "images/screenshot.gif", logo: "images/logo.png" },
  sections: {
    projectDescription: "Monorepo of tools config files",
    about: "Monorepo of tools config files",
    installation: `See individual packages`,
    acknowledgments: ``,
    gettingStarted: "See screenshot",
    roadmap: ``,
    usage: ``,
  },
  template: {
    bugReport: "bug-report--from-readme",
    featRequest: "feature-request---from-readme",
  },
  backToTop: false,
} as const;
export default config;
