var db = require("../models");

module.exports = function(app) {
  // // Get all owners
  // app.get("/api/owners/:City", function(req, res) {
  //   db.Owner.findAll({}).then(function(dbOwners) {
  //     res.json(dbOwners);
  //   });
  // });

  // get route for cities
  app.get("/api/owners/:City", function(req, res) {
    db.Post.findAll({
      where: {
        City: req.params.City
      }
    }).then(function(dbOwners) {
      res.json(dbOwners);
    });
  });

  // Create a new owner
  app.post("/api/owners", function(req, res) {
    db.Owner.create(req.body).then(function(dbOwners) {
      res.json(dbOwners);
    });
  });

  // Delete an owner by id
  app.delete("/api/owners/:id", function(req, res) {
    db.Owner.destroy({ where: { id: req.params.id } }).then(function(dbOwners) {
      res.json(dbOwners);
    });
  });
};
