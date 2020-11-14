var User = require("./models/User");
var path = require("path");

module.exports = function(app) {
  // Application ------------------------------------------
  app.get("/", function(req, res) {
    res.sendFile(path.resolve("../build/index.html"));
  });

  app.get("/admin", function(req, res) {
    console.log("bruh");
    res.sendFile(path.resolve("./app/client/index.html"));
  });

  app.get("/views/*", function(req, res) {
    res.sendFile(path.resolve("./app/client/index.html"));
  });

  // Wildcard all other GET requests to the angular app
  app.get("*", function(req, res) {
    res.sendFile(path.resolve("../build/index.html"));
  });
};