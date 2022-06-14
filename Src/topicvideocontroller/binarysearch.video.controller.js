
const  express = require("express");
const BinarySearch = require("../topicvideomodel/binarysearch.video.model");
const router  = express.Router();


router.post("",async(req,res)=>{
    try {
        const binarysearch  = await BinarySearch.create(req.body);
        res.status(201).send(binarysearch);
    } catch (error) {
        return res.status(501).send(error.message);
    }
})
router.get("",async(req,res)=>{
    try {
       const binarySearch = await BinarySearch.find().lean().exec();
       res.send(binarySearch);
    } catch (error) {
        return res.status(501).send(error.message);
    }
})


module.exports=router;

