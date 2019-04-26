var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

var app = express()


    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.text());
    app.use(bodyParser.json({ type: "application/vnd.api+json" }));
    
    // routes
    require("./app/routing/apiRoutes.js")(app);
    require("./app/routing/htmlRoutes.js")(app);
    
    app.listen(PORT, function() {
        console.log("App listening on PORT: " + PORT);
    });
