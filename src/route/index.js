import express from "express";
import CheckKey from "../controllers/CheckKey";
import { Api400Error } from "../error/apiResponse";
let router = express.Router();
const initWebRoute = (app) => {
    router.get("/checkkey/:id", (req, res) => {
        var id = req.params.id;
        CheckKey(req, res, id);
    });
    router.all("*", (req, res) => {
        res.send(new Api400Error("Bad request !!! Try again"));
    });
    return app.use("/", router);
};

module.exports = initWebRoute;
