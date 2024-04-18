const express=require('express');
const router=express.Router();
const UserController=require('../controller/userController');


router.get('/getAllUsers',UserController.getAllUsers);
router.get('/getUserByName/:name',UserController.getAllUsers);
router.get('/addNewUser/:name',UserController.addNewUser);


module.exports=router;
