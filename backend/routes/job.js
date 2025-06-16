import express from "express";
import { createJob, deleteJob, ExpairJob, getAllJob, updateJob } from "../controller/job.controller.js";

const router = express.Router()

router.get('/',getAllJob)
router.post('/create_job',createJob)
router.put('/update/:id',updateJob)
router.delete('/delete/:id',deleteJob)
router.delete('/expireJob',ExpairJob)

export default router

