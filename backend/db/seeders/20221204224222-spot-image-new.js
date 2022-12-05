'use strict';

/** @type {import('sequelize-cli').Migration} */

const { Op } = require('sequelize')
const { Spot } = require('../models')
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
  "https://a0.muscache.com/im/pictures/miso/Hosting-48246773/original/a737dc39-2622-4f8b-9022-38741ab959d2.jpeg?im_w=720",
  "https://a0.muscache.com/im/pictures/18eb8852-cc46-4c22-9d76-affc4966b28e.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/74308694/4717f934_original.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/25d4e80d-1508-4558-bbf0-849377fde62f.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/7cc10af4-14c9-42c6-bf22-c22c5364d954.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/6b0f6999-d79b-4913-89ce-14fddf904627.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/7099edfe-fe1d-454c-a144-fa0f13bf6dac.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/09e63a49-5324-49fa-8c44-795ad0774fbb.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/miso/Hosting-39052860/original/687415cf-498c-4785-ac40-71c7d26d9449.jpeg?im_w=720"

]
const cheapsmall = [
  "https://a0.muscache.com/im/pictures/miso/Hosting-29389628/original/61e8f5b3-7cac-4316-bea6-4e6548a54f1e.jpeg?im_w=480",
  "https://a0.muscache.com/im/pictures/bdde3943-aaea-4270-834c-191f9cac5d36.jpg?im_w=480",
  "https://a0.muscache.com/im/pictures/d7ece09a-928e-4a21-84a2-c52aae90fac9.jpg?im_w=480",
  "https://a0.muscache.com/im/pictures/miso/Hosting-40539207/original/8e0752cc-f6ee-48a5-8de9-61d9372cc027.jpeg?im_w=480",
  "https://a0.muscache.com/im/pictures/f58918f8-8aec-4874-bd9f-6cfed4e9cd51.jpg?im_w=480",
  "https://a0.muscache.com/im/pictures/7e1a2aed-8769-4013-9be8-1726682bd537.jpg?im_w=480",
  "https://a0.muscache.com/im/pictures/miso/Hosting-45017115/original/a593e976-e502-42a5-960d-3a29ee88fc1a.jpeg?im_w=480",
  "https://a0.muscache.com/im/pictures/miso/Hosting-45017115/original/fe8b0862-b425-473b-8e6d-5ae2a3b28c40.jpeg?im_w=480",
  "https://a0.muscache.com/im/pictures/miso/Hosting-715990626223541790/original/d4fac495-668d-43fd-9055-78631c1b33fd.jpeg?im_w=480",
  "https://a0.muscache.com/im/pictures/miso/Hosting-667547656239404245/original/2cc6ffde-68a0-4280-9d3d-bbce76260934.jpeg?im_w=480",
  "https://a0.muscache.com/im/pictures/miso/Hosting-52367370/original/23af15a8-85e2-4eb0-bb7d-cbfe4dff5bbd.jpeg?im_w=480",
  "https://a0.muscache.com/im/pictures/miso/Hosting-667547656239404245/original/f7525bd0-cd29-4b16-8949-74ac2fea2172.jpeg?im_w=480",
  "https://a0.muscache.com/im/pictures/99754403-101c-4483-bff5-505588b5c1f8.jpg?im_w=480",
  "https://a0.muscache.com/im/pictures/d6c38107-536e-4e2b-a66e-25ac203c6701.jpg?im_w=480",
  "https://a0.muscache.com/im/pictures/d83035a3-cd3e-4dc6-9a79-8ca77bd02caa.jpg?im_w=480",
  "https://a0.muscache.com/im/pictures/18a09a89-288a-47ee-9829-39a5ac81ad8f.jpg?im_w=480",
  "https://a0.muscache.com/im/pictures/084b6c0c-9a4e-4d9e-9202-09e1d1f24785.jpg?im_w=480"
]

const mid = [
  "https://a0.muscache.com/im/pictures/f906fe29-49de-4375-a485-a8148c5e0de0.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/miso/Hosting-18994970/original/9a160552-6fa1-4d07-9a49-b93a4792dd74.jpeg?im_w=720",
  "https://a0.muscache.com/im/pictures/miso/Hosting-48089233/original/32e6234f-2f32-4b7c-8137-ee81e9f6c7d1.jpeg?im_w=720",
  "https://a0.muscache.com/im/pictures/50477634-42c5-4b7f-85ae-dc3f683e8a40.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/38ee1534-7f33-4f6f-a52a-7e1683971344.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/712a31dd-fad0-4882-ba33-783e5e8620e4.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/58f0d2d7-e5d5-4235-8bd2-9af249bf7247.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/6e239267-4905-4856-a250-91dcd11546e1.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/miso/Hosting-53113872/original/808f1ec1-c1a1-47fe-828b-ff319a9edf02.jpeg?im_w=720",
  "https://a0.muscache.com/im/pictures/miso/Hosting-153903/original/c922d4af-d8f2-4d17-83fd-3a8d0554facf.jpeg?im_w=720",
  "https://a0.muscache.com/im/pictures/e5f2aa0a-e63a-40c4-b658-560d64ac3151.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/bf24bd42-f72a-4a8d-b76b-13273ca8bbb0.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/miso/Hosting-687569803799313562/original/12c42dc0-9a56-495d-9999-201adc7e57fd.jpeg?im_w=720",
  "https://a0.muscache.com/im/pictures/miso/Hosting-30793960/original/f5ee8752-efb9-4f8f-a287-e78e3b1aeecb.jpeg?im_w=720",
]
const midsmall = [
  "https://a0.muscache.com/im/pictures/miso/Hosting-30793960/original/b6cb3780-25cc-4d1a-a3a0-c7110fb7e64c.jpeg?im_w=480",
  "https://a0.muscache.com/im/pictures/miso/Hosting-30793960/original/d681e899-c8db-48de-9962-ecb9f626b7e1.jpeg?im_w=480",
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
  "https://a0.muscache.com/im/pictures/miso/Hosting-42455730/original/59dce7e7-917c-4da4-939a-6f8e87e6cb99.jpeg?im_w=480",
  "https://a0.muscache.com/im/pictures/miso/Hosting-42455730/original/2cc52c7c-dd87-4814-8b00-6730857f0632.jpeg?im_w=480",
  "https://a0.muscache.com/im/pictures/79f4933f-4a7f-4f46-b82b-9c1f3f08c2d3.jpg?im_w=480",
  "https://a0.muscache.com/im/pictures/miso/Hosting-18994970/original/b7b4da60-02cd-4193-8d54-5c55312b89c6.jpeg?im_w=480",
  "https://a0.muscache.com/im/pictures/miso/Hosting-18994970/original/c7fc8d28-781e-4dc5-a95d-07924e8a2260.jpeg?im_w=480",
  "https://a0.muscache.com/im/pictures/miso/Hosting-48089233/original/452d9857-b31a-450f-8579-1cb7be5c8714.jpeg?im_w=480",
  "https://a0.muscache.com/im/pictures/miso/Hosting-48089233/original/ab307e76-ad60-4ee5-8a16-176c8aeb14be.jpeg?im_w=480"
]
const big = [
  "https://a0.muscache.com/im/pictures/prohost-api/Hosting-47354666/original/b92fc905-70ea-449a-aa95-c79ade3ceadb.jpeg?im_w=720",
  "https://a0.muscache.com/im/pictures/de8e6fd5-3966-4c90-bd03-36ebb00d97c4.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/2bfa9fd4-08cc-4014-b7ec-898f80a24525.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/miso/Hosting-48225744/original/310a27fd-a714-4e89-bcb3-a55b20f68c85.jpeg?im_w=720",
  "https://a0.muscache.com/im/pictures/prohost-api/Hosting-49194945/original/c49456c8-8608-446c-9f01-3843adc81945.jpeg?im_w=720",
  "https://a0.muscache.com/im/pictures/1776527e-598d-48b1-a3a2-c6c5671b40a3.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/a565783e-0503-417b-bb99-0de56a1230b9.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/miso/Hosting-46955724/original/2d019ea6-a78e-4c21-bc2d-70669ef1b516.jpeg?im_w=720",
  "https://a0.muscache.com/im/pictures/ebb5df30-ad26-4f8c-b67d-391b89e49fe1.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/5b064a4b-c0c9-48c7-b340-01ad0e29584b.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/0e022b3d-a7da-4662-acbf-46fda3a357e4.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/318a618c-4753-452c-853d-04116f16f468.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/miso/Hosting-38883929/original/2c20c6a7-fa2d-40d9-81f1-b69e7f94a8cf.jpeg?im_w=720",
  "https://a0.muscache.com/im/pictures/miso/Hosting-40259510/original/ecc9e738-7f09-43e8-8e67-d67dc1633222.jpeg?im_w=720",
  "https://a0.muscache.com/im/pictures/28b3cb18-2fd1-4148-a463-119b8694d363.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/9cd82edf-144f-457b-9fcc-8428a82ea6d1.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/6109d4f9-c85e-4769-a280-0105cd2077ae.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/9ed8a604-ec76-4e31-a865-4c63e78b54de.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/miso/Hosting-47889044/original/7939af6f-673e-4bdb-9aac-c50cdca69ac0.jpeg?im_w=720",
  "https://a0.muscache.com/im/pictures/monet/Luxury-32157481/original/efd684ad-5685-45ca-970e-6b585d87a158?im_w=720",
  "https://a0.muscache.com/im/pictures/prohost-api/Hosting-42228897/original/a2c4101f-52cb-4b83-a00a-cf8717c2fd7a.jpeg?im_w=720",
  "https://a0.muscache.com/im/pictures/723db311-65bc-4a05-a983-70778578a551.jpg?im_w=720",
]
const bigsmall = [
  "https://a0.muscache.com/im/pictures/miso/Hosting-659609140585076774/original/d97318da-1f6b-42f9-be1f-bc5e1bce601c.jpeg?im_w=480",
  "https://a0.muscache.com/im/pictures/miso/Hosting-659609140585076774/original/250aea64-60d8-496f-ba37-d661bc3f3e6d.jpeg?im_w=480",
  "https://a0.muscache.com/im/pictures/c0542080-1c36-414b-b5e8-12c17a50494f.jpg?im_w=480",
  "https://a0.muscache.com/im/pictures/fa047f67-6550-4429-8888-ad317513e2ba.jpg?im_w=480",
  "https://a0.muscache.com/im/pictures/miso/Hosting-48092259/original/fe9b83f0-0993-4b4f-ab6b-898216432c67.jpeg?im_w=480",
  "https://a0.muscache.com/im/pictures/miso/Hosting-48092259/original/b6164ebd-f082-451d-8afc-c3b450e892a6.jpeg?im_w=480",
  "https://a0.muscache.com/im/pictures/a221214c-0bca-4b9a-a670-d28a9d5ceab9.jpg?im_w=480",
  "https://a0.muscache.com/im/pictures/5641c859-3074-42d5-8f08-8044d5a52bd2.jpg?im_w=480",
  "https://a0.muscache.com/im/pictures/3f319524-a690-4d4a-85e2-4437a59c9f68.jpg?im_w=480",
  "https://a0.muscache.com/im/pictures/775bbd73-ed4a-4145-ba0b-78ac0718cbe2.jpg?im_w=480",
  "https://a0.muscache.com/im/pictures/24ec86b7-b66b-4e79-b370-bab7408d0002.jpg?im_w=480",
  "https://a0.muscache.com/im/pictures/miso/Hosting-53734949/original/429ed88d-3f51-4818-a9c5-647cfb1cf07f.jpeg?im_w=480",
  "https://a0.muscache.com/im/pictures/c6801c55-747b-445a-8878-6b68b2d1042d.jpg?im_w=480",
  "https://a0.muscache.com/im/pictures/286f363c-ee82-4aaa-aab6-073bc68734fc.jpg?im_w=480",
  "https://a0.muscache.com/im/pictures/prohost-api/Hosting-46279720/original/60399a00-369b-41cb-ba55-c72c8bbeccc8.jpeg?im_w=480",
  "https://a0.muscache.com/im/pictures/prohost-api/Hosting-46279720/original/c3bf114e-9790-4022-8268-c886ccd8bacd.jpeg?im_w=480",
  "https://a0.muscache.com/im/pictures/prohost-api/Hosting-46279720/original/93705359-c439-4a49-874a-9e9b675093e3.jpeg?im_w=480",
]
options.tableName = 'SpotImages'
const spotimageSkeleton = {
  spotId: 0,
  url: '',
  preview: null
}
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
