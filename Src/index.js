const express  = require("express");
const connect  = require("./configs/db");

const app  = express();
app.use(express.json());

const HomeController = require("./Homecontroller/Homepagetopic.controller")




app.use("/home",HomeController)


app.listen(2304,async function (){
    try {
         await connect()
        console.log("port 2304 is working fine");
    } catch (error) {
        console.log(error.message)
        
    }
})






