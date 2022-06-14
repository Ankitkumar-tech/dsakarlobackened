
const  express = require("express");
const Stack = require("../topicvideomodel/stack.video.model");
const router  = express.Router();


router.post("",async(req,res)=>{
    try {
        const stack  = await Stack.create(req.body);
        res.status(201).send(stack);
    } catch (error) {
        return res.status(501).send(error.message);
    }
})
router.get("",async(req,res)=>{
    try {
       const stack = await Stack.find().lean().exec();
       res.send(stack);
    } catch (error) {
        return res.status(501).send(error.message);
    }
})


module.exports=router;

