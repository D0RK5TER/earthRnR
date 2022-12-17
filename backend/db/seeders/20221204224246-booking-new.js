'use strict';

/** @type {import('sequelize-cli').Migration} */
const { Op } = require('sequelize')
const { User, Spot } = require('../db/models')
let options = {};


if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
options.tableName = 'Bookings'
const bookingSkeleton = {
  spotId: 0,
  userId: 0,
  startDate: '2023-',
  endDate: '2023-'
}
let dates = [
  ['01-01', '01-06'], ['02-01', '02-06'], ['03-01', '03-06'], ['04-01', '04-06'],
  ['01-22', '01-24'],
  ['05-01', '05-06'], ['07-01', '07-06'], ['08-01', '08-06'],
  ['05-22', '05-24'], ['06-11', '06-15'], ['07-13', '07-17'],
  ['09-01', '09-06'], ['10-01', '10-06'],
  ['09-22', '09-24'], ['11-13', '11-17']
]
const getRandom = (max) => Math.floor(Math.random() * max);


module.exports = {
  async up(queryInterface, Sequelize) {

    let spotSample = await Spot.findAll();
    spotSample = JSON.parse(JSON.stringify(spotSample))
    let userSample = await User.findAll();
    userSample = JSON.parse(JSON.stringify(userSample))

    const randomBookings = []
    spotSample.forEach(x => {
      let notowner = userSample.filter(ux => x.ownerId !== ux.id)
      notowner = notowner.map(lux => lux = lux.id)
      let numBoo = getRandom(dates.length - 1)
      while (numBoo > -1) {
        let newRandom = { ...bookingSkeleton }
        newRandom.startDate += dates[numBoo][0]
        newRandom.endDate += dates[numBoo][1]
        newRandom.spotId = x.id
        newRandom.userId = notowner[numBoo]
        randomBookings.push(newRandom)
        --numBoo
      }
    })
    await queryInterface.bulkInsert(options, randomBookings, {})


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
