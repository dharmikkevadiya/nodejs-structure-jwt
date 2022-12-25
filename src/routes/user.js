const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");
const {
  getMe,
  updateUser,
  deleteUser,
  followUser,
  unfollowUser,
  getAllUsers,
  getSingleUser,
} = require("../controllers/user.js");

//@route    GET /me
//@desc     Get me
//@access   PRIVATE
router.get("/me", auth, getMe.controller);

//@route    GET /users
//@desc     Get all users
//@access   PRIVATE
router.get("/users", auth, getAllUsers.controller);

//@route    GET /users/id
//@desc     Get singl user
//@access   PRIVATE
router.get("/users/:id", auth, getSingleUser.controller);

//@route    PUT /users/:id
//@desc     Update user
//@access   PRIVATE
router.put("/users/:id", auth, updateUser.controller);

//@route    PUT /users/:id
//@desc     Delete user
//@access   PRIVATE
router.delete("/users/:id", auth, deleteUser.controller);

//@route    PUT /users/:id/follow
//@desc     Follow user
//@access   PRIVATE
router.put("/users/:id/follow", auth, followUser.controller);

//@route    PUT /users/:id/unfollow
//@desc     Unfollow user
//@access   PRIVATE
router.put("/users/:id/unfollow", auth, unfollowUser.controller);

module.exports = router;
