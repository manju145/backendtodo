const express = require("express");
const router = express.Router();
const { userModel } = require("../Model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



router.get("/", (res, req) => {
  res.send("ban gya");
});

router.post("/register", async (req, res) => {
  const {  password, name } = req.body;

  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      if (err) {
        console.log(err);
      } else {
        const user = new userModel({ name, password: hash });
        await user.save();
        res.send({ msg: "registered", password });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error in registering user");
  }
});

router.post("/login", async (req, res) => {
  const { name, password } = req.body;
  try {
    const user = await userModel.findOne({ name });
    if (user) {
      console.log(user)
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          console.log(result)
          const token = jwt.sign({authorID:user._id,author:user.name}, "manju");
          console.log(token)
          res.send({ token });
        } else {
          res.status(401).send("Invalid name or password");
        }
      });
    }
    else{
      req.send("wrong")
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Error in logging in user");
  }
});

module.exports = { router };
