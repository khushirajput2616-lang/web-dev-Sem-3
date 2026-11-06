const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Database
const connectDB = require("./config/db");

// Middleware
const logger = require("./middleware/logger");
const { notFound, errorHandler } = require("./middleware/errorHandler");

// Routes
const brandRoutes = require("./routes/brandRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const scanRoutes = require("./routes/scanRoutes");
const threatRoutes = require("./routes/threatRoutes");

dotenv.config();

// ===============================
// Create Express App
// ===============================

const app = express();

// Trust proxy (needed if deployed behind Nginx/Vercel etc.)
app.set("trust proxy", 1);

// ===============================
// Global Middleware
// ===============================

// CORS - frontend ko connect karne ke liye
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "*", // production me apna frontend URL daalo
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logger
app.use(logger);

// ===============================
// Routes
// ===============================

// Health check
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "BrandShield AI Backend is running",
  });
});

// Brand APIs
app.use("/api/brand", brandRoutes);

// Dashboard APIs
app.use("/api/dashboard", dashboardRoutes);

// Scan APIs
app.use("/api/scan", scanRoutes);

// Threat APIs
app.use("/api/threat", threatRoutes);

// ===============================
// Error Handling Middleware
// (hamesha routes ke BAAD lagta hai)
// ===============================

app.use(notFound);
app.use(errorHandler);

// ===============================
// MongoDB Connection
// ===============================

connectDB();

// ===============================
// Start Server
// ===============================

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
