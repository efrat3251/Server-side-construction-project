const express=require('express');
const router=express.Router();
const LibraryController=require('../controller/libController');


router.get('/getAllLibrarians',LibraryController.getAllLibrarians);
router.get('/getLibrarianByName/:name',LibraryController.getAllLibrarians);
router.get('/addNewLibrarian/:name',LibraryController.addNewLibrarian);




module.exports=router;
