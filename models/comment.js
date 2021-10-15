const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Comment extends Model {
  
}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
   
    content: {
        type: DataTypes.STRING
    },
    owner_id: {
        type: DataTypes.INTEGER,
        references:{
            model: "User",
            key: "id",
        }
    },
    post_id: {
        type: DataTypes.INTEGER,
        references:{
            model: "Post",
            key: "id"
        },
    },
  },
  {
   
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);

module.exports = Comment;


