const Campaign = require("../model/campaign");
const { errorHandler } = require("../helper");
const message = require("../helper");
const { dbError, notFound } = message
const User = require("../model/user");
const mongoose = require("mongoose");
const { internalServerError } = require("../helper/message");
var ObjectId = require('mongodb').ObjectID;

const RecentViewedCampaigns = async (req, res) => {
  // when user clicks a campaign card, user id is added into recentviewed array

  // console.log("req.body")
  // console.log(req.params)

  try {
    if (!req.params.id || !req.body.userid) {
      res.json({
        error: {
          message: "campaign id and user id is required"
        }
      })
    } else {

      const campaign = await Campaign.findById(req.params.id);
      let user = await User.find({ _id: req.body.userid });
      user = user[0];

      campaign.recentlyviewed.push({ 'user': user._id });
      user.recentlyviewed.push(mongoose.Types.ObjectId(req.params.id))
      console.log("user=========", user)
      // user.recentlyviewed.push({ campaigns: req.params.id });
      Campaign
        .findOneAndUpdate({ _id: req.params.id }, { 'recentlyviewed': campaign.recentlyviewed })
        .exec((err, doc) => {
          if (err) {
            errorHandler(err, res)
          }
          else if (doc) {
            User.findOneAndUpdate({ _id: req.body.userid }, { 'recentlyviewed': user.recentlyviewed })
              .exec((err2, doc2) => {
                if (err2) { errorHandler(err2, res) }
                else if (doc2) {
                  res.json({ succes: "true" })
                } else {
                  errorHandler("notFound", res)
                }
              })
          }
          else {
            errorHandler("notFound", res)
          }
        })


    }
  } catch (error) {
    console.error(error.message);
    internalServerError.reason = error
    errorHandler(internalServerError, res)
  }
};

const getAllRecentViewedCampaigns = async (req, res) => {

  const id = (req.params.id).trim();
  if (id === null) {
    res.json({ error: "user id is required" })
  };

  const user = await User.find({ _id: req.params.id })
    .populate({
      path: "recentlyviewed"
    });
  ;
  console.log(user)

  if (user && user[0]) {
    res.status(200).json({ success: true, data: user[0].recentlyviewed });
  } else {
    res.status(404).json({ success: false });
  }
};

const getAllFavoriteCampaigns = async (req, res) => {
  const id = (req.params.id).trim();
  if (id === null) {
    res.json({ error: "user id is required" })
  };

  const user = await User.find({ _id: req.params.id })
    .populate({
      path: "likes"
    });
  console.log(user)

  if (user && user[0]) {
    res.status(200).json({ success: true, data: user[0].likes });
  } else {
    res.status(404).json({ success: false });
  }
};



const deleteAllRecentlyViewedCampaigns = async (req, res) => {
  User.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: { 'recentlyviewed': [] } }
  ).exec((err, doc) => {
    console.log(err, doc)
    if (err) {
      errorHandler(err, res)
    } else if (doc) {
      res.json({ message: "Recently viewed campaigns has been removed" })
    } else {
      errorHandler(notFound, res)
    }
  });

  // let user = await User.find({ email: req.body.email });
  // user = user[0];

  // const deleteRecentViewCampaignsUser = await User.findByIdAndUpdate(
  //   { _id: user._id },
  //   { $set: { recentlyviewed: [] } }
  // );

  // if (!deleteRecentViewCampaigns) {
  //   res.status(404).json({ success: false });
  // } else {
  //   res
  //     .status(200)
  //     .json({ success: true, message: "All Recent Viewed Campaigns Deleted" });
  // }
};





const deleteAllFavoriteCampaigns = async (req, res) => {
  User.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: { 'likes': [] } }
  ).exec((err, doc) => {
    console.log(err, doc)
    if (err) {
      errorHandler(err, res)
    } else if (doc) {
      res.json({ message: "favourite campaigns has been removed" })
    } else {
      errorHandler(notFound, res)
    }
  })
}

const likeCampaigns = async (req, res) => {
  try {
    if (!req.params.id || !req.body.userid) {
      res.json({
        error: {
          message: "campaign id and user id is required"
        }
      })
    } else {

      const campaign = await Campaign.findById(req.params.id);
      let user = await User.find({ _id: req.body.userid });
      user = user[0];
      console.log("user", user)

      campaign.likes.push({ 'user': user._id });
      user.likes.push(mongoose.Types.ObjectId(req.params.id))
      Campaign
        .findOneAndUpdate({ _id: req.params.id }, { 'likes': campaign.likes })
        .exec((err, doc) => {
          if (err) {
            errorHandler(err, res)
          }
          else if (doc) {
            User.findOneAndUpdate({ _id: req.body.userid }, { 'likes': user.likes })
              .exec((err2, doc2) => {
                if (err2) { errorHandler(err2, res) }
                else if (doc2) {
                  res.json({ succes: "true" })
                } else {
                  errorHandler(notFound, res)
                }
              })
          }
          else {
            errorHandler(notFound, res)
          }
        })


    }
  } catch (error) {
    console.error(error.message);
    internalServerError.reason = error
    errorHandler(internalServerError, res)
  }
};


const removeRecentlyViewedCampaignById = async (req, res) => {
  let itemId = req.params.id;


  Campaign.findByIdAndUpdate(
    { _id: mongoose.Types.ObjectId(itemId) },
    { "$pull": { "recentlyviewed": { "user": mongoose.Types.ObjectId(req.body.userid) } } },
    { new: true }
  ).exec((err, result) => {


    if (!result) {
      return res.status(422).json({ error: "Campaign not found" });

    } else if (result) {
      User.findByIdAndUpdate({ _id: req.body.userid },
        { "$pull": { "recentlyviewed": mongoose.Types.ObjectId(req.params.id) } },
        { new: true, })
        .exec((err2, result2) => {
          if (!result2) {
            return res.status(422).json({ error: "User not found" });
          } else if (result2) {
            res.json(result);
          } else {
            errorHandler(notFound, res)
          }
        })

    } else {
      errorHandler(notFound, res)
    }
  });

};

// iscampaignlikedbyuser -- to check whenther this campaign was ever liked by user or not

const unlikeCampaigns = async (req, res) => {
  let itemId = req.params.id;


  Campaign.findByIdAndUpdate(
    { _id: mongoose.Types.ObjectId(itemId) },
    { "$pull": { "likes": { "user": mongoose.Types.ObjectId(req.body.userid) } } },
    { new: true, }
  ).exec((err, result) => {
    console.log(err, result)
    if (err) {
      return res.status(422).json({ error: err });
    } else if (result) {
      User.findByIdAndUpdate({ _id: req.body.userid },
        { "$pull": { "likes": mongoose.Types.ObjectId(req.params.id) } },
        { new: true, })
        .exec((err2, result2) => {
          if (err2) {
            return res.status(422).json({ error: err });
          } else if (result2) {
            res.json(result);
          } else {
            errorHandler(notFound, res)
          }
        })

    } else {
      errorHandler(notFound, res)
    }
  });

};

module.exports = {
  likeCampaigns,
  unlikeCampaigns,
  getAllRecentViewedCampaigns,
  deleteAllRecentlyViewedCampaigns,
  deleteAllFavoriteCampaigns,
  RecentViewedCampaigns,
  removeRecentlyViewedCampaignById,
  getAllFavoriteCampaigns
};
