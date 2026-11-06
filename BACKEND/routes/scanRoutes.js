const express = require("express");

const {
  getSocialScan,
  getAppScan,
  createScan,
} = require("../controllers/scanController");

const router = express.Router();

// Get social scans
router.get("/social", getSocialScan);

// Get app scans
router.get("/apps", getAppScan);

// Create new scan
router.post("/", createScan);

module.exports = router;