const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  image: {
    type: String,
    default: null,
  },
  first_name: {
    type: String,
    require: true,
  },
  last_name: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  location: {
    type: Array,
  },
  city: {
    type: String,
  },
  gender: {
    type: String,
  },
  date_of_birth: {
    type: String,
  },
  userId: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: "User",
  },
});

module.exports = mongoose.model("Profile", profileSchema);
