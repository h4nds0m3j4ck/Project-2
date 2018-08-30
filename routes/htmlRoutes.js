var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Owner.findAll({}).then(function(dbOwners) {
      res.render("index", {
        msg: "Welcome!",
        owners: dbOwners
      });
    });
  });

  // owners page
  app.get("/owner", function(req, res) {
    console.log(req.query.City);
    db.Owner.findAll({ where: { City: req.query.City } }).then(function(dbOwners) {
      res.render("example", {
        owner: dbOwners
      });
    });
  });

  // find page
  app.get("/confirm", function(req, res) {
    db.Owner.findAll({}).then(function(dbOwners) {
      res.render("confirm", {
        msg: "Welcome!",
        owners: dbOwners
      });
    });
  });

  // Load owner page and pass in an owner by id
  app.get("/post", function(req, res) {
    db.Owner.findAll({ where: { City: req.params.City } }).then(function(
      dbOwners
    ) {
      res.render("owner", {
        owner: dbOwners
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
