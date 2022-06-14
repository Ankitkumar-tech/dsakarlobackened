
const  express = require("express");
const LinkedList = require("../topicvideomodel/linkedlist.video.model");
const router  = express.Router();


router.post("",async(req,res)=>{
    try {
        const linkedlist  = await LinkedList.create(req.body);
        res.status(201).send(linkedlist);
    } catch (error) {
        return res.status(501).send(error.message);
    }
})
router.get("",async(req,res)=>{
    try {
       const linkedlist = await LinkedList.find().lean().exec();
       res.send(linkedlist);
    } catch (error) {
        return res.status(501).send(error.message);
    }
})


module.exports=router;

