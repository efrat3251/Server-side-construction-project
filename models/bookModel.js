// ייבוא של מונגוס
// יצירת תבנית של הערכים וסוגם
// קישור לאוסף ותיאום עם התבנית שיצרנו
// ייצוא של משתנה שמכיל את הקישור לאוסף
const mongoose=require('mongoose');
const Joi=require('joi');

const bookSchema=new mongoose.Schema({
    name:String,
    id:String,
    price:Number
})

// יצירת אובייקט שמכיל בתוכו את הקישור לאוסף
const BookModel=mongoose.model('books',bookSchema);

const validBook=(_bodyData)=>{
let joiSchema=Joi.object({
     name:Joi.string().min(2).max(20).required(),
     id:Joi.string().min(8).max(10).required(),
     price:Joi.number().min(50).max(200)
    })
    return joiSchama.validDate(_bodyData);
}

module.exports={BookModel,validBook};