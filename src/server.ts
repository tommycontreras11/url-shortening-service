import app from "./app.js";
import config from "./config/index.js";
import { connectDatabase } from "./database/initialize.js";

const bootstrap = async () => {
  app.listen(config.PORT, () => {
    console.log(`🚀 The server is running on port: ${config.PORT}`);
  });

  await connectDatabase()
};

bootstrap()
