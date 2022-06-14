const mongoose  = require("mongoose");

const stackSchema  = new mongoose.Schema({
    part:{type:String,required:true},
    video:{type:String,required:true},
    creator_name:{type:String,required:true},
    video_rating:{type:String,required:true},
  
},{
    versionKey:false,
    timestamps:true
    
})

module.exports = mongoose.model("stack",stackSchema);