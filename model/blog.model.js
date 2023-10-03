const mongo = require("mongoose");
const { Schema } = mongo;

const blogSchema = new Schema({
    title : {
        type : String,
        unique : true,
        required : [true,"Title filed is required"]

    },
    category : String,
    image : String,
    decryption : {
        type : String,
        required : [true,"Decryption filed is required"]
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
});

module.exports = mongo.model("Blog",blogSchema);