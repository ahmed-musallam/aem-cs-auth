// config can be obtained following this: https://experienceleague.adobe.com/en/docs/experience-manager-learn/getting-started-with-aem-headless/authentication/service-credentials
// YOU SHOULD NEVER COMMIT THE CREDS HERE, THIS IS ONLY FOR DEMO PURPOSES
const config = {
  ok: true,
  integration: {
    imsEndpoint: "...",
    metascopes: "...",
    technicalAccount: {
      clientId: "...",
      clientSecret: "...",
    },
    email: "...",
    id: "...",
    org: "...",
    privateKey: "...",
    publicKey: "...",
    certificateExpirationDate: "...",
  },
  statusCode: 200,
};

const auth = require("@adobe/jwt-auth");
// main function that will be executed by Adobe I/O Runtime
async function main(params) {
  let { access_token } = await auth({
    clientId: config.integration.technicalAccount.clientId,
    technicalAccountId: config.integration.id,
    orgId: config.integration.org,
    clientSecret: config.integration.technicalAccount.clientSecret,
    privateKey: config.integration.privateKey,
    metaScopes: config.integration.metascopes,
  });

  return {
    statusCode: 200,
    body: {
      access_token,
    },
  };
}

exports.main = main;
