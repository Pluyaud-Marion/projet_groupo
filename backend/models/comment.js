'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      /*
      Relation 0 à plusieurs entre Comment et Post
      Comment appartient à Post
      */
      models.Comment.belongsTo(models.Post);
      /*
      Relation 0 à plusieurs entre Comment et User
      Comment appartient à User
      */
      models.Comment.belongsTo(models.User);
    }
  };
  Comment.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    comment : {
        type : DataTypes.STRING
    },
    isadmin: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      defaultValue : false
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};