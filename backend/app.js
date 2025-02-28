const express = require('express');
const app = express();
const logger = require('morgan');

const PORT = 3000;
app.use(logger('dev'));

app.get("/login",(req,res)=>{
    res.send("Hello new user ");
});
app.listen(PORT, (error) =>{
    if(error){
        console.log(error);
    }
    else{
        console.log(`Server is running on port ${PORT}`);
    }
});