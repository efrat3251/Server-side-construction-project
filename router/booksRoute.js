const express=require('express');
const router=express.Router();
const BookController=require('../controller/bookController');


router.get('/getAllBooks',BookController.getAllBooks);
router.get('/getBookByName/:name',BookController.getAllBooks);
router.get('/addNewBook/:name',BookController.addNewBook);



module.exports=router;
