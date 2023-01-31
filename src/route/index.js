import express from "express";
import CheckKey from "../controllers/CheckKey";
import { CheckToken } from "../controllers/User";
import { Api400Error } from "../error/apiResponse";
let router = express.Router();
const initWebRoute = (app) => {
    router.get("/checkkey/", (req, res) => {
        CheckKey(req, res);
    });
    router.get("/checktoken/", (req, res) => {
        CheckToken(req, res);
    });
    router.all("*", (req, res) => {
        res.send(new Api400Error("Bad request !!! Try again"));
    });

    return app.use("/", router);
};

module.exports = initWebRoute;
