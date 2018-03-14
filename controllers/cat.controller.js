let mongoose = require('mongoose');
let cat = require('../shop.model.js');

module.exports.addcat = function(req, res){
    // console.log(req.body);
    cat.
        create({
        catname: req.body.catname,
        catdescription: req.body.catdescription

    },function(err,cate){
        if(err){
            console.log(" Error creating Hotel");
            res
                .status(400)
                .json(err);
        }else{
            console.log("Hotel created", cate);
            res
                .status(201)
                .json(cate);
        }
    })
}

module.exports.getcat = function(req, res){

}
module.exports.getonecat = function(req, res){
    
}

module.exports.editonecat = function(req, res){
    
}

module.exports.deletecat = function(req, res){
    
}
