import express from "express";
import { createLog } from "../controllers/logController.js";
import { authenticateLogger } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authenticateLogger, createLog);

export default router;
