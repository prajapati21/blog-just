const express = require("express");
const router = express.Router();
const blogController = require("../controller/blog.controller");

router.get("/",(request,response)=>{
   blogController.getAllBlogs(request,response);
});

router.get("/:category",(request,response)=>{
    blogController.getBlogsByQuery(request,response);
 });

router.post("/",(request,response)=>{
    blogController.uploadData(request,response);
});

router.put("/",(request,response)=>{
    response.send("put Requested");
});

router.delete("/",(request,response)=>{
    response.send("delete Requested");
});

module.exports = router;