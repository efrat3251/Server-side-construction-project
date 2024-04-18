const mongoose=require('mongoose');
const UserModel=require('../models/userModel');
const validUser=require('../models/userModel');

const UserController={
    getAllUsers:async(req,res)=>{
        const users=await UserModel.find({});
        res.send(users)
    },
    getUserByName:async(req,res)=>{
        const name1=req.params.name;
        const users=await UserModel.find({"name":name1});
        res.send(users);
    },
    addNewUser:async(req,res)=>{
        const validUser=UserModel.validUser(req.body);
        if(validUser.error){
            return res.json(validUser.error.details)
        }
        const user=new userModel(req.body); 
        await user.save();
        res.send(user);
    }
}
module.exports=UserController