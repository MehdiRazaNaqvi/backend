

const {
  isDataExist,
  create,
  findAndUpdateData,
  updateDataByID,
} = require("../services/dbQueries");
const {
  otp,
  redisClient,
  errorHandler,
  message,
  jwt_helper,
  validationSchema,
  sendEmail,
} = require("../helper");
const User = require("../model/user");
const Profile = require("../model/profile");
const MerchantProfile = require("../model/merchantProfile");
const Merchant = require("../model/merchant");

const config = require("../config");
const { notFound } = require("../helper/message");
const {
  verificationCodeTemplate,
} = require("../emailTemplates/verificationCode");
const mongoose = require("mongoose");
const {
  resetPasswordVerifcationSchema,
  updatePasswordVerificationSchema,
} = require("../helper/validation_schema");
const jwt = require("jsonwebtoken");
const {
  dataAlreadyExist,
  authValidationError,
  unauthorizedError,
  successData,
  dbError,
  badRequest,
  internalServerError,
  invalidCode,
  accountNotVerified,
} = message;
const { signAccessToken, signRefreshToken, verifyRefreshToken } = jwt_helper;
const { authSchema, registerSchema, uniqueMerchantSchema, emailVerificationSchema, emailOtpSchema } =
  validationSchema;







const signup = async (req, res, next) => {

  try {

    const validData = await registerSchema.validateAsync(req.body);


    isDataExist(User, { email: validData.email }, async (isUserExists) => {
      if (isUserExists) {
        (dataAlreadyExist.message = `${validData.email} is already been registered`),
          errorHandler(dataAlreadyExist, res);
      } else {

        const userObj = new User({
          email: validData.email,
          password: validData.password,
          first_name: validData.first_name,
          last_name: validData.last_name,
          phone: validData.phone,



        });

        const user = new User(userObj);
        user.emailToken = otp;

        const savedUser = await user.save();

        if (savedUser.id) {
          let profileObj = {
            email: validData.email,
            first_name: validData.first_name,
            last_name: validData.last_name,
            phone: validData.phone,
            userId: savedUser._id,
          };
          const profileData = new Profile(profileObj);
          const profile = await profileData.save();
          1;
          await User.findByIdAndUpdate(
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
            // if( req.body.device && req.body.device==='mobile'){
            //     json.data = savedUser.emailToken
            // }


            //We r not sending the token in case of sign up, so  
            //we do the following to generate the token on signup
            // and send as the response
            const jwtSecretKey = config.ACCESS_TOKEN_SECRET;
            const token = jwt.sign({
              _id: user._id,
              first_name: user.first_name,
              last_name: user.last_name,
              phone: user.phone,
              email: user.email
            }, jwtSecretKey)

            // res.send(token);

            res.status(200).json(json);


          } catch (error) {
            console.log("Sendgrid Error", error);
            errorHandler(error, res);
          }
        }
      }
    });


  } catch (error) {
    console.log(error);
    if (error.isJoi) {
      // console.log(error)
      // authValiationError.message = error.message;
      errorHandler(error.details, res);
    }
    // errorHandler(error, res);
  }
};






const sendEmailOtp = async (req, res, next) => {

  try {


    const validData = await emailOtpSchema.validateAsync(req.body)

    if (validData.email) {
      console.log(validData.email)
      const msg = {
        from: config.senderEmail,
        to: validData.email,
        subject: "Mooli- Account Verification Email",
        text: "Welcome to Mooli. To start exploring your journey. Please enter the verification code.\n Verification code: " + otp,
        html: verificationCodeTemplate({
          mainHeading: 'Welcome to Mooli',
          title: 'Account Verification Email',
          message: "Congrats! You are almost there to complete registration, to start exploring your journey.<br/>Please enter the verification code mentioned below. <br/>",
          code: otp
        })
      }
      try {
        const emailResponse = await sendEmail(msg)
        if (emailResponse.statusCode) throw internalServerError

        res.json({
          message: `A verification email has been sent to your email`,
          code: otp
        })

      } catch (error) {
        internalServerError.reason = error
        errorHandler(internalServerError, res)
      }



    }


  } catch (err) {
    console.log(err)
    res.json({ error: err.message })
  }
}








// const merchantSignup = async (req, res) => {

//   // await isDataExist(
//   //   Merchant,
//   //   { email: req.body.email , phone: req.body.phone, businessName:req.body.businessName},
//   //   async (isUserExists) => {
//   //     console.log(isUserExists)
//   //     if (isUserExists) {
//   //       console.log(isUserExists)
//   //       dataAlreadyExist.message = `User is already exist`,
//   //         errorHandler(dataAlreadyExist, res);
//   //     } else {
//   //       const userObj = {
//   //         email: req.body.email,
//   //         password: req.body.password,
//   //         businessName: req.body.businessName,
//   //         website: req.body.website,
//   //         image: req.body.image,
//   //         name: req.body.name,
//   //         phone: req.body.phone,
//   //         location: req.body.location,
//   //         category: req.body.category,
//   //         subCategory: req.body.subCategory,
//   //         userStatus: "pending",
//   //       };

//   //       const user = new Merchant(userObj);
//   //       user.emailToken = otp;

//   //       const savedUser = await user.save();

//   //       if (savedUser.id) {
//   //         const { body } = req;

//   //         let profileObj = {
//   //           businessName: body.businessName,
//   //           website: body.website,
//   //           image: body.image,
//   //           name: body.name,
//   //           phone: body.phone,
//   //           location: body.location,
//   //           category: body.category,
//   //           subCategory: body.subCategory,
//   //           merchantId: savedUser._id,
//   //         };
//   //         const profileData = new MerchantProfile(profileObj);
//   //         console.log("merchanttt..", profileData);
//   //         const profile = await profileData.save();

//   //         await Merchant.findByIdAndUpdate(
//   //           { _id: savedUser.id },
//   //           { profile: mongoose.Types.ObjectId(profile._id) }
//   //         );

//   //         const msg = {
//   //           from: config.senderEmail,
//   //           to: savedUser.email,
//   //           subject: "Mooli- Account Verification Email",
//   //           text:
//   //             "Welcome to Mooli. To start exploring your journey. Please enter the verification code.\n Verification code: " +
//   //             savedUser.emailToken,
//   //           html: verificationCodeTemplate({
//   //             mainHeading: "Welcome to Mooli",
//   //             title: "Account Verification Email",
//   //             message:
//   //               "Congrats! You are almost there to complete registration, to start exploring your fitness journey.<br/>Please enter the verification code mentioned below. <br/>",
//   //             code: savedUser.emailToken,
//   //           }),
//   //         };
//   //         try {
//   //           const emailResponse = await sendEmail(msg);
//   //           if (emailResponse.statusCode) throw internalServerError;

//   //           let json = {
//   //             status: "success",
//   //             message: `A verification email has been sent to your email`,
//   //           };

//   //           res.status(200).json(json);
//   //         } catch (error) {
//   //           console.log("Sendgrid Error", error);
//   //           errorHandler(error, res);
//   //         }
//   //       }
//   //     }
//   //   }
//   // );


//   try {
//     const userObj = {
//       email: req.body.email,
//       password: req.body.password,
//       businessName: req.body.businessName,
//       website: req.body.website,
//       image: req.body.image,
//       name: req.body.name,
//       phone: req.body.phone,
//       location: req.body.location,
//       category: req.body.category,
//       subCategory: req.body.subCategory,
//       userStatus: "pending",
//     };

//     const user = new Merchant(userObj);
//     user.emailToken = otp;

//     const savedUser = await user.save();
//     if (savedUser._id) {
//       // res.json(savedUser)
//       const { body } = req;

//       let profileObj = {
//         businessName: body.businessName,
//         website: body.website,
//         image: body.image,
//         name: body.name,
//         phone: body.phone,
//         location: body.location,
//         category: body.category,
//         subCategory: body.subCategory,
//         merchantId: savedUser._id,
//       };

//       const profileData = new MerchantProfile(profileObj);
//       console.log("merchanttt..", profileData);
//       const profile = await profileData.save();

//       await Merchant.findByIdAndUpdate(
//         { _id: savedUser.id },
//         { profile: mongoose.Types.ObjectId(profile._id) }
//       );

//       const msg = {
//         from: config.senderEmail,
//         to: savedUser.email,
//         subject: "Mooli- Account Verification Email",
//         text:
//           "Welcome to Mooli. To start exploring your journey. Please enter the verification code.\n Verification code: " +
//           savedUser.emailToken,
//         html: verificationCodeTemplate({
//           mainHeading: "Welcome to Mooli",
//           title: "Account Verification Email",
//           message:
//             "Congrats! You are almost there to complete registration, to start exploring your fitness journey.<br/>Please enter the verification code mentioned below. <br/>",
//           code: savedUser.emailToken,
//         }),
//       };
//       try {
//         const emailResponse = await sendEmail(msg);
//         if (emailResponse.statusCode) throw internalServerError;

//         let json = {
//           status: "success",
//           message: `A verification email has been sent to your email`,
//         };

//         res.status(200).json(json);
//       } catch (error) {
//         console.log("Sendgrid Error", error);
//         errorHandler(error, res);
//       }


//     }



//   } catch (error) {
//     dbError.reason = error
//     if (error.code === 11000) {
//       dbError.message = `${Object.keys(error.keyPattern)[0]} already exist`
//     }
//     errorHandler(dbError, res)

//   }

// };





const merchantSignup = async (req, res) => {



  try {
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
      isVerified: req.body.isVerified,
      isPhoneVerified: req.body.isPhoneVerified,
      picture: req.body.picture,
    };


    const user = new Merchant(userObj);
    // user.emailToken = otp;

    const savedUser = await user.save();
    console.log(savedUser)
    if (savedUser._id) {

      let json = {
        status: "success",
        message: `Account Created`,
      };

      res.status(200).json(json);


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
      console.log("merchanttt..", profileData);
      const profile = await profileData.save();

      await Merchant.findByIdAndUpdate(
        { _id: savedUser.id },
        { profile: mongoose.Types.ObjectId(profile._id) }
      );





    }



  } catch (error) {
    dbError.reason = error
    if (error.code === 11000) {
      dbError.message = `${Object.keys(error.keyPattern)[0]} already exist`
    }
    errorHandler(dbError, res)

  }

};



const confirmAccountVerification = async (req, res, next) => {

  try {

    const validData = await emailVerificationSchema.validateAsync(req.body);

    let data = { isVerified: true, emailToken: null };
    let successMsg = "Your account has been verified";
    let Model = req.body.type === "merchant" ? Merchant : User
    let user = await Model.find({ email: validData.email });
    user = user[0];

    if (!user) throw notFound;


    if (user.emailToken === validData.code) {
      await updateDataByID(Model, user._id, data, res, successMsg);
    } else {
      throw invalidCode;
    }
  } catch (err) {
    console.log(err);
    err.isJoi ? errorHandler(invalidCode, res) : errorHandler(err, res);
  }


};




const login = async (req, res, next) => {
  try {
    const result = await authSchema.validateAsync(req.body);
    const user = await User.findOne({ email: result.email });
    if (!user) {
      notFound.message = "User not found";
      throw notFound;
    }
    const isMatch = await user.isValidPassword(result.password);
    if (!isMatch) {
      errorHandler(unauthorizedError, res);
    } else {
      successData.message = "User Logged In successfully";
      console.log(user._id.toString());
      const accessToken = await signAccessToken(user._id.toString());
      // const refreshToken = await signRefreshToken(user._id.toString());
      // if (!user.isVerified) {
      //   throw accountNotVerified;
      // }
      let profile = await Profile.findById({
        _id: mongoose.Types.ObjectId(user.profile),
      });

      successData.data = {
        _id: user._id.toString(),
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        phone: user.phone,
        role: user.role,
        isVerified: user.isVerified,
        profile: profile,
        accessToken,
        // refreshToken,
      };
      console.log("success", successData)
      res.status(200).json(successData);
    }
  } catch (error) {
    if (error.isJoi) {
      console.log(error);
      // errorHandler(authValidationError, res);
    } else {
      dbError.reason = error;
      errorHandler(typeof error === "object" ? error : dbError, res);
      console.log(error);
    }
  }
};



const merchantLogin = async (req, res, next) => {
  try {
    const result = await authSchema.validateAsync(req.body);
    const user = await Merchant.findOne({ email: result.email });
    if (!user) {
      notFound.message = "User not found";
      throw notFound;
    }
    const isMatch = await user.isValidPassword(result.password);
    if (!isMatch) {
      errorHandler(unauthorizedError, res);
    } else {
      successData.message = "User Logged In successfully";
      console.log(user._id.toString());
      const accessToken = await signAccessToken(user._id.toString());

      let profile = await MerchantProfile.findById({
        _id: mongoose.Types.ObjectId(user.profile),
      });
      delete user._doc.password;
      delete user._doc.resetPasswordToken;
      delete user._doc.emailToken

      res.status(200).json({
        data: {
          accessToken,
          ...profile._doc,
          ...user._doc
        }
      });
    }
  } catch (error) {
    if (error.isJoi) {
      console.log(error);
      errorHandler(authValidationError, res);
    } else {
      dbError.reason = error;
      errorHandler(typeof error === "object" ? error : dbError, res);
      console.log(error);
    }
  }
};



const logout = async (req, res, next) => {
  // try {
  // const { token } = req.body;
  // if (!token) throw badRequest;
  // const userId = await verifyRefreshToken(token);
  // redisClient.DEL(userId, (err, val) => {
  //   if (err) {
  //     console.log(err.message);
  //     throw internalServerError;
  //   }
  // console.log("userid of logout person", val)
  // logically we should send status 204 which stays the user not exist
  // and request succeeded and it doesn't send any json but for friendly response
  // we want to send json that's why we set status 200

  // on redisClient side delete both access and refresh token when the user logout successfully
  // res.status(200).json({
  //   status: "success",
  //   message: "logout successfully",
  // });
  // });
  // } catch (error) {
  //   console.log(error);
  //   errorHandler(error, res);
  // }
};




const sendForgotPasswordEmail = async (req, res, next) => {


  try {
    const { email } = req.body;
    if (!email) {
      badRequest.message = "Email field is required";
      throw badRequest;
    }
    const code = otp; // return a six digit code
    // console.log("code:", code)
    let Model = req.body.type === "merchant" ? Merchant : User

    findAndUpdateData(
      Model,
      { email },
      { resetPasswordToken: code },
      res,
      null,
      async (updatedData) => {
        if (!updatedData) {
          throw notFound;
        }
        //sending  email
        const msg = {
          from: config.senderEmail,
          to: email,
          subject: "Mooli- Reset Password Email",
          text:
            "We received a request to reset the password for your account\n Don't worry, Please enter the verification code to reset your password " +
            code,
          html: verificationCodeTemplate({
            mainHeading: "Reset Password Email",
            title: "Forgot your password?",
            message:
              "We received a request to reset the password for your account <br/> Don't worry </br>Please enter the verification code to reset your password <br/>",
            code: code,
          }),
        };
        const emailResponse = await sendEmail(msg);
        if (emailResponse.statusCode) throw internalServerError;
        let json = {
          status: "success",
          message: "A verification code has been sent to your email",
        };
        if (req.body.device && req.body.device === "mobile") {
          json.data = code;
        }
        res.status(200).json(json);
      }
    );
  } catch (err) {
    console.log(err);
    errorHandler(err, res);
  }
};





const resetPassword = async (req, res, next) => {
  try {
    const validData = await resetPasswordVerifcationSchema.validateAsync(
      req.body
    );
    let Model = req.body.type === "merchant" ? Merchant : User
    let successMsg = "Your pasword has updated successfully";
    let user = await Model.find({ email: validData.email });
    user = user[0]; // extract user object from array
    if (!user) throw notFound;

    if (user.resetPasswordToken && user.resetPasswordToken === validData.code) {
      let data = {
        resetPasswordToken: null,
        password: await user.encryptPassword(validData.password, res),
      };
      if (data.password) {
        //    await User.findOneAndUpdate({email:validData.email}, data, (err, data)=>{
        findAndUpdateData(
          Model,
          { email: validData.email },
          data,
          res,
          null,
          async (updatedData) => {
            //    if(err){
            //        dbError.reason= err
            //        throw dbError
            //    }
            if (updatedData) {
              res.json({
                status: "success",
                message: successMsg,
              });
            }
          }
        );
      }
      // await updateDataByID(User, user._id, data, res, successMsg)
    } else throw invalidCode;
    // res.json({code:user.reserPasswordToken||"", input:validData.code})
  } catch (err) {
    console.log(err);
    err.isJoi ? errorHandler(badRequest, res) : errorHandler(err, res);
  }
};




const updatePassword = async (req, res, next) => {

  console.log("req.body", req.body)
  try {
    const validData = await updatePasswordVerificationSchema.validateAsync(
      req.body
    );
    let Model = req.body.type === "merchant" ? Merchant : User


    let successMsg = "Your pasword has updated successfully";
    let user = await Model.find({ email: validData.email });
    user = user[0]; // extract user object from array

    if (!user) throw badRequest;
    const isMatch = await user.isValidPassword(validData.currentPassword);

    if (!isMatch) return errorHandler(unauthorizedError, res);
    let data = {
      password: await user.encryptPassword(validData.newPassword, res),
    };

    await updateDataByID(Model, user._id, data, res, successMsg);
  } catch (err) {
    console.log(err);
    console.log(err);
    err.isJoi ? errorHandler(badRequest, res) : errorHandler(err, res);
  }
};




const adminSignup = async (req, res, next) => {
  try {
    //validating the field with auth validation Schema using @hapi/joi
    const validData = await authSchema.validateAsync(req.body);
    console.log("valid data", validData)
    isDataExist(User, { email: validData.email }, async (isUserExists) => {
      if (isUserExists) {
        (dataAlreadyExist.message = `${validData.email} is already been registered`),
          errorHandler(dataAlreadyExist, res);
      } else {
        validData.role = "admin";
        validData.isVerified = true;
        const user = new User(validData);
        const savedUser = await user.save();
        const accessToken = await signAccessToken(savedUser._id.toString());
        const refreshToken = await signRefreshToken(savedUser._id.toString());
        res.status(200).json({
          status: "success",
          message: "User registered successfully",
          accessToken,
          refreshToken,
        });
      }
    });
  } catch (error) {
    if (error.isJoi) {
      console.log("error", error)
      errorHandler(authValiationError, res);
    }
  }
};





const adminLogin = async (req, res, next) => {
  console.log("apiiiiii", req.body)
  try {
    const result = await authSchema.validateAsync(req.body);
    console.log("result", result)
    const user = await User.findOne({ email: result.email, role: "admin" });
    if (!user) {
      notFound.message = "Invalid Email or Password";
      throw notFound;
    }
    const isMatch = await user.isValidPassword(result.password);
    if (!isMatch) {
      errorHandler(unauthorizedError, res);
    } else {
      successData.message = "User Logged In successfully";
      console.log(user._id.toString());
      const accessToken = await signAccessToken(user._id.toString());
      const refreshToken = await signRefreshToken(user._id.toString());
      if (!user.isVerified) {
        throw accountNotVerified;
      }
      successData.data = {
        _id: user._id.toString(),
        email: user.email,
        role: user.role,
        isVerified: user.isVerified,
        profile: user.profile,
        trainer: user.trainer,
        accessToken,
        refreshToken,
      };
      console.log("success", successData)
      res.status(200).json(successData);
    }
  } catch (error) {
    if (error.isJoi) {
      console.log("err", error)
      errorHandler(authValidationError, res);
    } else {
      dbError.message = error;
      errorHandler(typeof error === "object" ? error : dbError, res);
      console.log(error);
    }
  }
};





// we are using the refresh token tok generate the new access token using which the user can login again


const refreshToken = async (req, res, next) => {
  try {
    const { token } = req.body;
    if (!token) throw badRequest;
    const userId = await verifyRefreshToken(token);
    const accessToken = await signAccessToken(userId);
    const refreshToken = await signRefreshToken(userId);
    res.status(200).json({
      status: "success",
      accessToken,
      refreshToken,
    });
  } catch (error) {
    errorHandler(error, res);
  }
};






const checkUnique = async (req, res, next) => {

  try {

    const validData = await uniqueMerchantSchema.validateAsync(req.body);


    isDataExist(Merchant, { email: req.body.email }, async (isUserExists) => {

      if (isUserExists) {
        (dataAlreadyExist.message = `${req.body.email} has already been registered`),
          errorHandler(dataAlreadyExist, res);

        // res.json({ message : isUserExists })


      } else {



        isDataExist(Merchant, { businessName: req.body.businessName }, async (isUserExists) => {

          if (isUserExists) {
            (dataAlreadyExist.message = `${req.body.businessName} has already been taken`),
              errorHandler(dataAlreadyExist, res);

            // res.json({ user: isUserExists })


          } else {
            isDataExist(Merchant, { phone: req.body.phone }, async (isUserExists) => {

              if (isUserExists) {
                (dataAlreadyExist.message = `${req.body.phone} has already been registered`),
                  errorHandler(dataAlreadyExist, res);

                // res.json({ user: isUserExists })


              } else {


                res.json({ success: true, message: "new user" })



              }
            });



          }
        });


      }
    });


  } catch (error) {
    console.log(error);
    if (error.isJoi) {
      // console.log(error)
      // authValiationError.message = error.message;
      errorHandler(error.details, res);
    }
    // errorHandler(error, res);
  }
};








module.exports = {
  signup,
  login,
  confirmAccountVerification,
  sendForgotPasswordEmail,
  adminLogin,
  resetPassword,
  updatePassword,
  logout,
  adminSignup,
  refreshToken,
  merchantLogin,
  merchantSignup,
  sendEmailOtp,
  checkUnique,
};
