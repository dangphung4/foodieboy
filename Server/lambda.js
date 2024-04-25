import awsServerlessExpress from "aws-serverless-express";
import app from "./app.js";
const server = awsServerlessExpress.createServer(app);

export const handler = async (event, context) => {
  const response = await awsServerlessExpress.proxy(
    server,
    event,
    context,
    "PROMISE"
  ).promise;
  return response;
};
