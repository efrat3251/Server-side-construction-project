const mongoose=require('mongoose');
const LibModel=require('../models/libModel');
const validLib=require('../models/libModel');

const LibraryController={
    getAllLibrarians:async(req,res)=>{
        const libs=await LibModel.find({});
        res.send(libs);
    },
    getLibrarianByName:async(req,res)=>{
        const name1=req.params.name;
        const libs=await UserModel.find({"name":name1});
        res.send(libs);
    },
    addNewLibrarian:async(req,res)=>{
        const validLibrarian=LibModel.validLibrarian(req.body);
        if(validLibrarian.error){
            return res.json(validLibrarian.error.details)
        }
        const librarian=new LibModel(req.body);      
        await librarian.save();
        res.send(librarian);
    }
}
module.exports=LibraryController