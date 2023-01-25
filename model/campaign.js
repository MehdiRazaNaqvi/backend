const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CampaignSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: Array,
    required: true,
  },
  subCategory: {
    type: Array,
    required: true,
  },
  city: {
    type: Array,
    required: true,
  },
  managedByAdmin:{
    type:Boolean,
    default:false
  },
  image: {
    type: Array,
    required: true,
  },
  video: {
    type: Array,
    // required: true,
  },
  start_date: {
    type: String,
    required: true,
    // validate: {
    //   validator: function (v) {
    //     return (
    //       v && // check that there is a date object
    //       v >= Date.now() 
    //     );
    //   },
    //   message:
    //     "Start date should be greater than equal to today.",
    // }
  },
  end_date: {
    type: String,
    required: true,
  },
  campaignStatus: {
    type: String,
    default: "active",
  },
  offer: {
    type: Array,
    required: true,
  },
  merchant_businessName: {
    type: String,
    required: true,
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    },
  ],
  recentlyviewed: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    },
  ],
  merchantId:{
    type: Schema.Types.ObjectId,
    ref: "Merchant",
    required:true
  },
  createdAt:{
    type:Date,
    default: new Date
  }
 
});

module.exports =
  mongoose.models.campaigns || mongoose.model("campaigns", CampaignSchema);
