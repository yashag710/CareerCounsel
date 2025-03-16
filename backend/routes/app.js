const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");  
const { loginUser, registerUser } = require('../controllers/authControllers');
const { isLoggedIn } = require("../middlewares/isLoggedIn");
const { getUserProfile } = require("../controllers/getUserProfile");
const { dataCheck } = require("../controllers/dataCheck");
const userModel = require("../models/userModel");
const multer = require("multer");
const { analyzeCareer } = require("../ai_path.mjs"); 
import dotenv from 'dotenv';
const upload = multer();  

dotenv.config();
// Login Routes
router.get("/login", (req, res) => {
    res.send("main");
});
router.post("/login", loginUser);

// Signup Route
router.post("/signup", registerUser);

// Protected Route: Get User Profile
router.get("/getUserProfile", isLoggedIn, getUserProfile);

// Data Check Route
router.post("/datacheck", dataCheck);  // Fixed typo from `oost` to `post`

// Career Form Route (Protected)
router.post("/careerform", isLoggedIn, async (req, res) => {
    try {
        const email = req.user.email;

        // Get request data
        const { experience, skills, result, currentField } = req.body;

        // Update User Profile
        let updatedUser = await userModel.findOneAndUpdate(
            { email },
            { 
                experience, 
                skills, 
                result,
                currentField 
            },
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ error: "User not found!" });
        }

        res.status(200).json({ 
            success: true, 
            message: "Career information updated successfully",
            result: updatedUser.result 
        });
    } catch (err) {
        console.error("Career form error:", err);
        res.status(500).json({ error: err.message });
    }
});

// Update the analyze-career route
router.get("/analyze-career", isLoggedIn, async (req, res) => {
    try {
        const email = req.user.email;

        // Fetch user data from MongoDB
        const user = await userModel.findOne({ email });
        if (!user || !user.result) {
            return res.status(400).json({ 
                success: false, 
                message: "User result not found" 
            });
        }

        const analysis = await analyzeCareer(user.result);
        res.json({ 
            success: true, 
            analysis,
            career: user.result 
        });
    } catch (error) {
        console.error("Analysis error:", error);
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router;
