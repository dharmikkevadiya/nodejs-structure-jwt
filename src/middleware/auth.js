const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const User = require("../models/user");
const { Response } = require("../helper/helper");

const auth = async (req, res, next) => {
  try {
    // get token from header
    // const token = req.header("token");
    let authHeader = req.headers.authorization;
    if (!authHeader)
      return res.json({
        status: 401,
        message: "Please Login first to continue",
      });
    const token = authHeader.split(" ")[1];

    //verify token
    const verifyuser = jwt.verify(token, JWT_SECRET);
    const user = await User.findOne({ _id: verifyuser._id });
    if (!user)
      return res.json({
        status: 401,
        message: "Please Login first to continue",
      });

    req.user = user;
    next();
  } catch (error) {
    return res.json({
      status: 500,
      message: "Internal server error!",
    });
  }
};

module.exports = { auth };
