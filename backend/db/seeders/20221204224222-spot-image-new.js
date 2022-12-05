'use strict';

/** @type {import('sequelize-cli').Migration} */

const { Op } = require('sequelize')
const { Spot } = require('../models')
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
const spotimageSkeleton = {
  spotId: 0,
  url: '',
  preview: null
}
const getRandom = (max) => Math.floor(Math.random() * max);
const randomSpotImages = []

let spotSample = await Spot.findAll();
spotSample = JSON.parse(JSON.stringify(spotSample))

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'SpotImages'
    await queryInterface.bulkDelete(options, {})

  }
};
