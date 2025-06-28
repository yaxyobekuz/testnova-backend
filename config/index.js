require("dotenv").config();

const {
  port,
  botToken,
  mongodbUrl,
  objectDBEndpoint,
  objectDBBucketName,
  objectDBAccessKeyId,
  objectDBSecretAccessKey,
  objectDBS3ForcePathStyle,
} = process.env;

// Object database config
const objectDBConfig = {
  region: "auto",
  bucketName: objectDBBucketName,
  credentials: {
    accessKeyId: objectDBAccessKeyId,
    secretAccessKey: objectDBSecretAccessKey,
  },
  endpoint: objectDBEndpoint,
  forcePathStyle: objectDBS3ForcePathStyle,
};

module.exports = { botToken, mongodbUrl, objectDBConfig, port };
