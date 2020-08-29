const express= require("express");
const shortid=require("shortid");
const validUrl=require("valid-url");
const config=require("config");
const Url= require("../Model/url");
var shortrouter=express.Router();

shortrouter.post("/",async(req,res)=>{
    const longUrl=req.body.longUrl;
    const baseUrl=config.get("baseURL");
    if(!validUrl.isUri(baseUrl)){
        return res.status(401).json("ERROR");

    }
    const urlCode = shortid.generate();
    if(validUrl.isUri(longUrl)){
        try{
            var url=await Url.findOne({longUrl : longUrl});
            if(url){
                return res.status(200).json(url);
            }else{
                const shortUrl=baseUrl + "/" +urlCode;
                url=new Url({
                    longUrl,
                    shortUrl,
                    urlCode,

                })
                await url.save()
                return res.status(201).json(url);
            }
        }catch(err){
            console.error(err.message);
            return res.status(500).json("server error"+err.message );
        }
    }else{
        res.status(400).json("please enter valid URL")
    }
});
module.exports=shortrouter;