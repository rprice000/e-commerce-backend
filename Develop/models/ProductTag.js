const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // Id Columns
    id: {
      type: DataTypes.INTEGER, 
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // Product_id Column
    product_id: {
      type: DataTypes.INTEGER,
      // references the product model's id 
      references: {
        model: 'product',
        key: 'id'
      }
    },
    // Tag_id Column
    tag_id: {
      type: DataTypes.INTEGER,
      // Tag Model Id Reference 
      references: {
        model: 'tag',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
