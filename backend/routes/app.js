const express = require("express");
const router = express.Router();
const { loginUser, registerUser } = require('../controllers/authControllers');
const {isLoggedIn} = require("../middlewares/isLoggedIn");
const {getUserProfile} = require("../controllers/getUserProfile");
router.get("/login" , (req, res) => {
    res.send("main");
});

router.post("/login" , loginUser);

router.post("/signup" , registerUser);

router.get("/getUserProfile", isLoggedIn, getUserProfile);

module.exports = router;