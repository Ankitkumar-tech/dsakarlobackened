
const express = require("express");
const Home    =require("../Homemodel/Homepagetopic.model");
const router  = express.Router();


// from here post and get schema  is on process  ;

router.post("",async(req,res)=>{
    try {
        const home  = await Home.create(req.body);
        res.status(201).send(home);
    } catch (error) {
       return res.status(501).send(error.message);
    }
})

// here I write the get 

router.get("",async(req,res)=>{
    try {
        const home  =await Home.find().lean().exec();
        res.send(home);
    } catch (error) {
        return res.status(501).send(error.message);
    }
})


module.exports  = router