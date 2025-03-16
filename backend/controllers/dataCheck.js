const express = require("express");
const router = express.Router();
const userModel = require("../models/userModel");

exports.dataCheck = async function (req, res) {
  try {
    const user = await userModel.findOne({ email: req.body.email }).select("skills");

    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    if (user.skills && user.skills.length > 0) {
      return res.status(200).json({
        check : true
      })
    } else {
      return res.status(200).json({
        check : false
      })
    }
  } catch (err) {
    console.error("Error in dataCheck:", err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
