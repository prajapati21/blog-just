const { response } = require("express");
const database = require("../database/db");

const uploadData = async (request,response) =>{
    if(!request.file)
    {
        response.status(404);
        response.json({
            type : "image-validation",
            filed : "file",
            message : "Please select a file"
        });
    }
     else
     {
        const data = request.body;
 const fileInfo = request.file;
 data["image"] = fileInfo.destination+"/"+fileInfo.filename;
 try{
  const dataRes = await database.insertData(data);
   response.status(200);
   response.json(dataRes);
 }
 catch (error)
    {
        let filed = [];
        response.status(409);
        if(error.code && error.code ==11000)
        {
           response.json({
               type : "unique",
               message : "Title filed must be unique !",
               failed : "title"
            });
        }
        else
        {
           for(let key in error.errors)
           {
              filed.push({
                  filed : key,
                  message : error.errors[key].message
              });
           }
           response.json({
            type : "required",
            filed : filed

           });
        }
    }
     }

}

const getAllBlogs =async (request,response)=>{
    const dataRes = await database.allBlogs();
    if(dataRes.length !=0)
    {
        response.status(200);
        response.json(dataRes);
    }
    else
    {
        response.status(404);
        response.json({
            message : "data not found !"
        });
    }

}

const getBlogsByQuery = async(request,response)=>{
    const query = {
        category : request.params.category
    }

    const dataRes = await database.findBlogsByQuery(query);
    if(dataRes.length !=0)
    {
        response.status(200);
        response.json(dataRes);
    }
    else
    {
        response.status(404);
        response.json({
            message : "There no blogs in this category !"
        });
    }

}

module.exports = {
    uploadData : uploadData,
    getAllBlogs : getAllBlogs,
    getBlogsByQuery : getBlogsByQuery
  };

