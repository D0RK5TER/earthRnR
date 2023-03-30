'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SpotImage extends Model {
    static async getSpotImgs(thisId) {
      let imgs = await SpotImage.findAll({
        where: { spotId: thisId },
        attributes: ['id', 'url', 'preview']
      })
      return imgs
    }
    static async getPreview(thisId) {
      let imgURL = await SpotImage.findOne({
        where: { spotId: thisId },
      })
      if (!imgURL) return 'none'
      else return imgURL.url
    }

    static associate(models) {
      SpotImage.belongsTo(models.Spot, { foreignKey: 'spotId' })
    }
  }
  SpotImage.init({
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
    url: {
      type: DataTypes.STRING
    },
    preview: {
      type: DataTypes.BOOLEAN
    }
  }, {
    sequelize,
    modelName: 'SpotImage',
  });
  return SpotImage;
};