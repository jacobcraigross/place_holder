var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var app = express();

// Application configuration.
mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// Mongoose - Model configuration.
var blogSchema = new mongoose.Schema({
   title: String,
   image: String,
   body: String,
   created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

// Restful routes.
app.get("/", function(req, res){
   res.redirect("/blogs"); 
});

app.get("/blogs", function(req, res){
   Blog.find({}, function(err, blogs){
     if (err) {
         console.log("Error jack ass + + +");
     } else {
         res.render("index", {blogs: blogs});
     }
   });
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("CIRCLE OF THE TYRANT-SERVERS");
});