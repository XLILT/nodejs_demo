'use strict';
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    rid: DataTypes.INTEGER,
    rname: DataTypes.STRING,
    tname: DataTypes.STRING
  }, {});
  Course.associate = function(models) {
    // associations can be defined here
  };
  return Course;
};