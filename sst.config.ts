// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "open-deployments",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
      providers: {
        aws: {
          region: "us-east-1",
          profile: input.stage === "production" ? "production" : undefined,
        },
        cloudflare: "latest",
      },
    };
  },
  async run() {
    const stage = process.env.SST_STAGE;

    new sst.aws.Nextjs("OpenDeploymentsWebsite", {
      domain:
        stage === "production"
          ? {
              name: "opendeployments.com",
              dns: sst.cloudflare.dns(),
              aliases: ["www.opendeployments.com"],
            }
          : undefined,
    });
  },
});
