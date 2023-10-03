const mongo = require("mongoose");
const blogSchema = require("../model/blog.model");
const { query } = require("express");

mongo.connect("mongodb://127.0.0.1:27017/blogjust");

const insertData = async (data)=> {
   const dataRes = await new blogScheme(data).save();
   return dataRes;
}

const allBlogs = async() =>{
 const dataRes = await blogSchema.find();
 return dataRes;
}

const findBlogsByQuery =async (query) =>{
 const dataRes = await blogSchema.find(query);
 return dataRes;
}

module.exports = {
     insertData : insertData,
     allBlogs : allBlogs,
     findBlogsByQuery : findBlogsByQuery
}