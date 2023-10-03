const express = require("express");
const server = express();
server.listen(8080);

const cors = require("./middleware/cors.middleware");
const bodyParser = require("./middleware/bodyparser.middleware");
const multer = require("./middleware/multer.middleware");
//middleware code
server.use(cors)
server.use(bodyParser.urlEncoded);
server.use(bodyParser.jsonEncoded);
server.use(multer);

// Require routing
const blogRouter = require("./routing/blog.routing");
// Middleware routing
server.use("/storage",express.static(__dirname+"/storage"))
server.use("/blog", blogRouter);



