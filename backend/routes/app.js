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

const upload = multer();  

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
router.post("/careerform", upload.single("resume"), async (req, res) => {
    try {
        const userToken = req.cookies.token; // Fetching the cookie
        if (!userToken) {
            return res.status(401).json({ message: "No cookie found!" });
        }

        // Verify token
        const decoded = jwt.verify(userToken, process.env.JWT_KEY);
        req.user = decoded;
        let email = req.user.email;

        // Get request data
        const { experience, skills, result } = req.body;
        // const resume = req.file ? req.file.buffer : null;  // Handle resume file

        // Update User Profile
        let updatedUser = await userModel.findOneAndUpdate(
            { email },
            { experience, skills, result },
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found!" });
        }

        res.redirect("/analyze-career");
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update the analyze-career route
// router.get("/analyze-career", isLoggedIn, async (req, res) => {
//     try {
//         // Get user email from token
//         const userToken = req.cookies.token;
//         const decoded = jwt.verify(userToken, process.env.JWT_KEY);
//         const email = decoded.email;

//         // Fetch user data from MongoDB
//         const user = await userModel.findOne({ email });
//         if (!user || !user.result) {
//             return res.status(400).json({ 
//                 success: false, 
//                 message: "User result not found" 
//             });
//         }

//         const analysis = await analyzeCareer(user.result);
//         res.json({ success: true, analysis });
//     } catch (error) {
//         res.status(500).json({ success: false, error: error.message });
//     }
// });

module.exports = router;
