import { Config } from "./src/types";

const config: Config = {
  labels: {
    publish_ko: [
      { type: "twitter", env_var_prefix: "KO_" },
      { type: "mastodon", env_var_prefix: "KO_" },
    ],
  },
  urlTemplate: (issue) => `https://eunjae.dev/notes/${issue.number}`,
};

export default config;
