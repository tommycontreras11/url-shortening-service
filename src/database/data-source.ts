import { DataSource } from "typeorm";
import config from "../config/index.js";

const AppDataSource = new DataSource({
  type: "mysql",
  host: config.DB_HOST,
  port: config.DB_PORT,
  database: config.DB_NAME,
  username: config.DB_USER,
  password: config.DB_PASSWORD
})

export default AppDataSource