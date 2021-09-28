let express=require("express");
let app=express();
let mongoose=require("mongoose");
let port=process.env.PORT||4500;
app.use(express.json());
let users=require("./routes/user");
//connection
mongoose.connect("mongodb://localhost/UserDB",
                        {useNewUrlParser:true,
                        useUnifiedTopology:true
                        })
                        .then(()=>console.log(`connected to db`))
                        .catch(error=>console.log(`something went wrong  ${error.message}`));


app.listen(port,()=>console.log(`connected to port`));
app.use("/api",users);
app.post("/api",async(req,res)=>{
    let user =await User.findOne({"EmailId":req.body.EmailId});
    if(user){return res.status(403).send({message:"USER Already exist in our system"})};
    
    
        let user1=new User({
            UserName:req.body.UserName,
            EmailId:req.body.EmailId,
            MobileNo:req.body.MobileNo
           
        });
        let data=await user1.save();
        res.send({message:"THANK YOU",d:data});
    });