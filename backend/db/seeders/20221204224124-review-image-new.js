'use strict';

/** @type {import('sequelize-cli').Migration} */
const { Op } = require('sequelize')
const { Review } = require('../models')
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
const reviewimageSkeleton = {
  reviewId: 0,
  url: ''
}
const getRandom = (max) => Math.floor(Math.random() * max);
const randomReviewImage = []

let reviewSample = await Review.findAll();
reviewSample = JSON.parse(JSON.stringify(reviewSample))

module.exports = {
  async up (queryInterface, Sequelize) {
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

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     options.tableName = 'ReviewImages'
     await queryInterface.bulkDelete(options, {})
    
  }
};
