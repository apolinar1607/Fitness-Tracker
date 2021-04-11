const path = require("path");

module.exports = function(app) {
  //to render Home page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  //to render Exercise page
  app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  })
  //to render Stats page
  app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  })
};