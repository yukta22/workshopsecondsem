var express = require("express");
var app = express();
var fs = require("fs");
var cors = require("cors");
app.use(cors());
app.use(express.static("Root"));

let data =fs.readFileSync("./posts.json");
let json = JSON.parse(data)
console.log(json);

app.use(express.json());
//get method api
app.get("/post",(req,res)=>{
	//json.push({"title":"kirtan","desc":"prajapati"})
    res.send(json);
  // res.send(req.params)
  //res.send(req.query);
})

//post method api
app.post("/post",(req,res)=>{
	
	json.push(req.body);
  	fs.writeFileSync("./posts.json",JSON.stringify(json,null,2));
  	res.send(json);
})	


app.listen(3000,()=>{console.log("listening on port 3000")});