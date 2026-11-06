const Scan = require("../models/Scan");

// Get Social Scan
const getSocialScan = async (req, res) => {
  try {
    const scans = await Scan.find({
      scanType: "Social",
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: scans.length,
      data: scans,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get App Scan
const getAppScan = async (req, res) => {
  try {
    const scans = await Scan.find({
      scanType: "App",
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: scans.length,
      data: scans,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Create Scan
const createScan = async (req, res) => {
  try {
    const scan = await Scan.create(req.body);

    res.status(201).json({
      success: true,
      message: "Scan created successfully",
      data: scan,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getSocialScan,
  getAppScan,
  createScan,
};