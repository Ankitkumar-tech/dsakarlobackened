
const  express = require("express");
const Queue = require("../topicvideomodel/queue.video.model");
const router  = express.Router();


router.post("",async(req,res)=>{
    try {
        const queue  = await Queue.create(req.body);
        res.status(201).send(queue);
    } catch (error) {
        return res.status(501).send(error.message);
    }
})
router.get("",async(req,res)=>{
    try {
       const queue = await Queue.find().lean().exec();
       res.send(queue);
    } catch (error) {
        return res.status(501).send(error.message);
    }
})


module.exports=router;

