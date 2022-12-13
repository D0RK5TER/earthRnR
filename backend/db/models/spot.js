'use strict';
// const { User, Review, ReviewImage, SpotImage, BookingdataValues } = require('../mod ');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Spot extends Model {

    static async getSpot(thisId) {
      let spot = await Spot.findOne({
        where: { id: thisId },
        include: [{ model: SpotImage, required: false }]
      })

      return spot
    }
    static associate(models) {
      Spot.belongsTo(models.User, { foreignKey: 'ownerId' })
      Spot.hasMany(models.SpotImage, { foreignKey: 'spotId', onDelete: 'CASCADE' })
      Spot.hasMany(models.Booking, { foreignKey: 'spotId', onDelete: 'CASCADE'  })
      Spot.hasMany(models.Review, { foreignKey: 'spotId', onDelete: 'CASCADE'  })
      Spot.belongsToMany(models.User, { through: models.Booking, foreignKey: 'spotId' })
    }
  }
  Spot.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,

    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lat: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    lng: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0, 100]
      }
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Spot',
  });
  return Spot;
};