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
    db.Owner.findAll({}).then(function(dbOwners) {
      res.render("owner", {
        msg: "Welcome!",
        owners: dbOwners
      });
    });
  });

  // find page
  app.get("/find", function(req, res) {
    db.Owner.findAll({}).then(function(dbOwners) {
      res.render("find", {
        msg: "Welcome!",
        owners: dbOwners
      });
    });
  });

  // Load owner page and pass in an owner by id
  app.get("/owner/:id", function(req, res) {
    db.Owner.findOne({ where: { id: req.params.id } }).then(function(
      dbOwner
    ) {
      res.render("owner", {
        owner: dbOwner
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
