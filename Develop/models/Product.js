// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
     // Id Column 
     id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // Product_name Column
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Price Column 
    price: {
      type: DataTypes.DECIMAL, 
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },
    // Stock Column
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false, 
      defaultValue: 10,
      validate: {
        isNumeric: true
      }
    },
    // Category_id Column
    category_id: {
      type: DataTypes.INTEGER,
      // Category Model Id Reference 
      references: {
        model: 'category',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
