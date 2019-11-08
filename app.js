const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();

// APP CONFIG
app.set("view engine", "ejs"); 
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));

// ******************** ROUTES ********************
// Home
app.get("/", (req, res) =>{
    res.render("home");
});

// Portfolio page route
app.get("/portfolio", (req, res) =>{
    res.render("portfolio");
});

// Portfolio documentation page routes
app.get("/places/doc", (req, res) =>{
    res.render("placesDoc");
});

app.get("/browser/doc", (req, res) =>{
    res.render("browserDoc");
});

app.get("/dogPerson/doc", (req, res) =>{
    res.render("dogPersonDoc");
});

// Portfolio source code page routes
app.get("/places/src", (req, res) =>{
    res.render("placesSrc");
});
 
app.get("/browser/src", (req, res) =>{
    res.render("browserSrc");
});

app.get("/dogPerson/src", (req, res) =>{
    res.render("dogPersonSrc");
});



 

// Server listener logic
if(process.env.PORT && process.env.PORT > 0){

    app.listen(process.env.PORT, process.env.IP, function(){
        console.log("Server has Started on port " + process.env.PORT + " and IP " + process.env.IP);
    });

} else {

    var processEnvPORT = 3000;
    var processEnvIP = '0.0.0.0';
    // var processEnvIP = 'localhost';
    app.listen(processEnvPORT, processEnvIP, function(){
        console.log("Server has Started on port " + processEnvPORT + " and IP " + processEnvIP);
    });

}

// Skills page route
app.get("/skills", (req, res) =>{
    res.render("skills");
});
