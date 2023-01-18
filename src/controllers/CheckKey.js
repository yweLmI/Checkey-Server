import express from "express";
import Key from "../models/Key";
import { CheckUser } from "../controllers/User";
import { Api200Success, Api400Error, Api500Error, Api404Error } from "../error/apiResponse";

const CheckKey = async (req, res) => {
    await Key.find({ content: req.query.key, status: true })
        .then(function (data) {
            if (data.length) {
                CheckUser(req, res);
                AssignKey(req, res);
            } else {
                res.send(new Api404Error(`Key: ${req.params.id} not found or used by another user. Try again`));
            }
        })
        .catch(() => {
            res.send(new Api500Error(`Internal Server Error`));
        });
    //console.log("Helllo" + id);
};

const AssignKey = async (req, res) => {
    const filter = { content: req.query.key };
    const update = {
        status: false,
    };
    try {
        await Key.findOneAndUpdate(filter, update, {
            returnOriginal: false,
        });
    } catch (err) {
        res.send(new Api404Error("Assign Key Failed ! Try again"));
    }
};
module.exports = CheckKey;
