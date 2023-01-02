const mongoose = require("mongoose");

const survellianceSchema = new mongoose.Schema(
  {
    // name: { type: String, default: null },
    rstp_url: { type: String, unique: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Camera", survellianceSchema);
