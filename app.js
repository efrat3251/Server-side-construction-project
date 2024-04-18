// ספריות חיצוניות
const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');

// קבצים פנימיים
require('./ConnectMongoDB');
const BookRouter=require('./router/bookRouter');
const LibrianRouter=require('./router/librianRouter');
const UserRouter=require('./router/userRouter');

const app=express();
const port=3000;

app.use(cors());
app.use(bodyParser.json)

app.use('./book',BookRouter);
app.use('./librian',LibrianRouter);
app.use('./user',UserRouter);

app.listen(port,()=>console.log(`listen in port:${port}`))

