import app from "./app.js"
import config from "./config/index.js"

app.listen(config.PORT, () => {
    console.log(`🚀 The server is running on port: ${config.PORT}`)
})