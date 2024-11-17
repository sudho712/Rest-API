const express = require("express")
const app=express();

const PORT=process.env.PORT || 3000;

const products_routes = require("./routes/products")
app.get("/",(req, res) => {
    res.send("hi i am live");
});

// middleware or to set router 
app.use("/api/products", products_routes);

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