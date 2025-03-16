const userModel = require("../models/userModel");
exports.dataCheck = async function (req, res) {
  try {
    const user = await userModel.findOne({ email: req.body.email }).select("experience");

    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    // If user.experience exists (is not null/undefined), check should be true
    if (user.experience) {
      return res.status(200).json({
        check: true,
      });
    } else {
      return res.status(200).json({
        check: false,
      });
    }
  } catch (err) {
    console.error("Error in dataCheck:", err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
