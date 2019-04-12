'use strict';
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('course', {
    rid: DataTypes.INTEGER,
    rname: DataTypes.STRING,
    tname: DataTypes.STRING
  }, {
    timestamps: false,
    tableName: 'course'
  });
  Course.associate = function(models) {
    // associations can be defined here
  };
  return Course;
};