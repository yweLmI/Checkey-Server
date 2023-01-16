import express from "express";
import Key from "../models/Key";
import { Api200Success, Api400Error, Api500Error, Api404Error } from "../error/apiResponse";

const CheckKey = async (req, res, id) => {
    await Key.find({ content: id })
        .then(function (data) {
            if (data.length) {
                res.send(new Api200Success("Success"));
            } else {
                res.send(new Api404Error(`Key: ${req.params.id} not found.`));
            }
        })
        .catch(() => {
            res.send(new Api500Error(`Internal Server Error`));
        });
    //console.log("Helllo" + id);
};

module.exports = CheckKey;
