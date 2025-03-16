const express = require("express");
const cors = require("cors");
const router = express.Router();
const userModel = require("../models/users");
const { loginUser, registerUser } = require('../controllers/authControllers');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

router.get("/logsin" , (req, res) => {
    res.send("main");
});

router.post("/login" , loginUser);

router.post("/signup" , registerUser);

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = router;