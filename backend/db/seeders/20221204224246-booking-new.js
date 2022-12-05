'use strict';

/** @type {import('sequelize-cli').Migration} */
const { Op } = require('sequelize')
const { User, Spot } = require('../models')
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
const bookingSkeleton = {
  spotId: 0,
  userId: 0,
  startDate: '2023-',
  endDate: '2023-'
}
const getRandom = (max) => Math.floor(Math.random() * max);
const randomBookings = []

let spotSample = await Spot.findAll();
spotSample = JSON.parse(JSON.stringify(spotSample))
let userSample = await User.findAll();
userSample = JSON.parse(JSON.stringify(userSample))

module.exports = {
  async up(queryInterface, Sequelize) {
    while (randomSpots.length < 70) {
      let newRandom = { ...spotSkeleton }
      let owner = ownerSample[getRandom(ownerSample.length - 1)]
      let stateCity = cityStateSample[getRandom(cityStateSample.length - 1)]
      let address = addressSample[getRandom(addressSample.length - 1)]
      let price = priceSample[getRandom(priceSample.length - 1)]
      let descriptIntro = descriptSample[getRandom(descriptSample.length - 1)]
      let description1 = descriptVsample[getRandom(descriptVsample.length - 1)]
      let description2 = descriptVsample[getRandom(descriptVsample.length - 1)]
      while (description1 === description2) description2 = descriptVsample[getRandom(descriptVsample.length - 1)]
      let description3 = descriptVsample[getRandom(descriptVsample.length - 1)]
      while (description3 === description1 || description3 === description2) description3 = descriptVsample[getRandom(descriptVsample.length - 1)]
      description3 = description3.slice(0, -1)
      description3 = 'and ' + description3 + '.'
      newRandom.ownerId = owner.id
      newRandom.name = `${owner.firstName}'s ` + `${nameSample[getRandom(nameSample.length - 1)]}`
      newRandom.city = stateCity.city
      newRandom.state = stateCity.state
      newRandom.address = address
      newRandom.price = price
      newRandom.description = `${newRandom.name} ${descriptIntro} ${description1} ${description2} ${description3}`
      console.log(newRandom)
      randomSpots.push(newRandom)
    }
    
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'Bookings'
    await queryInterface.bulkDelete(options, {})
  }
};
