import { Router } from "express";
import shortUrlRoutes from "./short-url/index.js"

const router = Router()

router.use("/shorten", shortUrlRoutes)

export default router