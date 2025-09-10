import express from "express";
import { createInquiry, getInquiries } from "../controllers/inquiryController.js";

const router = express.Router();

router.post("/", createInquiry);  // Submit inquiry
router.get("/", getInquiries);    // Get all inquiries (optional, admin use)

export default router;
