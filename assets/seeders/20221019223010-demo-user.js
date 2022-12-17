'use strict';

// /**  @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcryptjs');
const { User } = require('../../backend/db/models')
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
const addressSample = ['1070 Second St', '200 3rd Ave', '401 Main Blvd', '50 Civic Ct', '808 Fith Rd', '3 Parkland Blvd', '1307 Garland St',
  '6095 Goldfish St', '777 Seventh Ct', '1910 Downtown Rd', '432 Gerber St', '111 Pavement Way']


const nameSample = ["Lover's Lounge", 'Ancient Area', "Devil's Den", "Great Grotto", "Makers Mark",
  "Garish Garden", "Yellow Yard", "Wishful Wonderland", "Dangerous Desert", "Lonely Lake", "Rich River",
  "Mourning Mountain", "Scary Stairs", "Debaucherous Den", "Oval Office", "Murder Mansion",
  "Deaths Door", "At the End", "Final Fracas", "Lepers Lake", "Nasty Nook",
  "Crazy Canyon", "Delightful Desert", "Enormous End", "Freaky Find", "Healing Harbor", "Ignoble Igloo",
  "Jumbo Joint", "Heaven's Heart", "Kinda Karachi", "Lovely Lound", "Neat Nook", "Overly Overt", "Pleasant Palace",
  "Quivering Quarry", "Rundown Ranch", "Steller Stockhouse", "Tidy Tidalpools", "Unseen University", "Voracious Virtue",
  "Wavey Windows", "The X", "Yellow Yard", "Zillion Zebras"
]


const priceSample = [40.02, 377.66, 110.37, 329.52, 9280.13, 300.55, 499.08, 2202.02,
  50.11, 80.75, 164.99, 177.55, 204.99, 1265.51, 309.18, 406.94, 209.56, 100.55, 6190.01,
  69.09, 108.06, 66.66, 37.54, 95.34, 76.08, 499.03, 500.01, 303.65, 310.34, 162.44, 139.99,
  5420.99, 1135.55, 340.89, 250.04, 393.93, 440.46, 320.13, 288.88, 204.86, 600.72, 4999.99, 194.55, 300.24,
  708.42, 985.08, 2745.08, 614.08, 4938.08, 109.08, 702.08, 4783.08, 943.08
]


const cityStateSample = [{ city: 'San Francisco', state: 'CA' }, { city: 'Los Angeles', state: 'CA' }, { city: 'Portland', state: 'OR' },
{ city: 'New York City', state: 'NY' }, { city: 'Miami', state: 'FL' }, { city: 'Austin', state: 'TX' }, { city: 'Chicago', state: 'IL' },
{ city: 'Little Rock', state: 'AR' }, { city: 'Topeka', state: 'KS' }, { city: 'Jackson', state: 'MS' }, { city: 'Salt Lake City', state: 'UT' },
{ city: 'Las Vegas', state: 'NV' }, { city: 'Boston', state: 'MA' }, { city: 'Atlanta', state: 'GA' }, { city: 'Olympia', state: 'WA' },
{ city: 'San Mateo', state: 'CA' }, { city: 'San Jose', state: 'CA' }, { city: 'San Bruno', state: 'CA' }, { city: 'San Carlos', state: 'CA' },
{ city: 'San Bernadino', state: 'CA' }, { city: 'San Juan', state: 'CA' }, { city: 'San Leandro', state: 'CA' }, { city: 'Palo Alto', state: 'CA' }
]
const descriptSample = ['is a great place with', 'is a cozy place with', 'is better than everything and includes',
  'the best in town!! Comes with', 'is a quiet restful place offering many things such as', ': amenities included are ', 'a blast from the past! It includes',
  'the place they everyone forgets to talk about, includes'
]
const descriptVsample = ['onsite laundry,', 'cleaning services,', 'strong wifi,', 'clean toilets,',
  'lots of plants,', 'cats to play wtih,', 'noisy neighbors,', 'open-bar,',
  'live music,', 'local art,', 'clean sheets,', 'crying babies,', 'no blood stains,',
  'serial-killer free,', 'foot rub,', 'hot showers,', 'cold food,', 'free parking,',
  'an old ham radio,', 'fresh stale toast,', 'twice cooked bread,', 'continetal breakfast',
  'no ghosts,', 'a totally normal childs doll,', 'a great view', 'a great view into neighbors yard,',
  'pirate treasure,', 'free handtowels,', 'fresh used toliet paper,', 'booze,', 'frisbees', '24/7 electronic music,',
  'backrub from my pet hamster,', 'giant bowl of macadameia nuts,', 'breakfast-in-thebackyard', 'a stern warning,'
]
const spotSkeleton = {
  city: null,
  state: null,
  country: 'USA',
  lat: 37.783617,
  lng: -122.411507,
  address: null,
  ownerId: null, name: null,
  description: null, price: null
}
const getRandom = (max) => Math.floor(Math.random() * max);
const randomSpots = []

module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = 'Users'
    await queryInterface.bulkInsert(options, [
      {
        firstName: 'Dexter',
        lastName: 'Asssf',
        email: 'user0@user.net',
        username: 'D0rk5ter',
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
        email: 'user2@user.co',
        username: 'MMMCMM',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        firstName: 'Arko',
        lastName: 'Chakrabarty',
        email: 'user3@user.co',
        username: 'RKOman',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        firstName: 'Prap',
        lastName: 'Tinnabavorn',
        email: 'user4@user.co',
        username: 'pRapper',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        firstName: 'Matt',
        lastName: 'Kleinsmith',
        email: 'user5@user.co',
        username: 'Ketmasta',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        firstName: 'Trevor',
        lastName: 'Moore',
        email: 'user6@user.co',
        username: 'MoreT',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        firstName: 'Tyler',
        lastName: 'Short',
        email: 'user7@user.co',
        username: 'ShortTee',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        firstName: 'Tohm',
        lastName: 'Lev',
        email: 'user8@user.co',
        username: 'TohmsDiner',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        firstName: 'Chris',
        lastName: 'Cohen',
        email: 'user9@user.co',
        username: 'CCplease',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        firstName: 'Mauro',
        lastName: 'Alvarez',
        email: 'user10@user.co',
        username: 'MoMar',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        firstName: 'Jozua',
        lastName: 'Lewis',
        email: 'user11@user.co',
        username: 'JozinYou',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        firstName: 'Haris',
        lastName: 'Ahmed',
        email: 'user12@user.co',
        username: 'Hairzz',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        firstName: 'Nora',
        lastName: 'Stokes',
        email: 'user13@user.co',
        username: 'Snokes',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        firstName: 'Dave',
        lastName: 'Sexton',
        email: 'user14@user.co',
        username: 'SextonD',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        firstName: 'Grey',
        lastName: 'Nance',
        email: 'user15@user.co',
        username: 'Grance',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        firstName: 'Roy',
        lastName: 'Lee',
        email: 'user16@user.co',
        username: 'Leeroy',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        firstName: 'Jade',
        lastName: 'Tran',
        email: 'user17@user.co',
        username: 'JadoTran',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        firstName: 'Efrain',
        lastName: 'Niafe',
        email: 'user18@user.co',
        username: 'effinRain',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        firstName: 'Sarah',
        lastName: 'Dunlop',
        email: 'user19@user.co',
        username: 'SunLop',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        firstName: 'Xena',
        lastName: 'Kitty',
        email: 'user20@user.co',
        username: 'CatFish',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        firstName: 'Alex',
        lastName: 'Kim',
        email: 'user21@user.co',
        username: 'Kilex',
        hashedPassword: bcrypt.hashSync('password')
      },

    ]
      ,
      {})
    options.tableName = 'Spots'

    let ownerSample = await User.findAll();
    ownerSample = JSON.parse(JSON.stringify(ownerSample))

    while (randomSpots.length < 40) {
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
      newRandom.name = `${nameSample[getRandom(nameSample.length - 1)]}`
      newRandom.city = stateCity.city
      newRandom.state = stateCity.state
      newRandom.address = address
      newRandom.price = price
      newRandom.description = `${newRandom.name} ${descriptIntro} ${description1} ${description2} ${description3}`
      randomSpots.push(newRandom)
    }

    await queryInterface.bulkInsert(options, randomSpots, {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */

    options.tableName = 'Spots'
    await queryInterface.bulkDelete(options, {})
    options.tableName = 'Users'
    await queryInterface.bulkDelete(options, {});
  },
};
