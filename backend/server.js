const express = require("express");
const cors = require("cors");
const router = express.Router();
const app = express();
const PORT = process.env.PORT || 3000;

require("dotenv").config();
app.use(express.json());
app.use(cors());

const {dbConnect} = require("./config/mongoose-connection");

dbConnect();


const appRoutes = require("./routes/app");

app.use("/api", appRoutes)

// start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
