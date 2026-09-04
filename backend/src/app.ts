import "reflect-metadata"
import express from "express"
import routes from "./routes/index.js"
import { errorHandler } from "./middlewares/error-handler.middleware.js"
import cors from "cors"

const app = express()

app.use(cors({
    origin: "http://localhost:3001"
}))
app.use(express.json())
app.use(routes)
app.use(errorHandler)

export default app