module.exports = function(sequelize, DataTypes) {
  var Owner = sequelize.define("Owner", {
    Name: DataTypes.TEXT,
    Address: DataTypes.TEXT,
    Description: DataTypes.TEXT,
    Price: DataTypes.INTEGER,
    Availability: DataTypes.TINYINT
  });
  return Owner;
};
