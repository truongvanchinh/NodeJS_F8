const { default: mongoose } = require("mongoose");

module.exports =  {
    multipleMongooseToObject: function(mongooseArray){
        return mongooseArray.map(mongoose => mongoose.toObject());
    },
    mongooseToObject: function (mongooses){
        return mongooses.toObject();
    }
}