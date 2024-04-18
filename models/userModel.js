// ייבוא של מונגוס
// יצירת תבנית של הערכים וסוגם
// קישור לאוסף ותיאום עם התבנית שיצרנו
// ייצוא של משתנה שמכיל את הקישור לאוסף
const mongoose=require('mongoose');
const Joi=require('joi');

const userSchema=new mongoose.Schema({
    name:String,
    img:String,
    age:Number
})
// יצירת אובייקט שמכיל בתוכו את הקישור לאוסף
const UserModel=mongoose.model('user',userSchema);

const validUser=(_bodyData)=>{
    let joiSchema=Joi.object({
         name:Joi.string().min(2).max(20).required(),
         id:Joi.string().min(8).max(10).required(),
         age:Joi.number().min(1).max(120)
        })
        return joiSchama.validDate(_bodyData);
}

module.exports={UserModel,validUser};
