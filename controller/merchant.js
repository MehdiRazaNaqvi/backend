const { errorHandler, message, sendEmail, otp } = require("../helper");
const {
  create,
  getDataById,
  getAllData,
  isDataExist,
  findAndUpdateData,
} = require("../services/dbQueries");
const MerchantProfile = require("../model/merchantProfile");
const Merchant = require("../model/merchant");
const { dataAlreadyExist, dbError, requiredFields } = message;
const mongoose = require("mongoose");
const { config } = require("dotenv");
const {
  verificationCodeTemplate,
} = require("../emailTemplates/verificationCode");





const getAllMerchants = async (req, res) => {
  try {
    Merchant.find({}).sort({ _id: -1 })
      // .select('_id','email','isVerified','role','profile')
      .populate("profile")
      .exec(function (err, data) {
        // if (err) return handleError(err);
        if (data) {
          // let temp = [];
          // data.forEach((element) => {
          //   let obj = element;
          //
          //   temp.push(obj);
          // });
          res.status(200).json({ status: true, data: data });
        }
      });
  } catch (error) {
    console.log("error", error);
    dbError.reason = error;
    errorHandler(dbError, res);
  }
};





const getAllMerchantRequest = async (req, res) => {

  try {
    Merchant.find({ userStatus: "pending" }).sort({ _id: -1 })
      .populate("profile")
      .exec(function (err, data) {

        if (err) return res.status(400).json({ success: false });;
        if (data) {
          let temp = [];
          data.forEach((element) => {
            temp.push({
              _id: element._id,
              email: element.email,
              profile: element.profile,
              isVerified: element.isVerified,
              managedByAdmin: element.managedByAdmin,
              userStatus: element.userStatus,
            });
          });
          res.status(200).json({ data: data });
        }
      });
  } catch (error) {
    console.log("error", error);
    dbError.reason = error;
    errorHandler(dbError, res);
  }
};




const getAllMerchantManagedByAdmin = async (req, res) => {
  const getAllMerchantsManagedByAdmin = await Merchant.find({
    managedByAdmin: true,
  }).sort({ _id: -1 }).populate("profile");
  if (!getAllMerchantsManagedByAdmin) {
    res.status(400).json({ success: false });
  } else {
    res
      .status(200)
      .json({ success: true, data: getAllMerchantsManagedByAdmin });
  }
  // try {
  //   await Merchant.find({ managedByAdmin: true })
  //     .populate("profile")
  //     .exec(function (err, data) {
  //       // if (err) return handleError(err);
  //       if (data) {
  //         let temp = [];
  //         data.forEach((element) => {
  //           temp.push({
  //             _id: element._id,
  //             email: element.email,
  //             profile: element.profile,
  //             isVerified: element.isVerified,
  //             managedByAdmin: element.managedByAdmin,
  //             userStatus: element.userStatus,
  //           });
  //         });
  //         res.status(200).json({ success: true, data: data });
  //       }
  //     });
  // } catch (error) {
  //   console.log("error", error);
  //   dbError.reason = error;
  //   res.status(400).json({ success: false, message: error });
  //   // errorHandler(dbError, res);
  // }
};





const getAllMerchantsManagedByMerchants = async (req, res) => {
  try {
    await Merchant.find({ managedByAdmin: false }).sort({ _id: -1 })
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
              managedByAdmin: element.managedByAdmin,
              userStatus: element.userStatus,
            });
          });
          res.status(200).json({ data: data });
        }
      });
  } catch (error) {
    console.log("error", error);
    dbError.reason = error;
    errorHandler(dbError, res);
  }
};




const getMerchantbyId = (req, res) => {
  console.log("get user by id================================", req.query.id);
  // getDataById(User, req.query.id, res)
  Merchant.findById({ _id: req.query.id })
    .populate("profile")
    .exec(function (err, data) {
      if (err) {
        dbError.reason = err
        errorHandler(dbError, res)
      }
      // if (err) return handleError(err);
      if (data) {
        delete data.password;
        res.status(200).json({ data });
      }
    });
};

// const updateMerchant = async (req, res) => {
//   console.log("yessss")
//   let itemId = req.query.id;
//   let item = req.body;

//   console.log("item merchant controller: ", item);
//   console.log("itemId merchant controller: ", itemId);
//   // console.log("update user nbody-----------------------", item);

//  await Merchant.findOneAndUpdate({ _id: itemId }, item, (err, data) => {
//     console.log("merchant loc",itemId,item)
//     if (err) {
//       dbError.message = err;
//       return errorHandler(dbError, res);
//     } if (data) {
//       let profileObj = {
//         businessName: req.body.businessName,
//         website: req.body.website,
//         image: req.body.image,
//         name: req.body.name,
//         phone: req.body.phone,
//         location: req.body.location,
//         category: req.body.category,
//         subCategory: req.body.subCategory,
//         merchantId: itemId,
//       };
//       const profileData = new MerchantProfile(profileObj);
//       console.log('profdata',profileData)
//       const profile =  profileData.save();

//        Merchant.findByIdAndUpdate(
//         { _id: itemId },
//         { profile: mongoose.Types.ObjectId(profile._id) },(err,data)=>{
//           if(err){
//             console.log("error",err)
//             dbError.message = err;
//             return errorHandler(dbError, res);
//           }
//           if(data){
// console.log("data",data)
// MerchantProfile.findByIdAndUpdate({_id:profile })
//           }
//           else {
//             console.log( "Merchant updated successfully")
//           }
//         }
//       );

//       return res.status(200).json({
//         message: "Merchant updated successfully",
//       });
//     }

//    else {
//       return res.status(404).json({
//         message: "Merchant not found",
//       });
//     }
//   });
// };





const updateMerchant = (req, res) => {
  let itemId = req.query.id;
  let item = req.body;

  console.log("item merchant controller: ", item);
  console.log("itemId merchant controller: ", itemId);
  console.log("update user nbody-----------------------", item);

  Merchant.findOneAndUpdate({ _id: itemId }, item, (err, data) => {
    if (err) {
      dbError.message = err;
      return errorHandler(dbError, res);
    } else if (data) {
      console.log("data11", data);
      return res.status(200).json({
        message: "Merchant updated successfully",
        data: item
      });
    } else {
      return res.status(404).json({
        message: "Merchant not found",
      });
    }
  });
};








const createMerchantByMerchant = async (req, res) => {
  // Merchant.findOne({ email: req.body.email , phone:req.body.phone, businessName}, (err, data) => {
  //      if (data) {
  //          dataAlreadyExist.message = "Email/Phone/Business should be unique"
  //          errorHandler(dataAlreadyExist, res)
  //      }
  //      if (err) {
  //          dbError.reason = err
  //          errorHandler(dbError, res)
  //      }
  //      if (!data && !err) {

  //          const success = {
  //              status: 'success',
  //              message: 'Merchant account created successfully',
  //              data: req.body
  //          }
  await isDataExist(
    Merchant,
    { email: req.body.email },
    async (isUserExists) => {
      if (isUserExists) {
        (dataAlreadyExist.message = `${req.body.email} is already been registered`),
          errorHandler(dataAlreadyExist, res);
      } else {
        const userObj = {
          email: req.body.email,
          password: req.body.password,
          businessName: req.body.businessName,
          website: req.body.website,
          image: req.body.image,
          name: req.body.name,
          phone: req.body.phone,
          location: req.body.location,
          category: req.body.category,
          subCategory: req.body.subCategory,
          userStatus: "pending",
        };

        console.log("objjj", userObj);

        const user = new Merchant(userObj);
        user.emailToken = otp;

        const savedUser = await user.save();

        if (savedUser.id) {
          const { body } = req;
          console.log("123", req);
          let profileObj = {
            businessName: body.businessName,
            website: body.website,
            image: body.image,
            name: body.name,
            phone: body.phone,
            location: body.location,
            category: body.category,
            subCategory: body.subCategory,
            merchantId: savedUser._id,
          };
          const profileData = new MerchantProfile(profileObj);
          console.log("merchanttt..", profileData);
          const profile = await profileData.save();

          await Merchant.findByIdAndUpdate(
            { _id: savedUser.id },
            { profile: mongoose.Types.ObjectId(profile._id) }
          );

          const msg = {
            from: config.senderEmail,
            to: savedUser.email,
            subject: "Mooli- Account Verification Email",
            text:
              "Welcome to Mooli. To start exploring your journey. Please enter the verification code.\n Verification code: " +
              savedUser.emailToken,
            html: verificationCodeTemplate({
              mainHeading: "Welcome to Mooli",
              title: "Account Verification Email",
              message:
                "Congrats! You are almost there to complete registration, to start exploring your fitness journey.<br/>Please enter the verification code mentioned below. <br/>",
              code: savedUser.emailToken,
            }),
          };


          try {
            const emailResponse = await sendEmail(msg);
            if (emailResponse.statusCode) throw internalServerError;

            let json = {
              status: "success",
              message: `A verification email has been sent to your email`,
            };

            res.status(200).json(json);
          } catch (error) {
            console.log("Sendgrid Error", error);
            errorHandler(error, res);
          }

        }
      }
    }
  );
};






const createMerchantByAdmin = async (req, res) => {
  // Merchant.findOne({ email: req.body.email , phone:req.body.phone, businessName}, async(err, data) => {
  //      if (data) {
  //          dataAlreadyExist.message = "Email/Phone/Business should be unique"
  //          errorHandler(dataAlreadyExist, res)
  //      }
  //      if (err) {
  //          dbError.reason = err
  //          errorHandler(dbError, res)
  //      }


  await isDataExist(
    Merchant,
    { email: req.body.email },
    async (isUserExists) => {

      if (isUserExists) {
        (dataAlreadyExist.message = `${req.body.email} is already been registered`),
          errorHandler(dataAlreadyExist, res);
      }



      else {

        const success = {
          status: "success",
          message: "Merchant account created successfully",
          data: req.body,
        };
        const userObj = {
          email: req.body.email,
          password: req.body.password,
          website: req.body.website,
          picture: req.body.picture,
          image: req.body.image,
          name: req.body.name,
          phone: req.body.phone,
          location: req.body.location,
          category: req.body.category,
          subCategory: req.body.subCategory,
          businessName: req.body.businessName,
          isVerified: true,
          managedByAdmin: true,
          userStatus: "active",
        };

        const user = new Merchant(userObj);
        const savedUser = await user.save();


        if (savedUser.id) {
          const { body } = req;
          let profileObj = {
            businessName: body.businessName,
            website: body.website,
            image: body.image,
            name: body.name,
            phone: body.phone,
            location: body.location,
            category: body.category,
            subCategory: body.subCategory,
            merchantId: savedUser._id,
          };

          const profileData = new MerchantProfile(profileObj);

          const profile = await profileData.save();

          await Merchant.findByIdAndUpdate(
            { _id: savedUser.id },
            { profile: mongoose.Types.ObjectId(profile._id) }
          );

          const msg = {
            from: config.senderEmail,
            to: savedUser.email,
            subject: "Mooli- Congrats! Your Merchant Account has been created",
            text: "Welcome to Mooli. Your merchant account has been created by our team",
          };

          console.log(savedUser)
          if (savedUser._id)

            res.status(200).json({
              success: true,
              message: `A merchant account has been created successfully`,
            });



          // try {

          //   const emailResponse = await sendEmail(msg);
          //   if (emailResponse.statusCode) throw internalServerError;

          //   let json = {
          //     status: "success",
          //     message: `A merchant account has been created successfully`,
          //   };
          //   res.status(200).json({
          //     success: true,
          //     message: `A merchant account has been created successfully`,
          //   });

          // } catch (error) {
          //   console.log("Sendgrid Error", error);
          //   res.status(400).json({ success: false, message: error });
          //   // errorHandler(error, res);
          // }


        }
      }
    }
  );
};






module.exports = {
  getAllMerchants,
  getAllMerchantManagedByAdmin,
  getAllMerchantRequest,
  getAllMerchantsManagedByMerchants,
  createMerchantByAdmin,
  getMerchantbyId,
  updateMerchant,
  createMerchantByMerchant,
};
