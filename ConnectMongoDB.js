const mongoose=require('mongoose');

async function main(){
    await mongoose.connect('mongodb://licalhost:27017/library')
    console.log("connect to mongo db");
}
main().catch(err=>console.log(err))