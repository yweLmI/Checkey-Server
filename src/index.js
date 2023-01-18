import express from "express";
import https from "https";
import fs from "fs";
import path from "path";
import bodyParser from "body-parser";
import initWebRoute from "./route/index";
import initDBConnect from "./configs/database";
import { generateKeyToken } from "./controllers/User";
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = 5000;

app.use(bodyParser.json());
initDBConnect();
initWebRoute(app);

const SSLserrver = https.createServer(
    {
        key: fs.readFileSync(path.join(__dirname, "cert", "key.pem")),
        cert: fs.readFileSync(path.join(__dirname, "cert", "cert.pem")),
    },
    app
);

SSLserrver.listen(PORT, () => {
    //console.log(generateKeyToken({ username: 3, domain: 4, key: 5 }));
    console.log(`Secure Server running on port: https://localhost:${PORT}`);
});
