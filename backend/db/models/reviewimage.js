'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ReviewImage extends Model {

    static async getRevImgs(review) {
      let imgs = await ReviewImages.findAll({
        where: { reviewId: review.id },
        attributes: ['id', 'url']
      })
      return imgs
    }
    static associate(models) {
      ReviewImage.belongsTo(models.Review, { foreignKey: 'reviewId' })
    }
  }
  ReviewImage.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    reviewId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'ReviewImage',
  });
  return ReviewImage;
};