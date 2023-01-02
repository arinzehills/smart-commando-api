const mongoose = require("mongoose");

const deviceSchema = new mongoose.Schema(
  {
    wifi_name: { type: String, default: null },
    password: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Device", deviceSchema);
