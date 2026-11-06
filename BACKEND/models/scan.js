const mongoose = require("mongoose");

const scanSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    platform: {
      type: String,
      required: true,
    },

    developer: {
      type: String,
      default: "",
    },

    similarity: {
      type: Number,
      required: true,
    },

    risk: {
      type: String,
      enum: ["High", "Medium", "Low"],
      required: true,
    },

    keywords: {
      type: [String],
      default: [],
    },

    reason: {
      type: String,
      default: "",
    },

    scanType: {
      type: String,
      enum: ["Social", "App"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Scan", scanSchema);