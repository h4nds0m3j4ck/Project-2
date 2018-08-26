var db = require("../models");

module.exports = function(app) {
  // Get all owners
  app.get("/api/owners", function(req, res) {
    db.Owner.findAll({}).then(function(dbOwners) {
      res.json(dbOwners);
    });
  });

  // Create a new owner
  app.post("/api/owners", function(req, res) {
    db.Owner.create(req.body).then(function(dbOwner) {
      res.json(dbOwner);
    });
  });

  // Delete an owner by id
  app.delete("/api/owners/:id", function(req, res) {
    db.Owner.destroy({ where: { id: req.params.id } }).then(function(
      dbOwner
    ) {
      res.json(dbOwner);
    });
  });
};
