import { DataSource } from "typeorm";
import config from "../config/index.js";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url)
const __direname = path.dirname(__filename)

const AppDataSource = new DataSource({
  type: "mysql",
  host: config.DB_HOST,
  port: config.DB_PORT,
  database: config.DB_NAME,
  username: config.DB_USER,
  password: config.DB_PASSWORD,

  logging: config.NODE_ENV === "dev" ? ["query", "error"] : undefined, 
  
  entities: [path.join(__direname, "entities/*.entity.{ts, js}")],
  migrations: [path.join(__direname, "migrations/*.{ts, js}")]
})

export default AppDataSource