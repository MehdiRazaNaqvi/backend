const mongoose = require('mongoose')
const Schema= mongoose.Schema


const categorySchema= Schema({
   
    name:{
        type:String,
        require:true,
        unique:true
    },
    categoryTypeId:{
        type:Schema.Types.ObjectId,
        require:true,
        ref:'MainCategory'
    },
    image:{
        type:String,
        require:true
    },
    status:{
        type:String,
        default:"active"
    } 
})

module.exports = mongoose.model('SubCategory', categorySchema)