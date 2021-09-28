let express=require("express");
let router=express.Router();
let Joi=require("@hapi/joi");
let User=require("../db Model/user")

 //create data

router.post("/createuser",async(req,res)=>{
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
// 
function ValidationError(error){
    let schema=Joi.object({
        UserName:Joi.string().min(3).max(200).required(),
        EmailId:Joi.string().required().email(),
        MobileNo:Joi.string().required(),
      
    });
    return schema.validate(error);
}

module.exports=router;