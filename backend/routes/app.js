const express = require("express");
const router = express.Router();
const { loginUser, registerUser } = require('../controllers/authControllers');
router.get("/login" , (req, res) => {
    res.send("main");
});

router.post("/login" , loginUser);

router.post("/signup" , registerUser);


module.exports = router;