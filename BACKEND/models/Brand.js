const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema(
  {
    brandName: {
      type: String,
      required: true,
      trim: true,
    },

    website: {
      type: String,
      default: "",
    },

    logo: {
      type: String,
      default: "",
    },

    instagram: {
      type: String,
      default: "",
    },

    facebook: {
      type: String,
      default: "",
    },

    x: {
      type: String,
      default: "",
    },

    linkedin: {
      type: String,
      default: "",
    },

    officialAppName: {
      type: String,
      default: "",
    },

    developerName: {
      type: String,
      default: "",
    },

    keywords: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Brand", brandSchema);