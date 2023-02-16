const express=require('express');
const {v4 : uuidv4, v4} = require('uuid');
const userRouter=require('./routers/category');


 
const app = express();
app.use(express.json())
app.use(userRouter)


app.listen(3000,()=>{
    console.log("Server is up on port 3000")
})