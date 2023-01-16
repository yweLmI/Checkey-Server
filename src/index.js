import express from "express";
import bodyParser from "body-parser";
import initWebRoute from "./route/index";
import initDBConnect from "./configs/database";
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = 5000;

app.use(bodyParser.json());
initDBConnect();
initWebRoute(app);

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
