const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const { errorHandler } = require("../helper");
const { dbError } = require("../helper/message");

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  name: {
    type: String,
    // required: false,
  },
  phone: {
    type: String,
    required: true,
    // unique: true,
  },
  managedByAdmin: {
    type: Boolean,
    default: false,
  },
  category: {
    type: Array,
    required: false,
  },
  subCategory: {
    type: Array,
    required: false,
  },
  businessName: {
    type: String,
    required: false,
    lowercase: true,
    unique: true,
  },
  website: {
    type: String,
    required: false,  
  },
  image: {
    type: Array,
    required: false,
  },
  location: {
    type: Array,
    required: false,
  },

  isVerified: {
    type: Boolean,
    default: false,
  },


  isPhoneVerified: {
    type: Boolean,
    default: false,
  },


  emailToken: {
    type: String,
    default: null,
  },

  resetPasswordToken: {
    type: String,
    default: null,
  },
  password: {
    type: String,
    required: true,
  },
  profile: {
    type: Schema.Types.ObjectId,
    ref: "MerchantProfile",
    default: null,
  },

  userStatus: {
    type: String,
  },

  picture: {
    type: String,
    default: null,

  },
});

//this middleware always run just before saving in database table
// which is UserSchema in our case
//we are using normal functions here instead of error function
// because we need to access this keyword inside our function
//and aysc method so that the thread await until the process completed
// and then sae inside db

UserSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(this.password, salt);
    this.password = hashPassword;
    next();
  } catch (error) {
    dbError.message = error.message;
    dbError.reason = error.reason;
    next(dbError);
  }
});

// this middleware will called after saving data in mongoose
// adding here just for testing

// UserSchema.post('save', async function (next){
//     console.log("called after saving a user")
// })

//defining custom method for userschema to validate password for login
UserSchema.methods.isValidPassword = async function (password, next) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    console.log(error);
    next();
  }
};

UserSchema.methods.encryptPassword = async function (password, res) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    return hashPassword;
  } catch (error) {
    dbError.message = error.message;
    dbError.reason = error.reason;
    errorHandler(dbError, res);
  }
};

module.exports = mongoose.model("Merchant", UserSchema);
