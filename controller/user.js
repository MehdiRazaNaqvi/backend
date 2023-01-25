const { errorHandler, message } = require("../helper");
const { create, getDataById, getAllData } = require("../services/dbQueries");
const Profile = require("../model/profile");
const User = require("../model/user");
const { dataAlreadyExist, dbError, requiredFields } = message;
const mongoose = require("mongoose");




const getUsers = async (req, res) => {
  // getAllData(User, res)

  try {
    User.find({ role: "user" }).sort({ _id: -1 })
      // .select('_id','email','isVerified','role','profile')
      .populate("profile")
      .exec(function (err, data) {
        if (err) return handleError(err);
        if (data) {
          let temp = [];
          data.forEach((element) => {
            temp.push({
              _id: element._id,
              email: element.email,
              profile: element.profile,
              isVerified: element.isVerified,
              role: element.role,
              userStatus: element.userStatus,
              likes: element.likes,
            });
          });
          res.status(200).json({ data: temp });
        }
      });
  } catch (error) {
    console.log("error", error);
    dbError.reason = error;
    errorHandler(dbError, res);
  }
};






const getUserbyId = async (req, res) => {
  console.log("get user by id================================", req.params.id);
  const id = (req.params.id).trim();
  if (id === null) return false;
  const ObjectId = require("mongodb").ObjectId;

  let user = await User.findById({ _id: new ObjectId(id) });
  console.log("user3366", user);
  if (!user) {
    res.status(404).json({ success: false });
  } else {
    res.status(200).json({ success: true, data: user });
  }
  console.log(user);
};




const updateUser = (req, res) => {
  let itemId = req.query.id;
  let item = req.body;

  Profile.findOneAndUpdate(
    { userId: new mongoose.Types.ObjectId(itemId) },
    item,
    (err, data) => {
      if (err) {
        dbError.message = err;
        return errorHandler(dbError, res);
      } else if (data) {
        return res.status(200).json({
          message: "User updated successfully",
          data: item
        });
      } else {
        return res.status(200).json({
          message: "User not found",
        });
      }
    }
  );
};





const updateUserStatus = (req, res) => {
  let itemId = req.query.id;
  let item = req.body;


  User.findOneAndUpdate(
    { _id: new mongoose.Types.ObjectId(itemId) },
    item,
    (err, data) => {
      if (err) {
        dbError.message = err;
        return errorHandler(dbError, res);
      } else if (data) {
        return res.status(200).json({
          message: "User updated successfully",
          data: item
        });
      } else {
        return res.status(200).json({
          message: "User not found",
        });
      }
    }
  );
};






module.exports = {
  getUsers,
  getUserbyId,
  updateUser,
  updateUserStatus
};
