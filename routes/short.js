const express = require("express");
const config=require("config");
const Url=require("../Model/url");
var router = express.Router();
router.get("/:shortUrl",async(req,res)=>{
    var shortUrlCode=req.params.shortUrl;
    var url=await Url.findOne({urlCode:shortUrlCode});
    try{
        if(url){
            return res.redirect(url.longUrl);
        }else{
            return res.status(400).json("URL not found ");
        }
    }catch(err){
        console.error("error while retreiving url");
        return res.status(500).json("server error" );
    }
});
module.exports=router;