'use strict';

/** @type {import('sequelize-cli').Migration} */


const { Op } = require('sequelize')
const { User, Spot } = require('../models')
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
const reviewSkeleton = {
  spotId: 0,
  userId: 0,
  review: '',
  stars: 0
}

const reviews = [
  'what a beautiful baby that lives here!5', 'i hated the way they look at me, but still would come back3',
  'I think they may have forgotten to change the sheets2', ' Did you know that babies cry at night?!?1',
  'neighbors were always letting themselves inside, didnt enjoy that2', 'Appreciated the freshly cooked breakfast! Sorry about eating yours...5',
  'Why did i ever choose to come here, ugh.2', 'smells like the inside of an old shoe3', 'dishes were left everywhere! Some were not even mine!3',
  'Loved the smell of the rain in the morning, i think they pump it in fresh5', 'why wouldnt my window close3', '10/10 best time ever5',
  'OMG ikr u da bomb! Out4', 'Sick terrace bro4', 'Best host I ever met!5']



const getRandom = (max) => Math.floor(Math.random() * max);
const randomReviews = []


module.exports = {

  async up(queryInterface, Sequelize) {

    let userSample = await User.findAll();
    userSample = JSON.parse(JSON.stringify(userSample))
    let spotSample = await Spot.findAll();
    spotSample = JSON.parse(JSON.stringify(spotSample))

    for (let spot of spotSample) {
      let newRandom = { ...reviewSkeleton }
      let notowner = userSample.filter(x => spot.ownerId !== x.id)
      notowner = notowner.map(x => x = x.id)
      let numRevs = getRandom(20)
      if (numRevs === 0) continue
      let userids = []
      while (userids.length < numRevs) {
        if(notowner.length<2) break
        let ran = getRandom(notowner.length - 1)
        notowner[ran][0]?userids.push(notowner.splice(ran, 1))[0]:userids.push(notowner.splice(ran, 1))
      }
      while (notowner.length) {
        let id = notowner.pop()
        newRandom.userId = id
        newRandom.spotId = spot.id
        let review = reviews[getRandom(reviews.length - 1)]
        let star = review.slice(-1)
        star = +star
        review = review.slice(-1)
        newRandom.review = review
        newRandom.stars = star
        randomReviews.push(newRandom)
      }
    }
    await queryInterface.bulkInsert(options, randomReviews, {})
    // console.log(randomReviews.slice(-1))
  },


  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'Reviews'
    await queryInterface.bulkDelete(options, {})
  }
};
