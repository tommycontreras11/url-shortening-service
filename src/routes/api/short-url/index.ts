import { Router } from "express";
import { validateSchema } from "../../../middlewares/validate-schema.middleware.js";
import { createOrUpdateShortUrlSchema } from "../../../modules/short-url/short-url.schema.js";
import { createShortUrlController } from "../../../modules/short-url/short-url.controller.js";

const router = Router();

router.post(
  "/",
  validateSchema(createOrUpdateShortUrlSchema),
  createShortUrlController,
);

export default router;
