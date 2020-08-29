const mongoose =require("mongoose");
const mongoSchema=new mongoose.Schema({
    urlCode:String,
    longUrl:String,
    shortUrl:String,
});
module.exports=mongoose.model("url",mongoSchema);