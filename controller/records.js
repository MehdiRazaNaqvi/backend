const { errorHandler, message } = require('../helper')
const User = require('../model/user')
const { dataAlreadyExist, dbError, requiredFields } = message

const { create, getDataById, getAllData } = require("../services/dbQueries");




const createRecord = async (req, res) => {

    try {

        const userObj = new User({
            email: req.body.email,
            name: req.body.name,
            phone: req.body.phone,
            address: req.body.address,
            image: req.body.image,
            about: req.body.about

        });

        // const user = new User(userObj);


        const savedUser = await userObj.save();
        if (savedUser._id) {
            res.send({ savedUser, status: true })
        }
        else {
            res.send({ message: "something went wrong", status: false })
        }
    }


    catch (err) {
        res.send({ message: "something went wrong", error: err, status: false })
    }
};













module.exports = {
    createRecord
}