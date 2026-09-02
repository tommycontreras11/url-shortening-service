import express from "express"
import config from "./config/index.js"

const app = express()

app.listen(config.PORT, () => {
    console.log(`The server is running on port: ${config.PORT}`)
})