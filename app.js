//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();


app.use(bodyParser.urlencoded({extended: true}));

$app.use(express.static("Public"));

$(".notice-bnt").addEventListener("click", (event)=>{

});

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html");
}
);

app.post("/",(req, res)=>{
    res.send ("Thanks for submitting the form");
}
);

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});