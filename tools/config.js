const config = {};

config.host = process.env.HOST;
config.authKey =  process.env.AUTH_KEY;
config.databaseEndpoint =  process.env.COVIDIA_DB_ENDPOINT || config.host;
config.databaseId = process.env.DATABASEID || "covid-ia";
config.containerId = process.env.CONTAINERID || "iris";
config.partitionKey=process.env.PARTITIONKEY || "id";
config.simuBackendHost=process.env.COVIDIA_SIM_BACK_HOST || "localhost:3000"
if (config.host.includes("//localhost")) {
  console.log("Local environment detected");
  console.log("WARNING: Disabled checking of self-signed certs. Do not have this code in production.");
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  console.log(`Go to http://localhost:${process.env.PORT || '3000'} to try the sample.`);
}

module.exports=config;
