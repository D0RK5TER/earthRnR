'use strict';

/** @type {import('sequelize-cli').Migration} */

const { Op } = require('sequelize')
const { Spot } = require('../../db/models')
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
const cheap = [
  "https://a0.muscache.com/im/pictures/dd9cf0f0-57e0-42a5-aef6-b15e95ab0d40.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/6f661499-126e-4228-b9a6-4e023c2933a4.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/a3fd4325-e4dc-4d5d-bf49-9a48b6ba4724.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/49732403/06cb9f75_original.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/807726ca-56db-4106-b7dd-d2c9c7728944.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/251b1662-7b18-49b3-80a7-9c6e41077edb.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/18eb8852-cc46-4c22-9d76-affc4966b28e.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/74308694/4717f934_original.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/25d4e80d-1508-4558-bbf0-849377fde62f.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/7cc10af4-14c9-42c6-bf22-c22c5364d954.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/6b0f6999-d79b-4913-89ce-14fddf904627.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/7099edfe-fe1d-454c-a144-fa0f13bf6dac.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/09e63a49-5324-49fa-8c44-795ad0774fbb.jpg?im_w=720",
]
const cheapsmall = [
  "https://a0.muscache.com/im/pictures/bdde3943-aaea-4270-834c-191f9cac5d36.jpg?im_w=480",
  "https://a0.muscache.com/im/pictures/d7ece09a-928e-4a21-84a2-c52aae90fac9.jpg?im_w=480",
  "https://a0.muscache.com/im/pictures/f58918f8-8aec-4874-bd9f-6cfed4e9cd51.jpg?im_w=480",
  "https://a0.muscache.com/im/pictures/7e1a2aed-8769-4013-9be8-1726682bd537.jpg?im_w=480",
  "https://a0.muscache.com/im/pictures/99754403-101c-4483-bff5-505588b5c1f8.jpg?im_w=480",
  "https://a0.muscache.com/im/pictures/d6c38107-536e-4e2b-a66e-25ac203c6701.jpg?im_w=480",
  "https://a0.muscache.com/im/pictures/d83035a3-cd3e-4dc6-9a79-8ca77bd02caa.jpg?im_w=480",
  "https://a0.muscache.com/im/pictures/18a09a89-288a-47ee-9829-39a5ac81ad8f.jpg?im_w=480",
  "https://a0.muscache.com/im/pictures/084b6c0c-9a4e-4d9e-9202-09e1d1f24785.jpg?im_w=480",
]

const mid = [
  "https://a0.muscache.com/im/pictures/f906fe29-49de-4375-a485-a8148c5e0de0.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/50477634-42c5-4b7f-85ae-dc3f683e8a40.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/38ee1534-7f33-4f6f-a52a-7e1683971344.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/712a31dd-fad0-4882-ba33-783e5e8620e4.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/58f0d2d7-e5d5-4235-8bd2-9af249bf7247.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/6e239267-4905-4856-a250-91dcd11546e1.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/e5f2aa0a-e63a-40c4-b658-560d64ac3151.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/bf24bd42-f72a-4a8d-b76b-13273ca8bbb0.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/a48babea-89d7-4697-b035-bdd753f58c58.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/d78aa6a4-163e-4308-82e0-8e2c10d1e7a2.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/7f58bb20-e68a-4ae9-9e5a-64949975ffc9.jpg?im_w=720",
]
const midsmall = [
  "https://a0.muscache.com/im/pictures/e1e61ce2-882c-4ef0-95d7-91b65edf90c0.jpg?im_w=480",
  "https://a0.muscache.com/im/pictures/92ea610f-b313-4baa-a326-73c8477bd3ab.jpg?im_w=480",
  "https://a0.muscache.com/im/pictures/55b9bf32-6fba-4a26-81b6-70b89d3ccf5f.jpg?im_w=480",
  "https://a0.muscache.com/im/pictures/86e8cb85-a766-41a4-b0f0-e6c3aeb177b6.jpg?im_w=480",
  "https://a0.muscache.com/im/pictures/16634524-0dfd-428c-8b17-d2e817032430.jpg?im_w=480",
  "https://a0.muscache.com/im/pictures/eedbe6a4-3ac5-47d5-bbf8-f4c373de05b0.jpg?im_w=480",
  "https://a0.muscache.com/im/pictures/16074266/cd11edec_original.jpg?im_w=480",
  "https://a0.muscache.com/im/pictures/74475782/a6f67f6e_original.jpg?im_w=480",
  "https://a0.muscache.com/im/pictures/e6035e6c-84c2-4ab5-9c76-bf7ea514c91d.jpg?im_w=480",
  "https://a0.muscache.com/im/pictures/b68de971-6b0c-482a-9f9e-c160ad64fb63.jpg?im_w=480",
  "https://a0.muscache.com/im/pictures/79f4933f-4a7f-4f46-b82b-9c1f3f08c2d3.jpg?im_w=480",
]
const big = [
  "https://a0.muscache.com/im/pictures/de8e6fd5-3966-4c90-bd03-36ebb00d97c4.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/2bfa9fd4-08cc-4014-b7ec-898f80a24525.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/1776527e-598d-48b1-a3a2-c6c5671b40a3.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/a565783e-0503-417b-bb99-0de56a1230b9.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/ebb5df30-ad26-4f8c-b67d-391b89e49fe1.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/5b064a4b-c0c9-48c7-b340-01ad0e29584b.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/0e022b3d-a7da-4662-acbf-46fda3a357e4.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/318a618c-4753-452c-853d-04116f16f468.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/28b3cb18-2fd1-4148-a463-119b8694d363.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/9cd82edf-144f-457b-9fcc-8428a82ea6d1.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/6109d4f9-c85e-4769-a280-0105cd2077ae.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/9ed8a604-ec76-4e31-a865-4c63e78b54de.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/723db311-65bc-4a05-a983-70778578a551.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/95175219-fe90-4107-95d6-e4d34797d43b.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/c31b1e0a-7a27-4593-bc99-112a0b9c5ab1.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/1de63bb0-bc5d-4398-a9a9-895d12ab89b7.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/ebb5df30-ad26-4f8c-b67d-391b89e49fe1.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/e51f72a6-1428-485a-9887-736aaa117a48.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/a9b047c3-0e64-4a3a-8454-f29f027b82fe.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/87486b1a-0c28-4d81-a509-1797836bd422.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/18e94a0c-ddc2-445b-aa80-6cc9ab8d766b.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/e4cdb27a-88ce-40b8-81d3-73be7bf35403.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/559d9a97-1a14-41b5-8121-73f1ae66a326.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/710ed78b-2707-44d3-9ce3-8c396879c541.jpg?im_w=720",
]
const bigsmall = [
  "https://a0.muscache.com/im/pictures/c0542080-1c36-414b-b5e8-12c17a50494f.jpg?im_w=480",
  "https://a0.muscache.com/im/pictures/fa047f67-6550-4429-8888-ad317513e2ba.jpg?im_w=480",
  "https://a0.muscache.com/im/pictures/a221214c-0bca-4b9a-a670-d28a9d5ceab9.jpg?im_w=480",
  "https://a0.muscache.com/im/pictures/5641c859-3074-42d5-8f08-8044d5a52bd2.jpg?im_w=480",
  "https://a0.muscache.com/im/pictures/3f319524-a690-4d4a-85e2-4437a59c9f68.jpg?im_w=480",
  "https://a0.muscache.com/im/pictures/775bbd73-ed4a-4145-ba0b-78ac0718cbe2.jpg?im_w=480",
  "https://a0.muscache.com/im/pictures/24ec86b7-b66b-4e79-b370-bab7408d0002.jpg?im_w=480",
  "https://a0.muscache.com/im/pictures/c6801c55-747b-445a-8878-6b68b2d1042d.jpg?im_w=480",
  "https://a0.muscache.com/im/pictures/286f363c-ee82-4aaa-aab6-073bc68734fc.jpg?im_w=480",
]
const spotimageSkeleton = {
  spotId: 0,
  url: '',
  preview: null
}
options.tableName = 'SpotImages'
const getRandom = (max) => Math.floor(Math.random() * max);


let imgs = []
module.exports = {
  async up(queryInterface, Sequelize) {
    let spotSample = await Spot.findAll();
    spotSample = JSON.parse(JSON.stringify(spotSample))

    for (let s of spotSample) {
      let newimg = { ...spotimageSkeleton }
      if (s.price < 100) {
        newimg.spotId = s.id
        newimg.preview = true
        newimg.url = cheap[getRandom(cheap.length - 1)]
        imgs.push(newimg)
        let i = 0
        while (i < 4) {
          let newsmallimg = { ...newimg }
          newsmallimg.preview = false
          newsmallimg.url = cheapsmall[getRandom(cheapsmall.length - 1)]
          imgs.push(newsmallimg)
          i++
        }
      } else if (s.price < 300) {
        newimg.spotId = s.id
        newimg.preview = true
        newimg.url = mid[getRandom(mid.length - 1)]
        imgs.push(newimg)
        let i = 0
        while (i < 4) {
          let newsmallimg = { ...newimg }
          newsmallimg.preview = false
          newsmallimg.url = midsmall[getRandom(midsmall.length - 1)]
          imgs.push(newsmallimg)
          i++
        }
      } else {
        newimg.spotId = s.id
        newimg.preview = true
        newimg.url = big[getRandom(big.length - 1)]
        imgs.push(newimg)
        let i = 0
        while (i < 4) {
          let newsmallimg = { ...newimg }
          newsmallimg.preview = false
          newsmallimg.url = bigsmall[getRandom(bigsmall.length - 1)]
          imgs.push(newsmallimg)
          i++
        }
      }
    }

    await queryInterface.bulkInsert(options, imgs, {})

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(options, {})

  }
};
