const mongoose=require("mongoose");
const config=require("config");
const data=config.get("mongoURI");
/*mongoose.connect (
    process.env.MONGODB_URL,{
        useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    },
    (err) => {
        if (err) throw err;
        console.log("database connected");
      }
);
module.exports=database;*/
const database=async()=>{
    try{
        await mongoose.connect(data,{
            useNewUrlParser:true,
            useUnifiedTopology: true,
           
           
            
        });
        console.log("database connected");
    }catch(err){
        console.error(err.message);
    }
}

module.exports=database;
