import { Router } from "express";
import api from "./api/index.js"
import root from "./root/index.js"

const router = Router()

router.use("/", root)
router.use("", api)

export default router