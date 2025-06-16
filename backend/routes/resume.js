import express from "express";
import { resumeBuilder } from "../controller/resume.controller.js";
const router = express.Router();
router.post('/create-resume',resumeBuilder)
export default router;