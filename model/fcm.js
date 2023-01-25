const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FcmSchema = new Schema({

 
 token: {
    type: Array,
    required: true,
  },
 


});

module.exports =
  mongoose.models.fcm || mongoose.model("fcm", FcmSchema);
