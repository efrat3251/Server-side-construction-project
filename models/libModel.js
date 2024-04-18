// ייבוא של מונגוס
// יצירת תבנית של הערכים וסוגם
// קישור לאוסף ותיאום עם התבנית שיצרנו
// ייצוא של משתנה שמכיל את הקישור לאוסף
const mongoose=require('mongoose');
const Joi=require('joi');

const libSchema=new mongoose.Schema({
    name:String,
    id:String,
    age:Number,
    salary:Number
})
// יצירת אובייקט שמכיל בתוכו את הקישור לאוסף
const LibModel=mongoose.model('lib',libSchema);

const validLib=(_bodyData)=>{
    let joiSchema=Joi.object({
         name:Joi.string().min(2).max(20).required(),
         id:Joi.string().min(8).max(10).required(),
         age:Joi.number().min(1).max(120),
         salary:Joi.number().min(100).max(12000)
        })
        return joiSchama.validDate(_bodyData);
}

module.exports={LibModel,validLib};
