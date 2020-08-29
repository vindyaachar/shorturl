const express=require("express");
const database=require("./config/data");
const shortid=require("shortid");
const validUrl=require("valid-url");
const shortrouter=require("./routes/index");
const router=require("./routes/short");
const app=express();
database();
app.use(express.json({}));
const PORT=8000;
app.listen(PORT,()=>console.log("running on port"+PORT));
app.use("/v1/",shortrouter);
app.use("/v1/index",router);



