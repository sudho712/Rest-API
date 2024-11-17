const express = require("express")
const app=express();

const PORT=process.env.PORT || 3000;
app.get("/",(req, res) => {
    res.send("hi i am live");
});

const start = async()=>{
    try{
        app.listen(PORT,()=>{
            console.log(`${PORT} Yes i am connected.....`);
        });
    }catch (error)
    {
        console.log(error);
    }
};

start();