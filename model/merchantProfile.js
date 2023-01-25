const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  businessName: {
    type: String,
    // required: true,
    lowercase: true,
    unique: true,
  },
  website: {
    type: String,
  },
  image: {
    type: Array,
  },
  name: {
    type: String,
  },
  phone: {
    type: String,
  },

 
  category: {
    type: Array,
  },
  subCategory: {
    type: Array,
  },

  video: {
    type: String,
  },
  location: {
    type: Array,
  },

  merchantId: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: "Merchant",
  },
});

module.exports = mongoose.model("MerchantProfile", profileSchema);
