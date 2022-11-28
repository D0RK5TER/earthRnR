'use strict';
const {
  Model, sequelize

} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {

    static getRating(arr) {
      let sum = 0
      let i = 0
      if (!arr[0]) return 0
      while (i < arr.length) {
        sum += arr[i].stars
        i++
      }
      return Math.round(sum / i)
    }

    static async getNumRevs(thisId) {
      let num = await Review.findAndCountAll({
        where: { spotId: thisId },
      })
      return num.count
    }


    static associate(models) {
      Review.hasMany(models.ReviewImage, { foreignKey: 'reviewId', onDelete: 'CASCADE' })
      Review.belongsTo(models.Spot, { foreignKey: 'spotId' })
      Review.belongsTo(models.User, { foreignKey: 'userId' })
    }
  }
  Review.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    spotId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    review: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stars: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};