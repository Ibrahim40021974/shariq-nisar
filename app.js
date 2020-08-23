const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const ejs=require("ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.listen(3000);
app.use(express.static("public"));

const year=new Date().getFullYear();

app.route("/")
.get(function(req,res){
  res.render("index");
});

app.route("/about")
.get(function(req,res){
   res.render("about");
});

app.route("/gallery")
.get(function(req,res){
   res.render("gallery");
});

app.route("/contact")
.get(function(req,res){
    res.render("contact",{confirmation:""});
});

app.route("/publications")
.get(function(req,res){
    res.render("publications");
});

app.route("/publications/articles")
.get(function(req,res){
    res.render("articles");
});
// app.get("/waste",function(req,res){
//   res.render("waste");
// });
app.route("/publications/book-reviews")
.get(function(req,res){
    res.render("book-reviews");
});
app.route("/publications/books-and-chapters")
.get(function(req,res){
    res.render("books-and-chapters");
});
app.route("/publications/magazines")
.get(function(req,res){
    res.render("magazines");
});
app.route("/publications/books/islamic-finance-and-development")
.get(function(req,res){
  res.render("islamic-finance-and-development");
});
app.route("/publications/books/takaful-and-islamic-cooperative-finance")
.get(function(req,res){
  res.render("takaful-and-islamic-cooperative-finance");
});
app.route("/publications/books/islamic-banking-finance-and-capital-market")
.get(function(req,res){
  res.render("islamic-banking-finance-and-capital-market");
});
app.route("/conferences")
.get(function(req,res){
  res.render("conferences");
});
app.route("/conferences/international-conferences")
.get(function(req,res){
   res.render("international-conferences");
});
app.route("/conferences/national-conferences")
.get(function(req,res){
  res.render("national-conferences");
});
app.route("/blog")
.get(function(req,res){
  res.render("blogs");
});
app.route("/blog/title")
.get(function(req,res){
  res.render("blog");
});
app.route("/resources")
.get(function(req,res){
  res.render("resources");
});
app.route("/resources/articles")
.get(function(req,res){
  res.render("resources-articles.ejs");
});
app.route("/resources/presentations")
.get(function(req,res){
  res.render("resources-presentations.ejs");
});
app.route("/resources/magazine")
.get(function(req,res){
  res.render("resources-magazines.ejs");
});

app.use((req, res, next) => {
  res.status(404).render("404");
});