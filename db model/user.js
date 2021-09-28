//create schema
let mongoose=require("mongoose");
var Schema = mongoose.Schema;
let userSchema=new Schema({
    UserName:{type:String,min:3,max:100,required:true,trim:false},
    EmailId:{type:String,required:true,unique:true,trim:true},
    MobileNo:{type:String,required:true}
});
let userModel=mongoose.model("users",userSchema);
var v1 = new userModel({ UserName: 'xyz', EmailId: 'xyz@gmail.com', MobileNo:  '12345622'});
v1.save();
module.exports=userModel;

