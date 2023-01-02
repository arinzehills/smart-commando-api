const express = require("express");
const router = express.Router();

const Camera = require("../models/survelliance.model");
const User = require("../models/user.model");

router.post("/addCamera", async (req, res) => {
  try {
    const { rstp_url } = req.body;
    if (!rstp_url) {
      res
        .status(400)
        .json({ success: false, message: "All input is required" });
    }
    const camera = await Camera.create({
      rstp_url: rstp_url.toLowerCase(), // sanitize: convert email to lowercase
    });
    return res.status(200).json({
      success: true,
      message: "Camera added in Successfully 🙌 ",
      camera: camera,
    });
  } catch (error) {
    console.log(error);
  }
});
router.post("/getAllCameras", async (req, res) => {
  try {
    const cameras = await Camera.find({});
    console.log("Hitted with");
    console.log(cameras);
    return res.status(200).json({
      success: true,
      message: "Cameras retrived Successfully 🙌 ",
      cameras: cameras,
    });
  } catch (e) {
    console.log(e);
  }
});
module.exports = router;
