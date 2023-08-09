import express from "express";
import { getUserEvents } from "../controllers/events.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/:userId/events", verifyToken, getUserEvents);

export default router;