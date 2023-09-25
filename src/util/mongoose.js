const { default: mongoose } = require("mongoose");

module.exports =  {
    multipleMongooesToObject: function(mongooseArray){
        return mongooseArray.map(mongoose => mongoose.toObject());
    },
    mongooseToObject: function (mongooses){
        return mongooses.toObject();
    }
}