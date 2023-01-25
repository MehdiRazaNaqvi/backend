const mongoose = require('mongoose')
const Schema= mongoose.Schema


const PackageTypeSchema= Schema({
    name:{
        type:String,
        require:true,
        unique:true
    },
    image:{
        type:String,
        require:true,
    },
    status:{
        type:String,
        default:'active',
        require:true
    },
  
    
})

module.exports = mongoose.model('MainCategory', PackageTypeSchema)