const express = require("express");
const router = express.Router();

const Device = require("../models/device.model");

router.post("/addWifi", async (req, res) => {
  try {
    const { wifi_name, password } = req.body;
    if (!(password && wifi_name)) {
      res
        .status(400)
        .json({ success: false, message: "All input is required" });
    }

    const wifiExist = await Device.findOne({ wifi_name });
    console.log(wifiExist);
    // if (wifiExist) {
    //     await Device.findByIdAndUpdate(wifiExist._id, req.body, {
    //         useFindAndModify: false,
    //       });
    //       var device = await Device.findById(req.user.user_id).lean();
    //   return res
    //     .status(409)
    //     .json({ success: true, message: "User Already Exist. Please Login" });
    // }
    // Create user in our database
    const wifi = await Device.create({
      wifi_name, // sanitize: convert email to lowercase
      password: password,
    });
    res.status(200).json({
      success: true,
      message: "Wifi added in Successfully 🙌 ",
      wifi: wifi,
    });
  } catch (error) {
    console.log(err);
  }
});
router.post("/getWifiSssid", async (req, res) => {
  try {
    Device.find({}, function (err, wifi) {
      res.status(200).json({
        success: true,
        message: "Wifi retrived Successfully 🙌 ",
        wifi: wifi[0],
      });
    });
  } catch (e) {
    console.log(e);
  }
});
module.exports = router;
