import { Router } from "express";
import { validateSchema } from "../../../middlewares/validate-schema.middleware.js";
import {
  createOrUpdateShortUrlSchema,
  validateShortCodeSchema,
} from "../../../modules/short-url/short-url.schema.js";
import {
  createShortUrlController,
  deleteShortUrlController,
  getShortUrlByShortCodeController,
  getShortUrlStatsByShortCodeController,
  updateShortUrlController,
} from "../../../modules/short-url/short-url.controller.js";

const router = Router();

router.get(
  "/:shortCode",
  validateSchema(validateShortCodeSchema, "params"),
  getShortUrlByShortCodeController,
);

router.get(
  "/:shortCode/stats",
  validateSchema(validateShortCodeSchema, "params"),
  getShortUrlStatsByShortCodeController,
);

router.post(
  "/",
  validateSchema(createOrUpdateShortUrlSchema),
  createShortUrlController,
);

router.put(
  "/:shortCode",
  validateSchema(createOrUpdateShortUrlSchema),
  updateShortUrlController,
);

router.delete(
  "/:shortCode",
  validateSchema(validateShortCodeSchema, "params"),
  deleteShortUrlController,
);

export default router;
