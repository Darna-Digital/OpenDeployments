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
    const isProduction = $app.stage === "production";

    new sst.aws.Nextjs("OpenDeploymentsWebsite", {
      domain: isProduction
        ? {
            name: "opendeployments.com",
            dns: sst.cloudflare.dns(),
            aliases: ["www.opendeployments.com"],
          }
        : undefined,
    });
  },
});
