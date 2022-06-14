
const  express = require("express");
const Recursion = require("../topicvideomodel/recursion.video.model");
const router  = express.Router();


router.post("",async(req,res)=>{
    try {
        const recursion  = await Recursion.create(req.body);
        res.status(201).send(recursion);
    } catch (error) {
        return res.status(501).send(error.message);
    }
})
router.get("",async(req,res)=>{
    try {
       const recursion = await Recursion.find().lean().exec();
       res.send(recursion);
    } catch (error) {
        return res.status(501).send(error.message);
    }
})


module.exports=router;

