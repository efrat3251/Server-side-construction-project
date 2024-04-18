const mongoose=require('mongoose');
const BookModel=require('../models/bookModel');
const validBook=require('../models/bookModel');

const BookController={
    getAllBooks:async(req,res)=>{
        const books=await BookModel.find({});
        res.send(books);
    },
    getBookByName:async(req,res)=>{
        const name1=req.params.name;
        const books=await BookModel.find({"name":name1});
        res.send(books);
    },
    addNewBook:async(req,res)=>{
        const validBook=BookModel.validBook(req.body);
        if(validBook.error){
            return res.json(validBook.error.details)
        }
        const book=new BookModel(req.body);
        await book.save();
        res.send(book);
    }
}

module.exports=BookController;