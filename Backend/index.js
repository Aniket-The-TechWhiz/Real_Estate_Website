import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./utils/db.js";

// Routes
import propertyRoutes from "./routes/propertyRoutes.js";
import inquiryRoutes from "./routes/inquiryRoutes.js";

dotenv.config(); // Load .env file

const app = express();

// Middleware - Configure CORS properly
app.use(cors({
  origin: "http://localhost:3000", // Your React app's URL
  credentials: true
}));
app.use(express.json()); // Parse JSON bodies

// Database connection
connectDB();

// Routes
app.use("/api/properties", propertyRoutes);
app.use("/api/inquiries", inquiryRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("🏡 Real Estate API is running...");
});

// Error handling middleware (fallback)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});