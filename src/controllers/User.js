import express from "express";
import User from "../models/User";
import jwt from "jsonwebtoken";
import { Api200Success, Api400Error, Api500Error, Api404Error } from "../error/apiResponse";

const UpdateUser = async (req, res) => {
    const user = new User();
    const filter = { Username: req.query.username };
    const token = generateKeyToken({ username: req.query.username, domain: req.query.domain, key: req.query.key });
    const update = {
        Key: req.query.key,
        Token: token,
    };
    try {
        await User.findOneAndUpdate(filter, update, {
            returnOriginal: false,
        });
        res.send(new Api200Success("Update User Success !!!"));
    } catch (err) {
        res.send(new Api404Error("Update User Failed ! Try again"));
    }
};
const createUser = async (req, res) => {
    const token = generateKeyToken({ username: req.query.username, domain: req.query.domain, key: req.query.key });
    const user = new User({
        Username: req.query.username,
        Domain: req.query.domain,
        Key: req.query.key,
        Token: token,
    });
    try {
        await user.save();
        res.send(new Api200Success("Create User Success !!!"));
    } catch (err) {
        res.send(new Api404Error("Create User Failed ! Try again"));
    }
};

function generateKeyToken(data) {
    return jwt.sign(data, process.env.TOKEN_SECRET);
}
const CheckUser = async (req, res) => {
    await User.find({ Username: req.query.username })
        .then(function (data) {
            if (data.length) {
                UpdateUser(req, res);
            } else {
                createUser(req, res);
            }
        })
        .catch(() => {
            res.send(new Api500Error(`Internal Server Error`));
        });
    //console.log("Helllo" + id);
};

module.exports = { generateKeyToken, CheckUser };
