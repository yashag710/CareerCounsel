const express = require("express");
const router = express.Router();
const { loginUser, registerUser } = require('../controllers/authControllers');
const userModel = require("../models/userModel");

router.get("/login" , (req, res) => {
    res.send("main");
});

router.post("/login" , loginUser);

router.post("/signup" , registerUser);

router.get("/userdash" , async (req ,res) => {

  let {email , password , name } = req.body;
  try {
    // Check if user exists
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists!" });
    }

    // Create new user
    const newUser = new userModel({ name, email, password});
    await newUser.save();

    res.status(201).json({ message: "User registered successfully!", user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error!" });
  }
});


module.exports = router;