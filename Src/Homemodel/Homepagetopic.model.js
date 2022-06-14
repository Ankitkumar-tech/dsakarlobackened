


const mongoose  = require("mongoose");

const HomepageSchema  = new mongoose.Schema({
    name:{type:String,required:true},
    image:{type:String,required:true}
},{
    versionKey:false,
    timestamps:true
})


module.exports =mongoose.model("Homepage",HomepageSchema);