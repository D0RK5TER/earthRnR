'use strict';

// /** @type {import('sequelize-cli').Migration} */
const { Review } = require('../../backend/db/models')
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
options.tableName = 'ReviewImages'
const reviewimageSkeleton = {
  reviewId: 0,
  url: ''
}
let images = ['https://thumbs.dreamstime.com/b/interior-old-dirty-garage-interior-old-dirty-garage-full-stuff-108307302.jpg',
  "https://thumbs.dreamstime.com/b/interior-old-dirty-garage-interior-old-dirty-garage-full-stuff-108307302.jpg",
  "https://thumbs.dreamstime.com/b/interior-messy-home-room-scattered-stuff-mess-disorder-concept-view-living-134666124.jpg",
  "https://thumbs.dreamstime.com/b/modern-kitchen-cleaning-washing-up-dirty-dishes-clean-cluttered-breakfast-bar-205360665.jpg",
  "https://thumbs.dreamstime.com/b/messy-room-living-clothes-other-stuff-40962956.jpg",
  "https://media.istockphoto.com/id/1197494143/photo/men-eating-vegan-creamy-roasted-pumpkin-soup.jpg?b=1&s=170667a&w=0&k=20&c=VdQrz3S2SUrRRN_IqlGYVjtgwxdR-QMK49dYvIHW5W8=",
  "https://media.istockphoto.com/id/530417618/photo/baked-salmon-garnished-with-asparagus-and-tomatoes-with-herbs.jpg?b=1&s=170667a&w=0&k=20&c=4FCfIIKB5bACQs1_IzxnVeEfBi4Q9KKcjnoJdJyOqVE=",
  "https://media.istockphoto.com/id/1189709277/photo/pasta-penne-with-roasted-tomato-sauce-mozzarella-cheese-grey-stone-background-top-view.jpg?b=1&s=170667a&w=0&k=20&c=XMEINFZ2B_pWYgTwFO6z90sTQXpWoyXD14mmuWUbajI=",
  "https://media.istockphoto.com/id/104704117/photo/restaurant-plates.jpg?s=612x612&w=0&k=20&c=MhFdN_qVgzoHov-kgFx0qWSW0nZht4lZV1zinC3Ea44=",
  "https://media.istockphoto.com/id/1427534719/photo/unrecognizable-friends-and-family-sharing-food-at-dinning-room.jpg?s=612x612&w=0&k=20&c=fjDIjCxYrauptYQ0zV5KNRbCDv7I3yjn7n-B69r1soo="]
const getRandom = (max) => Math.floor(Math.random() * max)
const randomReviewImage = []

module.exports = {
  async up(queryInterface, Sequelize) {
    let reviewSample = await Review.findAll();
    reviewSample = JSON.parse(JSON.stringify(reviewSample))
    let revids = reviewSample.map(x => x = x.id)
    revids.forEach(x => {
      let z = { ...reviewimageSkeleton }
      let ran = images[getRandom(images.length - 1)]
      z.reviewId = x
      z.url = ran
      randomReviewImage.push(z)
    })
    // console.log(revids)

    await queryInterface.bulkInsert(options, randomReviewImage, {})

  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'ReviewImages'
    await queryInterface.bulkDelete(options, {})

  }
};
