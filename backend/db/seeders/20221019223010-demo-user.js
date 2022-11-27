'use strict';

/* @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcryptjs');
const { Op } = require('sequelize')

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}


module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = 'Users'
    await queryInterface.bulkInsert(options, [
      {
        firstName: 'Dex',
        lastName: 'Asssfg',
        email: 'user0@user.co',
        username: 'Dorkster',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        firstName: 'Jacob',
        lastName: 'Lauxman',
        email: 'user1@user.co',
        username: 'Jauxman',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        firstName: 'Mike',
        lastName: 'Miller',
        email: 'user3@user.co',
        username: 'MMMCMM',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        firstName: 'Arko',
        lastName: 'chakman',
        email: 'user4@user.co',
        username: 'RKOman',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        firstName: 'Jado',
        lastName: 'oooooh',
        email: 'user5@user.co',
        username: 'Jmoney',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        firstName: 'Matt',
        lastName: 'Mastersmith',
        email: 'user6@user.io',
        username: 'Ketmasta',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        firstName: 'Trevor',
        lastName: 'Moore',
        email: 'user7@user.co',
        username: 'MoTrev1',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        firstName: 'Tyler',
        lastName: 'Short',
        email: 'user8@user.co',
        username: 'MoTre',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        firstName: 'Tohm',
        lastName: 'Lev',
        email: 'used9@user.co',
        username: 'MoTr',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        firstName: 'Tpicker',
        lastName: 'Moasdore',
        email: 't1@user.co',
        username: 'MoTrev1111',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        firstName: 'Trucker',
        lastName: 'Moasre',
        email: 't2frs@ruser.co',
        username: 'MoTrev42',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        firstName: 'Tanker',
        lastName: 'Moasdore',
        email: 't3yh@user.co',
        username: 'MoTrev43',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        firstName: 'TThanker',
        lastName: 'Moasdore4',
        email: 't4ss@user.co',
        username: 'MoTrev422',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        firstName: 'Tranker',
        lastName: 'Moasdoreeee',
        email: 't5ee@user.co',
        username: 'Mooo411',
        hashedPassword: bcrypt.hashSync('password')
      }
    ], {})
    options.tableName = 'Spots'
    await queryInterface.bulkInsert(options, [
      {
        ownerId: 1,
        address: '100 California St',
        city: 'San Francisco',
        state: 'CA',
        country: 'US',
        lat: 37.783617,
        lng: -122.411507,
        name: 'Casa De La Dexta',
        description: 'big rooms and crying babies, good wifi, clean sheets, and a sink full of dirty dishes.',
        price: 123.12
      },
      {
        ownerId: 2,
        address: '200 Sacremento St',
        city: 'South San Francisco',
        state: 'CA',
        country: 'US',
        lat: 37.903617,
        lng: -122.601507,
        name: 'Jacobs Couch',
        description: 'A perfect couch with up to 3 furry sleeping companions!',
        price: 210.21
      },
      {
        ownerId: 3,
        address: '300 Clay St',
        city: 'San Bruno',
        state: 'CA',
        country: 'US',
        lat: 37.093617,
        lng: -122.901507,
        name: 'Millers Mansion',
        description: 'A super eco-friendly, commune catering to people of all walks of life',
        price: 103.12
      },
      {
        ownerId: 4,
        address: '400 Washington St',
        city: 'San Bruno',
        state: 'CA',
        country: 'US',
        lat: 37.093617,
        lng: -122.901507,
        name: 'Arkos Arena',
        description: 'Beautiful views of a well manicured face.',
        price: 104.12
      },
      {
        ownerId: 5,
        address: '500 Jackson St',
        city: 'San Mateo',
        state: 'CA',
        country: 'US',
        lat: 37.093617,
        lng: -122.901507,
        name: 'Jade Palace',
        description: 'Beautiful greenery in every corner',
        price: 105.12
      }, {
        ownerId: 6,
        address: '600 Pacific St',
        city: 'San Jose',
        state: 'CA',
        country: 'US',
        lat: 37.093617,
        lng: -122.901507,
        name: 'Mat Flat',
        description: 'A great place for learning!',
        price: 106.12
      }, {
        ownerId: 7,
        address: '700 Broadway St',
        city: 'San Fernando',
        state: 'CA',
        country: 'US',
        lat: 37.093617,
        lng: -122.901507,
        name: 'Trevors Trailer',
        description: 'For a live lived on the road! Good tunes and company',
        price: 107.12
      },
      {
        ownerId: 8,
        address: '800 Colombus St',
        city: 'San Diego',
        state: 'CA',
        country: 'US',
        lat: 37.093617,
        lng: -122.901507,
        name: 'The Tyler Trap',
        description: 'We might end up talking, who knows',
        price: 108.12
      },
      {
        ownerId: 9,
        address: '900 California St',
        city: 'San Jose',
        state: 'CA',
        country: 'US',
        lat: 37.783617,
        lng: -122.411507,
        name: 'Casa De La Tohm',
        description: 'big rooms and crying baby, good wifi. Room cleaned everynight by my mom!',
        price: 109.12
      },
      {
        ownerId: 1,
        address: '1100 California St',
        city: 'San Rafael',
        state: 'CA',
        country: 'US',
        lat: 37.783617,
        lng: -122.411507,
        name: 'Landlords Lake',
        description: 'Nothing beats home ownership!',
        price: 123.12
      },
      {
        ownerId: 1,
        address: '1110 California St',
        city: 'San Luis Obispo',
        state: 'CA',
        country: 'US',
        lat: 37.783617,
        lng: -122.411507,
        name: 'Renters Ranch',
        description: 'Another place, another passive income.',
        price: 123.12
      },
      {
        ownerId: 1,
        address: '1111 California St',
        city: 'San Leandro',
        state: 'CA',
        country: 'US',
        lat: 37.783617,
        lng: -122.411507,
        name: 'Ol Faithful',
        description: 'Nothing better than getting paid to see mother earth',
        price: 123.12
      },
      {
        ownerId: 1,
        address: '1001 California St',
        city: 'San Lorenzo',
        state: 'CA',
        country: 'US',
        lat: 37.783617,
        lng: -122.411507,
        name: 'The Gulag',
        description: 'In gulag, place rents you',
        price: 123.12
      },
      {
        ownerId: 1,
        address: '1002 California St',
        city: 'San Ta Clause',
        state: 'CA',
        country: 'US',
        lat: 37.783617,
        lng: -122.411507,
        name: 'Pandass Playground',
        description: 'If this were real, we would have to rent the pandas.',
        price: 123.12
      },

      {
        ownerId: 1,
        address: '1030 California St',
        city: 'San Ta Clause',
        state: 'CA',
        country: 'US',
        lat: 37.783617,
        lng: -122.411507,
        name: 'Pandasss Play2round',
        description: 'If this were real, we would have to rent the pandas.',
        price: 123.12
      },

      {
        ownerId: 1,
        address: '1003 California St',
        city: 'San Ta Clause',
        state: 'CA',
        country: 'US',
        lat: 37.783617,
        lng: -122.411507,
        name: 'Panfdas Playgrdound',
        description: 'If this were real, we would have to rent the pandas.',
        price: 123.12
      }
      ,
      {
        ownerId: 1,
        address: '1010 California St',
        city: 'San Ta Clause',
        state: 'CA',
        country: 'US',
        lat: 37.783617,
        lng: -122.411507,
        name: 'Pandfas Pldayground',
        description: 'If this were real, we would have to rent the pandas.',
        price: 123.12
      },
      {
        ownerId: 1,
        address: '10340 California St',
        city: 'San Ta Clause',
        state: 'CA',
        country: 'US',
        lat: 37.783617,
        lng: -122.411507,
        name: 'Pandas Plasdayground',
        description: 'If this were real, we would have to rent the pandas.',
        price: 123.12
      },
      {
        ownerId: 1,
        address: '102210 California St',
        city: 'San Ta Clause',
        state: 'CA',
        country: 'US',
        lat: 37.783617,
        lng: -122.411507,
        name: 'Pandas ffPlayground',
        description: 'If this were real, we would have to rent the pandas.',
        price: 123.12
      },
      {
        ownerId: 1,
        address: '10120 California St',
        city: 'San T2a Clause',
        state: 'CA',
        country: 'US',
        lat: 37.783617,
        lng: -122.411507,
        name: 'Pandases Playground',
        description: 'If this were real, we would have to rent the pandas.',
        price: 123.12
      },
      {
        ownerId: 1,
        address: '10066 California St',
        city: 'San Ta Clause',
        state: 'CA',
        country: 'US',
        lat: 37.783617,
        lng: -122.411507,
        name: 'Pandasm Playground',
        description: 'If this were real, we would have to rent the pandas.',
        price: 123.12
      },
      {
        ownerId: 1,
        address: '10250 California St',
        city: 'San Ta Clause',
        state: 'CA',
        country: 'US',
        lat: 37.783617,
        lng: -122.411507,
        name: 'Pandask Playground',
        description: 'If this were real, we would have to rent the pandas.',
        price: 123.12
      },
      {
        ownerId: 1,
        address: '1115 California St',
        city: 'San Ta Clause',
        state: 'CA',
        country: 'US',
        lat: 37.783617,
        lng: -122.411507,
        name: 'Pandas Playreground',
        description: 'If this were real, we would have to rent the pandas.',
        price: 123.12
      },
      {
        ownerId: 1,
        address: '10043 California St',
        city: 'San Ta Clause',
        state: 'CA',
        country: 'US',
        lat: 37.783617,
        lng: -122.411507,
        name: 'Pandas Playgerround',
        description: 'If this were real, we would have to rent the pandas.',
        price: 123.12
      },
      {
        ownerId: 1,
        address: '102340 California St',
        city: 'San Ta Clause',
        state: 'CA',
        country: 'US',
        lat: 37.783617,
        lng: -122.411507,
        name: 'Pandas Playerground',
        description: 'If this were real, we would have to rent the pandas.',
        price: 123.12
      },
      {
        ownerId: 1,
        address: '103450 California St',
        city: 'San Ta Clause',
        state: 'CA',
        country: 'US',
        lat: 37.783617,
        lng: -122.411507,
        name: 'Pandas Play1wground',
        description: 'If this were real, we would have to rent the pandas.',
        price: 123.12
      }
      ,
      {
        ownerId: 1,
        address: '12100 California St',
        city: 'San Ta Clause',
        state: 'CA',
        country: 'US',
        lat: 37.783617,
        lng: -122.411507,
        name: 'Pandas Plageeyground',
        description: 'If this were real, we would have to rent the pandas.',
        price: 123.12
      }
    ], {})
    options.tableName = 'Reviews'

    await queryInterface.bulkInsert(options, [
      {
        spotId: 1,
        userId: 2,
        review: 'Faye is GOORRLorem ipsum dolor sit amet,  pariatur.Rgeous',
        stars: 5
      },
      {
        spotId: 1,
        userId: 3,
        review: 'Super stoked Lorem ipsum dolor sit amet,  pariatur.bruh, 10/1 luvd it ',
        stars: 2
      },
      {
        spotId: 1,
        userId: 4,
        review: 'WHAAT A DUMPSLorem ipsum dolor sit amet,  pariatur.TER FIRE!!!! Did you know that babies cry at night?!?!',
        stars: 2
      },
      {
        spotId: 1,
        userId: 5,
        review: 'I thought theLorem ipsum dolor sit amet,  pariatur. cats singing voices were beautiful, will be back!',
        stars: 5
      },
      {
        spotId: 1,
        userId: 6,
        review: 'Jeeez what waLorem ipsum dolor sit amet,  pariatur.s that whole thinng about, I thought it was free....',
        stars: 1
      },
      {
        spotId: 1,
        userId: 7,
        review: 'The couch wasLorem ipsum dolor sit amet,  pariatur. unbeliable.... And breakfast! ',
        stars: 5
      },
      {
        spotId: 1,
        userId: 8,
        review: 'I hate cats! Lorem ipsum dolor sit amet,  pariatur.',
        stars: 1
      },
      {
        spotId: 1,
        userId: 9,
        review: 'Was recommendLorem ipsum dolor sit amet,  pariatur.ed to come here by a friend... did not expect to see them there when i arrived ',
        stars: 3
      },
      {
        spotId: 1,
        userId: 10,
        review: 'I mean, who could say no to that sweet little baby face',
        stars: 5
      }, {
        spotId: 2,
        userId: 2,
        review: 'Faye is GOORRLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor at nulla pariatur.Rgeous',
        stars: 5
      },
      {
        spotId: 2,
        userId: 3,
        review: 'Super stoked Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor at nulla pariatur.bruh, 10/1 luvd it ',
        stars: 2
      },
      {
        spotId: 2,
        userId: 4,
        review: 'WHAAT A DUMPSLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor at nulla pariatur.TER FIRE!!!! Did you know that babies cry at night?!?!',
        stars: 2
      },
      {
        spotId: 2,
        userId: 5,
        review: 'I thought theLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor at nulla pariatur. cats singing voices were beautiful, will be back!',
        stars: 5
      },
      {
        spotId: 2,
        userId: 6,
        review: 'Jeeez what waLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor at nulla pariatur.s that whole thinng about, I thought it was free....',
        stars: 1
      },
      {
        spotId: 2,
        userId: 7,
        review: 'The couch wasLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor at nulla pariatur. unbeliable.... And breakfast! ',
        stars: 5
      },
      {
        spotId: 2,
        userId: 8,
        review: 'I hate cats! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor at nulla pariatur.',
        stars: 2
      },
      {
        spotId: 2,
        userId: 9,
        review: 'Was recommendLorem ipsum dolor sit amet, consectetur adipiscing elitfriend... did not expect to see them there when i arrived ',
        stars: 3
      },
      {
        spotId: 2,
        userId: 10,
        review: 'I mean, who could say no to that sweet little baby face',
        stars: 2
      },
      {
        spotId: 3,
        userId: 2,
        review: 'Super stoked bruh, 10/1 luvd it ',
        stars: 5
      },
      {
        spotId: 3,
        userId: 2,
        review: 'Super Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tstoked bruh, 10/1 luvd it ',
        stars: 5
      },
      {
        spotId: 3,
        userId: 2,
        review: 'Super Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tstoked bruh, 10/1 luvd it ',
        stars: 5
      },
      {
        spotId: 3,
        userId: 2,
        review: 'Super Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tstoked bruh, 10/1 luvd it ',
        stars: 5
      },
      {
        spotId: 3,
        userId: 2,
        review: 'Super stoked bruh, 10/1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tluvd it ',
        stars: 5
      },
      {
        spotId: 3,
        userId: 2,
        review: 'Super stoked bruh, 10/1 luvLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod td it ',
        stars: 5
      },
      {
        spotId: 4,
        userId: 2,
        review: 'WHAAT A DUMPSTER FIRE!!!! Did you know that babies cry at night?!?!',
        stars: 1
      },
      {
        spotId: 4,
        userId: 2,
        review: 'WHAAT A DUMPSTER FIRE!!!! Did you know that babies cry at night?!?!',
        stars: 1
      },
      {
        spotId: 4,
        userId: 2,
        review: 'WHAAT A DUMPSTER FIRE!!!! Did you know that babies cry at night?!?!',
        stars: 1
      },
      {
        spotId: 4,
        userId: 2,
        review: 'WHAAT A DUMPSTER FIRE!!!! Did you know that babies cry at night?!?!',
        stars: 1
      },
      {
        spotId: 4,
        userId: 2,
        review: 'WHAAT A DUMPSTER FIRE!!!! Did you know that babies cry at night?!?!',
        stars: 1
      },
      {
        spotId: 5,
        userId: 2,
        review: 'I thought the cats singing voices were beautiful, will be back!',
        stars: 5
      },
      {
        spotId: 6,
        userId: 2,
        review: 'Jeeez what was that whole thinng about, I thought it was free....',
        stars: 1
      },
      {
        spotId: 7,
        userId: 2,
        review: 'The couch was unbeliable.... And breakfast! ',
        stars: 5
      },
      {
        spotId: 8,
        userId: 2,
        review: 'I hate cats! ',
        stars: 1
      },
      {
        spotId: 9,
        userId: 2,
        review: 'Was recommended to come here by a friend... did not expect to see them there when i arrived ',
        stars: 3
      },
      {
        spotId: 1,
        userId: 3,
        review: 'I mean, who could say no to that sweet little baby face',
        stars: 5
      },
      {
        spotId: 4,
        userId: 3,
        review: 'Super stoked bruh, 10/1 luvd it ',
        stars: 5
      },
      {
        spotId: 13,
        userId: 3,
        review: 'WHAAT A DUMPSTER FIRE!!!! Did you know that babies cry at night?!?!',
        stars: 1
      },
      {
        spotId: 12,
        userId: 3,
        review: 'I thought the cats singing voices were beautiful, will be back!',
        stars: 5
      },
      {
        spotId: 11,
        userId: 3,
        review: 'Jeeez what was that whole thinng about, I thought it was free....',
        stars: 1
      },
      {
        spotId: 5,
        userId: 2,
        review: 'I thought the cats singing voices were beautiful, will be back!',
        stars: 5
      },
      {
        spotId: 6,
        userId: 2,
        review: 'Jeeez what was that whole thinng about, I thought it was free....',
        stars: 1
      },
      {
        spotId: 7,
        userId: 2,
        review: 'The couch was unbeliable.... And breakfast! ',
        stars: 5
      },
      {
        spotId: 8,
        userId: 2,
        review: 'I hate cats! ',
        stars: 1
      },
      {
        spotId: 9,
        userId: 2,
        review: 'Was recommended to come here by a friend... did not expect to see them there when i arrived ',
        stars: 3
      },
      {
        spotId: 1,
        userId: 3,
        review: 'I mean, who could say no to that sweet little baby face',
        stars: 5
      },
      {
        spotId: 4,
        userId: 3,
        review: 'Super stoked bruh, 10/1 luvd it ',
        stars: 5
      },
      {
        spotId: 13,
        userId: 3,
        review: 'WHAAT A DUMPSTER FIRE!!!! Did you know that babies cry at night?!?!',
        stars: 1
      },
      {
        spotId: 12,
        userId: 3,
        review: 'I thought the cats singing voices were beautiful, will be back!',
        stars: 5
      },
      {
        spotId: 11,
        userId: 3,
        review: 'Jeeez what was that whole thinng about, I thought it was free....',
        stars: 1
      },
      {
        spotId: 5,
        userId: 2,
        review: 'I thought the cats singing voices were beautiful, will be back!',
        stars: 5
      },
      {
        spotId: 6,
        userId: 2,
        review: 'Jeeez what was that whole thinng about, I thought it was free....',
        stars: 1
      },
      {
        spotId: 7,
        userId: 2,
        review: 'The couch was unbeliable.... And breakfast! ',
        stars: 5
      },
      {
        spotId: 8,
        userId: 2,
        review: 'I hate cats! ',
        stars: 1
      },
      {
        spotId: 9,
        userId: 2,
        review: 'Was recommended to come here by a friend... did not expect to see them there when i arrived ',
        stars: 3
      },
      {
        spotId: 1,
        userId: 3,
        review: 'I mean, who could say no to that sweet little baby face',
        stars: 5
      },
      {
        spotId: 4,
        userId: 3,
        review: 'Super stoked bruh, 10/1 luvd it ',
        stars: 5
      },
      {
        spotId: 13,
        userId: 3,
        review: 'WHAAT A DUMPSTER FIRE!!!! Did you know that babies cry at night?!?!',
        stars: 1
      },
      {
        spotId: 12,
        userId: 3,
        review: 'I thought the cats singing voices were beautiful, will be back!',
        stars: 5
      },
      {
        spotId: 11,
        userId: 3,
        review: 'Jeeez what was that whole thinng about, I thought it was free....',
        stars: 1
      },
      {
        spotId: 5,
        userId: 2,
        review: 'I thought the cats singing voices were beautiful, will be back!',
        stars: 5
      },
      {
        spotId: 6,
        userId: 2,
        review: 'Jeeez what was that whole thinng about, I thought it was free....',
        stars: 1
      },
      {
        spotId: 7,
        userId: 2,
        review: 'The couch was unbeliable.... And breakfast! ',
        stars: 5
      },
      {
        spotId: 8,
        userId: 2,
        review: 'I hate cats! ',
        stars: 1
      },
      {
        spotId: 9,
        userId: 2,
        review: 'Was recommended to come here by a friend... did not expect to see them there when i arrived ',
        stars: 3
      },
      {
        spotId: 1,
        userId: 3,
        review: 'I mean, who could say no to that sweet little baby face',
        stars: 5
      },
      {
        spotId: 4,
        userId: 3,
        review: 'Super stoked bruh, 10/1 luvd it ',
        stars: 5
      },
      {
        spotId: 13,
        userId: 3,
        review: 'WHAAT A DUMPSTER FIRE!!!! Did you know that babies cry at night?!?!',
        stars: 1
      },
      {
        spotId: 12,
        userId: 3,
        review: 'I thought the cats singing voices were beautiful, will be back!',
        stars: 5
      },
      {
        spotId: 11,
        userId: 3,
        review: 'Jeeez what was that whole thinng about, I thought it was free....',
        stars: 1
      },
      {
        spotId: 5,
        userId: 2,
        review: 'I thought the cats singing voices were beautiful, will be back!',
        stars: 5
      },
      {
        spotId: 6,
        userId: 2,
        review: 'Jeeez what was that whole thinng about, I thought it was free....',
        stars: 1
      },
      {
        spotId: 7,
        userId: 2,
        review: 'The couch was unbeliable.... And breakfast! ',
        stars: 5
      },
      {
        spotId: 8,
        userId: 2,
        review: 'I hate cats! ',
        stars: 1
      },
      {
        spotId: 9,
        userId: 2,
        review: 'Was recommended to come here by a friend... did not expect to see them there when i arrived ',
        stars: 3
      },
      {
        spotId: 1,
        userId: 3,
        review: 'I mean, who could say no to that sweet little baby face',
        stars: 5
      },
      {
        spotId: 4,
        userId: 3,
        review: 'Super stoked bruh, 10/1 luvd it ',
        stars: 5
      },
      {
        spotId: 13,
        userId: 3,
        review: 'WHAAT A DUMPSTER FIRE!!!! Did you know that babies cry at night?!?!',
        stars: 1
      },
      {
        spotId: 12,
        userId: 3,
        review: 'I thought the cats singing voices were beautiful, will be back!',
        stars: 5
      },
      {
        spotId: 11,
        userId: 3,
        review: 'Jeeez what was that whole thinng about, I thought it was free....',
        stars: 1
      },
      {
        spotId: 5,
        userId: 2,
        review: 'I thought the cats singing voices were beautiful, will be back!',
        stars: 5
      },
      {
        spotId: 6,
        userId: 2,
        review: 'Jeeez what was that whole thinng about, I thought it was free....',
        stars: 1
      },
      {
        spotId: 7,
        userId: 2,
        review: 'The couch was unbeliable.... And breakfast! ',
        stars: 5
      },
      {
        spotId: 8,
        userId: 2,
        review: 'I hate cats! ',
        stars: 1
      },
      {
        spotId: 9,
        userId: 2,
        review: 'Was recommended to come here by a friend... did not expect to see them there when i arrived ',
        stars: 3
      },
      {
        spotId: 1,
        userId: 3,
        review: 'I mean, who could say no to that sweet little baby face',
        stars: 5
      },
      {
        spotId: 4,
        userId: 3,
        review: 'Super stoked bruh, 10/1 luvd it ',
        stars: 5
      },
      {
        spotId: 13,
        userId: 3,
        review: 'WHAAT A DUMPSTER FIRE!!!! Did you know that babies cry at night?!?!',
        stars: 1
      },
      {
        spotId: 12,
        userId: 3,
        review: 'I thought the cats singing voices were beautiful, will be back!',
        stars: 5
      },
      {
        spotId: 11,
        userId: 3,
        review: 'Jeeez what was that whole thinng about, I thought it was free....',
        stars: 1
      },
      {
        spotId: 7,
        userId: 3,
        review: 'The couch was unbeliable.... And breakfast! ',
        stars: 5
      },
      {
        spotId: 9,
        userId: 3,
        review: 'I hate cats! ',
        stars: 1
      },
      {
        spotId: 8,
        userId: 3,
        review: 'Was recommended to come here by a friend... did not expect to see them there when i arrived ',
        stars: 3
      }
    ], {})
    options.tableName = 'ReviewImages'

    await queryInterface.bulkInsert(options, [
      {
        reviewId: 1,
        url: 'https://media.istockphoto.com/id/140217119/photo/my-flatmate-hasnt-done-the-chores-again.jpg?s=1024x1024&w=is&k=20&c=bE5PP4SakTtt1d6BqG6mI8F6CV9I8-wBfQfZN7oLsAM='
      }, {
        reviewId: 4,
        url: 'https://rethority.com/wp-content/uploads/2021/12/shutterstock_1383059522.jpg.webp'
      }, {
        reviewId: 5,
        url: 'https://i2-prod.mylondon.news/incoming/article16933282.ece/ALTERNATES/s810/0_killerclown.jpg'
      }, {
        reviewId: 2,
        url: 'https://m.media-amazon.com/images/M/MV5BOTA3NmU1NDMtYzcxMC00ZjI5LTllZWItYWI3MmZkNTE1ZTg0XkEyXkFqcGdeQW1hcmNtYW5u._V1_.jpg'
      },
      {
        reviewId: 3,
        url: 'https://www.thesouthafrican.com/wp-content/uploads/2022/05/Two-children-killed-in-shack-fire-800x529.jpg'
      }
    ], {})

    options.tableName = 'SpotImages'
    await queryInterface.bulkInsert(options, [
      {
        spotId: 1,
        url: 'https://a0.muscache.com/im/pictures/dd9cf0f0-57e0-42a5-aef6-b15e95ab0d40.jpg?im_w=720',
        preview: true
      },
      {
        spotId: 1,
        url: 'https://a0.muscache.com/im/pictures/3a840c69-634a-414f-9800-cda805858f95.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 1,
        url: 'https://a0.muscache.com/im/pictures/2362094f-ab42-483c-a928-284cee60abc8.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 1,
        url: 'https://a0.muscache.com/im/pictures/3a840c69-634a-414f-9800-cda805858f95.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 1,
        url: 'https://a0.muscache.com/im/pictures/3e36edb5-4a04-4bf2-a4c9-95433e752203.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 2,
        url: 'https://a0.muscache.com/im/pictures/b5e80c78-9c34-4105-800b-afaf7b9e8398.jpg?im_w=720',
        preview: true
      }, {
        spotId: 2,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-51165983/original/68d5ccb4-194c-4470-9e61-d0aa02b1c9d0.jpeg?im_w=480',
        preview: false
      }, {
        spotId: 2,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-51165983/original/9b3dcfc6-da57-4c07-a1bd-11edc37ad57f.jpeg?im_w=480',
        preview: false
      }, {
        spotId: 2,
        url: 'https://a0.muscache.com/im/pictures/59eb91a6-af3a-46a5-a814-b5adab10b445.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 2,
        url: 'https://a0.muscache.com/im/pictures/b5e80c78-9c34-4105-800b-afaf7b9e8398.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 3,
        url: 'https://a0.muscache.com/im/pictures/6a3e485e-d276-46e4-88cd-53d0c7cfb03f.jpg?im_w=720',
        preview: true
      },
      {
        spotId: 3,
        url: 'https://a0.muscache.com/im/pictures/6a3e485e-d276-46e4-88cd-53d0c7cfb03f.jpg?im_w=720',
        preview: false
      },
      {
        spotId: 3,
        url: 'https://a0.muscache.com/im/pictures/6a3e485e-d276-46e4-88cd-53d0c7cfb03f.jpg?im_w=720',
        preview: false
      },
      {
        spotId: 3,
        url: 'https://a0.muscache.com/im/pictures/6a3e485e-d276-46e4-88cd-53d0c7cfb03f.jpg?im_w=720',
        preview: false
      },
      {
        spotId: 3,
        url: 'https://a0.muscache.com/im/pictures/6a3e485e-d276-46e4-88cd-53d0c7cfb03f.jpg?im_w=720',
        preview: false
      },
      {
        spotId: 4,
        url: 'https://a0.muscache.com/im/pictures/56467892-0d23-4ab1-8302-9c3d0d5e52cd.jpg?im_w=720',
        preview: true
      },
      {
        spotId: 4,
        url: 'https://a0.muscache.com/im/pictures/de1a5925-d8f6-4f31-8008-967c0a19562a.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 4,
        url: 'https://a0.muscache.com/im/pictures/a7f86e41-3cf5-4994-bc84-ce9036138149.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 4,
        url: 'https://a0.muscache.com/im/pictures/6342fa90-e175-442a-abd3-79d0b2e89f10.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 4,
        url: 'https://a0.muscache.com/im/pictures/a56b89e4-5607-4e3e-a69d-e112a17355cc.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 5,
        url: 'https://a0.muscache.com/im/pictures/1c18c035-2e01-4b7d-b8d2-27c5ef55633d.jpg?im_w=720',
        preview: true
      },
      {
        spotId: 5,
        url: 'https://a0.muscache.com/im/pictures/6039d4c5-f9dc-4527-95f7-dd5da1dec2a8.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 5,
        url: 'https://a0.muscache.com/im/pictures/6edbea9e-a902-4bf0-a92d-37753ec6c65e.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 5,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-24648225/original/29a49074-22a6-477f-99f0-b52d0ebc7ff0.jpeg?im_w=480',
        preview: false
      },
      {
        spotId: 5,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-24648225/original/ab5c74b7-0f49-4aac-bc53-4152994d01de.jpeg?im_w=480',
        preview: false
      },
      {
        spotId: 6,
        url: 'https://a0.muscache.com/im/pictures/842fee5c-f00b-4c12-ab33-d904b75c26f5.jpg?im_w=720',
        preview: true
      },
      {
        spotId: 6,
        url: 'https://a0.muscache.com/im/pictures/842fee5c-f00b-4c12-ab33-d904b75c26f5.jpg?im_w=720',
        preview: false
      },
      {
        spotId: 6,
        url: 'https://a0.muscache.com/im/pictures/842fee5c-f00b-4c12-ab33-d904b75c26f5.jpg?im_w=720',
        preview: false
      },
      {
        spotId: 6,
        url: 'https://a0.muscache.com/im/pictures/842fee5c-f00b-4c12-ab33-d904b75c26f5.jpg?im_w=720',
        preview: false
      },
      {
        spotId: 6,
        url: 'https://a0.muscache.com/im/pictures/842fee5c-f00b-4c12-ab33-d904b75c26f5.jpg?im_w=720',
        preview: false
      },
      {
        spotId: 7,
        url: 'https://a0.muscache.com/im/pictures/a22e8b49-9e96-4da9-b5ab-6d7c63d191d6.jpg?im_w=720',
        preview: true
      },
      {
        spotId: 7,
        url: 'https://a0.muscache.com/im/pictures/a22e8b49-9e96-4da9-b5ab-6d7c63d191d6.jpg?im_w=720',
        preview: false
      },
      {
        spotId: 7,
        url: 'https://a0.muscache.com/im/pictures/a22e8b49-9e96-4da9-b5ab-6d7c63d191d6.jpg?im_w=720',
        preview: false
      },
      {
        spotId: 7,
        url: 'https://a0.muscache.com/im/pictures/a22e8b49-9e96-4da9-b5ab-6d7c63d191d6.jpg?im_w=720',
        preview: false
      },
      {
        spotId: 7,
        url: 'https://a0.muscache.com/im/pictures/a22e8b49-9e96-4da9-b5ab-6d7c63d191d6.jpg?im_w=720',
        preview: false
      },
      {
        spotId: 8,
        url: 'https://a0.muscache.com/im/pictures/9da940a2-82d0-4efc-808e-381292ac5321.jpg?im_w=720',
        preview: true
      },
      {
        spotId: 8,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-20445002/original/b4f6fb84-505b-4160-817c-7a462363ec28.jpeg?im_w=480',
        preview: false
      },
      {
        spotId: 8,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-20445002/original/e4d0b62c-8f52-43e6-a1c8-70298122a1f8.jpeg?im_w=480',
        preview: false
      },
      {
        spotId: 8,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-20445002/original/eb6dc382-c096-497c-a321-f2d533e2ab93.jpeg?im_w=480',
        preview: false
      },
      {
        spotId: 8,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-20445002/original/f02d0de3-ac45-46f9-83f0-db7254ec9587.jpeg?im_w=480',
        preview: false
      },
      {
        spotId: 9,
        url: 'https://a0.muscache.com/im/pictures/5f79a3c4-ea63-474b-9924-c4fde883015d.jpg?im_w=720',
        preview: true
      },
      {
        spotId: 9,
        url: 'https://a0.muscache.com/im/pictures/147f068f-b2d2-4d27-92f0-b93c7c772463.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 9,
        url: 'https://a0.muscache.com/im/pictures/5f79a3c4-ea63-474b-9924-c4fde883015d.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 9,
        url: 'https://a0.muscache.com/im/pictures/826303c3-ef43-43f2-8f44-3038fcaa41ed.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 9,
        url: 'https://a0.muscache.com/im/pictures/b4be5c14-ffdf-46c0-bee3-f4cd9de0a996.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 10,
        url: 'https://a0.muscache.com/im/pictures/4b0af8ea-007e-48e9-b098-527ff46d4daf.jpg?im_w=720',
        preview: true
      },
      {
        spotId: 10,
        url: 'https://a0.muscache.com/im/pictures/345ecad9-e228-4154-825a-798efc9e9765.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 10,
        url: 'https://a0.muscache.com/im/pictures/63c5b6b6-eb85-4f86-ac9a-bb28dd6d6075.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 10,
        url: 'https://a0.muscache.com/im/pictures/4341f768-3a70-4c4e-b54d-98bf2645577f.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 10,
        url: 'https://a0.muscache.com/im/pictures/81f341ea-1999-43e9-b7d4-34359891314b.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 11,
        url: 'https://a0.muscache.com/im/pictures/9b58c534-6223-4ecd-81e2-6b6d5b7204c4.jpg?im_w=720',
        preview: true
      },
      {
        spotId: 11,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-29029067/original/ceead6cf-4c6e-441f-afc3-85d1957c48d3.jpeg?im_w=480',
        preview: false
      },
      {
        spotId: 11,
        url: 'https://a0.muscache.com/im/pictures/cb4f326e-3d45-4041-b4aa-d36bdddb84af.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 11,
        url: 'https://a0.muscache.com/im/pictures/a3a5378a-2421-4f1b-ab7f-da63497df6df.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 11,
        url: 'https://a0.muscache.com/im/pictures/ca49040f-c972-4ac0-973c-fbee087ba150.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 12,
        url: 'https://a0.muscache.com/im/pictures/c7fe3c93-4eb3-412a-a28d-4f83a7adde45.jpg?im_w=720',
        preview: true
      },
      {
        spotId: 12,
        url: 'https://a0.muscache.com/im/pictures/9523d08d-c5fc-43cb-8824-b85de9102663.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 12,
        url: 'https://a0.muscache.com/im/pictures/450c23b6-2bce-4302-a3b4-19c69ac19330.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 12,
        url: 'https://a0.muscache.com/im/pictures/c7fe3c93-4eb3-412a-a28d-4f83a7adde45.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 12,
        url: 'https://a0.muscache.com/im/pictures/c82bd299-2bba-49a4-aee2-2d132bf86899.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 13,
        url: 'https://a0.muscache.com/im/pictures/38b82167-80e2-4e2c-9609-b159a7fb235b.jpg?im_w=720',
        preview: false
      },
      {
        spotId: 13,
        url: 'https://a0.muscache.com/im/pictures/38b82167-80e2-4e2c-9609-b159a7fb235b.jpg?im_w=720',
        preview: false
      },
      {
        spotId: 13,
        url: 'https://a0.muscache.com/im/pictures/38b82167-80e2-4e2c-9609-b159a7fb235b.jpg?im_w=720',
        preview: false
      },
      {
        spotId: 13,
        url: 'https://a0.muscache.com/im/pictures/38b82167-80e2-4e2c-9609-b159a7fb235b.jpg?im_w=720',
        preview: false
      },
      {
        spotId: 13,
        url: 'https://a0.muscache.com/im/pictures/38b82167-80e2-4e2c-9609-b159a7fb235b.jpg?im_w=720',
        preview: true
      },
      {
        spotId: 14,
        url: 'https://a0.muscache.com/im/pictures/3e32d161-668d-45d4-986c-cb4350ed032b.jpg?im_w=720',
        preview: true
      },
      {
        spotId: 14,
        url: 'https://a0.muscache.com/im/pictures/937a5284-9ff1-473f-944d-11e29e8dfc30.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 14,
        url: 'https://a0.muscache.com/im/pictures/53c4cba5-590a-47e3-99ae-67384d1b5c3c.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 14,
        url: 'https://a0.muscache.com/im/pictures/d9f7ec34-372b-4510-bc1c-33ce1bb88886.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 14,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-49479707/original/78752cf8-a63d-4517-8140-0113954574d8.jpeg?im_w=480',
        preview: false
      },
      {
        spotId: 15,
        url: 'https://a0.muscache.com/im/pictures/dd9cf0f0-57e0-42a5-aef6-b15e95ab0d40.jpg?im_w=720',
        preview: true
      },
      {
        spotId: 15,
        url: 'https://a0.muscache.com/im/pictures/3a840c69-634a-414f-9800-cda805858f95.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 15,
        url: 'https://a0.muscache.com/im/pictures/2362094f-ab42-483c-a928-284cee60abc8.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 15,
        url: 'https://a0.muscache.com/im/pictures/3a840c69-634a-414f-9800-cda805858f95.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 15,
        url: 'https://a0.muscache.com/im/pictures/3e36edb5-4a04-4bf2-a4c9-95433e752203.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 16,
        url: 'https://a0.muscache.com/im/pictures/b5e80c78-9c34-4105-800b-afaf7b9e8398.jpg?im_w=720',
        preview: true
      },
      {
        spotId: 16,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-51165983/original/68d5ccb4-194c-4470-9e61-d0aa02b1c9d0.jpeg?im_w=480',
        preview: false
      },
      {
        spotId: 16,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-51165983/original/9b3dcfc6-da57-4c07-a1bd-11edc37ad57f.jpeg?im_w=480',
        preview: false
      },
      {
        spotId: 16,
        url: 'https://a0.muscache.com/im/pictures/59eb91a6-af3a-46a5-a814-b5adab10b445.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 16,
        url: 'https://a0.muscache.com/im/pictures/b5e80c78-9c34-4105-800b-afaf7b9e8398.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 17,
        url: 'https://a0.muscache.com/im/pictures/6a3e485e-d276-46e4-88cd-53d0c7cfb03f.jpg?im_w=720',
        preview: true
      },
      {
        spotId: 17,
        url: 'https://a0.muscache.com/im/pictures/6a3e485e-d276-46e4-88cd-53d0c7cfb03f.jpg?im_w=720',
        preview: false
      },
      {
        spotId: 17,
        url: 'https://a0.muscache.com/im/pictures/6a3e485e-d276-46e4-88cd-53d0c7cfb03f.jpg?im_w=720',
        preview: false
      },
      {
        spotId: 17,
        url: 'https://a0.muscache.com/im/pictures/6a3e485e-d276-46e4-88cd-53d0c7cfb03f.jpg?im_w=720',
        preview: false
      },
      {
        spotId: 17,
        url: 'https://a0.muscache.com/im/pictures/6a3e485e-d276-46e4-88cd-53d0c7cfb03f.jpg?im_w=720',
        preview: false
      },
      {
        spotId: 18,
        url: 'https://a0.muscache.com/im/pictures/56467892-0d23-4ab1-8302-9c3d0d5e52cd.jpg?im_w=720',
        preview: true
      },
      {
        spotId: 18,
        url: 'https://a0.muscache.com/im/pictures/de1a5925-d8f6-4f31-8008-967c0a19562a.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 18,
        url: 'https://a0.muscache.com/im/pictures/a7f86e41-3cf5-4994-bc84-ce9036138149.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 18,
        url: 'https://a0.muscache.com/im/pictures/6342fa90-e175-442a-abd3-79d0b2e89f10.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 18,
        url: 'https://a0.muscache.com/im/pictures/a56b89e4-5607-4e3e-a69d-e112a17355cc.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 19,
        url: 'https://a0.muscache.com/im/pictures/1c18c035-2e01-4b7d-b8d2-27c5ef55633d.jpg?im_w=720',
        preview: true
      },
      {
        spotId: 19,
        url: 'https://a0.muscache.com/im/pictures/6039d4c5-f9dc-4527-95f7-dd5da1dec2a8.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 19,
        url: 'https://a0.muscache.com/im/pictures/6edbea9e-a902-4bf0-a92d-37753ec6c65e.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 19,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-24648225/original/29a49074-22a6-477f-99f0-b52d0ebc7ff0.jpeg?im_w=480',
        preview: false
      },
      {
        spotId: 19,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-24648225/original/ab5c74b7-0f49-4aac-bc53-4152994d01de.jpeg?im_w=480',
        preview: false
      },
      {
        spotId: 20,
        url: 'https://a0.muscache.com/im/pictures/842fee5c-f00b-4c12-ab33-d904b75c26f5.jpg?im_w=720',
        preview: true
      },
      {
        spotId: 20,
        url: 'https://a0.muscache.com/im/pictures/842fee5c-f00b-4c12-ab33-d904b75c26f5.jpg?im_w=720',
        preview: false
      },
      {
        spotId: 20,
        url: 'https://a0.muscache.com/im/pictures/842fee5c-f00b-4c12-ab33-d904b75c26f5.jpg?im_w=720',
        preview: false
      },
      {
        spotId: 20,
        url: 'https://a0.muscache.com/im/pictures/842fee5c-f00b-4c12-ab33-d904b75c26f5.jpg?im_w=720',
        preview: false
      },
      {
        spotId: 20,
        url: 'https://a0.muscache.com/im/pictures/842fee5c-f00b-4c12-ab33-d904b75c26f5.jpg?im_w=720',
        preview: false
      },
      {
        spotId: 21,
        url: 'https://a0.muscache.com/im/pictures/a22e8b49-9e96-4da9-b5ab-6d7c63d191d6.jpg?im_w=720',
        preview: true
      },
      {
        spotId: 21,
        url: 'https://a0.muscache.com/im/pictures/a22e8b49-9e96-4da9-b5ab-6d7c63d191d6.jpg?im_w=720',
        preview: false
      },
      {
        spotId: 21,
        url: 'https://a0.muscache.com/im/pictures/a22e8b49-9e96-4da9-b5ab-6d7c63d191d6.jpg?im_w=720',
        preview: false
      },
      {
        spotId: 21,
        url: 'https://a0.muscache.com/im/pictures/a22e8b49-9e96-4da9-b5ab-6d7c63d191d6.jpg?im_w=720',
        preview: false
      },
      {
        spotId: 21,
        url: 'https://a0.muscache.com/im/pictures/a22e8b49-9e96-4da9-b5ab-6d7c63d191d6.jpg?im_w=720',
        preview: false
      },
      {
        spotId: 21,
        url: 'https://a0.muscache.com/im/pictures/9da940a2-82d0-4efc-808e-381292ac5321.jpg?im_w=720',
        preview: true
      },
      {
        spotId: 21,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-20445002/original/b4f6fb84-505b-4160-817c-7a462363ec28.jpeg?im_w=480',
        preview: false
      },
      {
        spotId: 21,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-20445002/original/e4d0b62c-8f52-43e6-a1c8-70298122a1f8.jpeg?im_w=480',
        preview: false
      },
      {
        spotId: 21,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-20445002/original/eb6dc382-c096-497c-a321-f2d533e2ab93.jpeg?im_w=480',
        preview: false
      },
      {
        spotId: 21,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-20445002/original/f02d0de3-ac45-46f9-83f0-db7254ec9587.jpeg?im_w=480',
        preview: false
      },
      {
        spotId: 22,
        url: 'https://a0.muscache.com/im/pictures/5f79a3c4-ea63-474b-9924-c4fde883015d.jpg?im_w=720',
        preview: true
      },
      {
        spotId: 22,
        url: 'https://a0.muscache.com/im/pictures/147f068f-b2d2-4d27-92f0-b93c7c772463.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 22,
        url: 'https://a0.muscache.com/im/pictures/5f79a3c4-ea63-474b-9924-c4fde883015d.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 22,
        url: 'https://a0.muscache.com/im/pictures/826303c3-ef43-43f2-8f44-3038fcaa41ed.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 22,
        url: 'https://a0.muscache.com/im/pictures/b4be5c14-ffdf-46c0-bee3-f4cd9de0a996.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 23,
        url: 'https://a0.muscache.com/im/pictures/4b0af8ea-007e-48e9-b098-527ff46d4daf.jpg?im_w=720',
        preview: true
      },
      {
        spotId: 23,
        url: 'https://a0.muscache.com/im/pictures/345ecad9-e228-4154-825a-798efc9e9765.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 23,
        url: 'https://a0.muscache.com/im/pictures/63c5b6b6-eb85-4f86-ac9a-bb28dd6d6075.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 23,
        url: 'https://a0.muscache.com/im/pictures/4341f768-3a70-4c4e-b54d-98bf2645577f.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 23,
        url: 'https://a0.muscache.com/im/pictures/81f341ea-1999-43e9-b7d4-34359891314b.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 24,
        url: 'https://a0.muscache.com/im/pictures/9b58c534-6223-4ecd-81e2-6b6d5b7204c4.jpg?im_w=720',
        preview: true
      },
      {
        spotId: 24,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-29029067/original/ceead6cf-4c6e-441f-afc3-85d1957c48d3.jpeg?im_w=480',
        preview: false
      },
      {
        spotId: 24,
        url: 'https://a0.muscache.com/im/pictures/cb4f326e-3d45-4041-b4aa-d36bdddb84af.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 24,
        url: 'https://a0.muscache.com/im/pictures/a3a5378a-2421-4f1b-ab7f-da63497df6df.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 24,
        url: 'https://a0.muscache.com/im/pictures/ca49040f-c972-4ac0-973c-fbee087ba150.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 25,
        url: 'https://a0.muscache.com/im/pictures/c7fe3c93-4eb3-412a-a28d-4f83a7adde45.jpg?im_w=720',
        preview: true
      },
      {
        spotId: 25,
        url: 'https://a0.muscache.com/im/pictures/9523d08d-c5fc-43cb-8824-b85de9102663.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 25,
        url: 'https://a0.muscache.com/im/pictures/450c23b6-2bce-4302-a3b4-19c69ac19330.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 25,
        url: 'https://a0.muscache.com/im/pictures/c7fe3c93-4eb3-412a-a28d-4f83a7adde45.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 25,
        url: 'https://a0.muscache.com/im/pictures/c82bd299-2bba-49a4-aee2-2d132bf86899.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 26,
        url: 'https://a0.muscache.com/im/pictures/38b82167-80e2-4e2c-9609-b159a7fb235b.jpg?im_w=720',
        preview: false
      },
      {
        spotId: 26,
        url: 'https://a0.muscache.com/im/pictures/38b82167-80e2-4e2c-9609-b159a7fb235b.jpg?im_w=720',
        preview: false
      },
      {
        spotId: 26,
        url: 'https://a0.muscache.com/im/pictures/38b82167-80e2-4e2c-9609-b159a7fb235b.jpg?im_w=720',
        preview: false
      },
      {
        spotId: 26,
        url: 'https://a0.muscache.com/im/pictures/38b82167-80e2-4e2c-9609-b159a7fb235b.jpg?im_w=720',
        preview: false
      },
      {
        spotId: 26,
        url: 'https://a0.muscache.com/im/pictures/38b82167-80e2-4e2c-9609-b159a7fb235b.jpg?im_w=720',
        preview: true
      },
      {
        spotId: 27,
        url: 'https://a0.muscache.com/im/pictures/3e32d161-668d-45d4-986c-cb4350ed032b.jpg?im_w=720',
        preview: true
      },
      {
        spotId: 27,
        url: 'https://a0.muscache.com/im/pictures/937a5284-9ff1-473f-944d-11e29e8dfc30.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 27,
        url: 'https://a0.muscache.com/im/pictures/53c4cba5-590a-47e3-99ae-67384d1b5c3c.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 27,
        url: 'https://a0.muscache.com/im/pictures/d9f7ec34-372b-4510-bc1c-33ce1bb88886.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 27,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-49479707/original/78752cf8-a63d-4517-8140-0113954574d8.jpeg?im_w=480',
        preview: false
      }

    ])
    options.tableName = 'Bookings'

    await queryInterface.bulkInsert(options, [
      {
        spotId: 3,
        userId: 1,
        startDate: '2023-01-11',
        endDate: '2023-02-02'
      },
      {
        spotId: 3,
        userId: 2,
        startDate: '2023-02-05',
        endDate: '2023-03-01'
      },
      {
        spotId: 1,
        userId: 2,
        startDate: '2025-04-04',
        endDate: '2026-05-01'
      },
      {
        spotId: 1,
        userId: 3,
        startDate: '2028-06-02',
        endDate: '2028-07-01'
      },
      {
        spotId: 2,
        userId: 4,
        startDate: '2024-07-02',
        endDate: '2024-08-01'
      },
      {
        spotId: 2,
        userId: 1,
        startDate: '2026-06-02',
        endDate: '2027-07-01'
      }

    ], {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    options.tableName = 'Bookings'
    await queryInterface.bulkDelete(options, {})
    options.tableName = 'SpotImages'
    await queryInterface.bulkDelete(options, {})
    options.tableName = 'ReviewImages'
    await queryInterface.bulkDelete(options, {})
    options.tableName = 'Bookings'
    await queryInterface.bulkDelete(options, {})
    options.tableName = 'Reviews'
    await queryInterface.bulkDelete(options, {})
    options.tableName = 'Spots'
    await queryInterface.bulkDelete(options, {})
    options.tableName = 'Users'
    await queryInterface.bulkDelete(options, {});
  },
};
