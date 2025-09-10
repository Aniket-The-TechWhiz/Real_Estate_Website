import express from "express";
import {
  getProperties,
  getPropertyById,
  createProperty,
  updateProperty,
  deleteProperty,
} from "../controllers/propertyController.js";

const router = express.Router();

router.get("/", getProperties);        // GET all properties
router.get("/:id", getPropertyById);   // GET single property
router.post("/", createProperty);      // POST new property
router.put("/:id", updateProperty);    // PUT update property
router.delete("/:id", deleteProperty); // DELETE property

export default router;
