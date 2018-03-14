let mongoose = require('mongoose')

let productSchema = new mongoose.Schema({
    prod_name : {
        type:String,
        required:true
    },
    prod_description : {
        type:String,
        required:true
    },
    prod_base_price : {
        type:Number,
        required:true
    },
    prod_tax : {
        type:Number,
        required:true
    },
    prod_final_price : {
        type:Number,
        required:true
    },
    prod_images : [Array],
    prod_discount : {
        type:Number,
        required:true
    }

})

let catSchema = new mongoose.Schema({
    catname:{
        type:String,
        required:true
    },
    catdescription:{
        type:String,
        required:true
    }
})


module.exports = mongoose.model("Cat", catSchema,'cat');