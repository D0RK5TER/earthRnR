'use strict';

/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {

    // await queryInterface.addColumn('Users',
    //   "profilepic", {
    //   type: Sequelize.STRING,
    //   allowNull: true,
    // },
    // ),

      await queryInterface.addColumn('Users',
        "superhost", {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      ),



      // await queryInterface.addColumn('Spots',
      //   "type", {
      //   type: Sequelize.STRING,
      //   allowNull: true,
      // },
      // ),
      await queryInterface.addColumn('Spots',
        'attributes', {
        type: Sequelize.STRING,
        allowNull: true,
      },
      ),
      await queryInterface.addColumn('Spots',
        'features', {
        type: Sequelize.STRING,
        allowNull: true,
      },
      ),

      await queryInterface.addColumn('Spots',
        'size', {
        type: Sequelize.STRING,
        allowNull: true,
      },
      ),









      await queryInterface.addColumn('Reviews',
        'cleanliness', {
        type: Sequelize.INTEGER,
        allowNull: true,
        validate: {
          min: 0,
          max: 5
        }
      },
      ),

      await queryInterface.addColumn('Reviews',
        'communication', {
        type: Sequelize.INTEGER,
        allowNull: true,
        validate: {
          min: 0,
          max: 5
        }
      },
      ),

      await queryInterface.addColumn('Reviews',
        'location', {
        type: Sequelize.INTEGER,
        allowNull: true,
        validate: {
          min: 0,
          max: 5
        }
      },
      ),

      await queryInterface.addColumn('Reviews',
        'checkin', {
        type: Sequelize.INTEGER,
        allowNull: true,
        validate: {
          min: 0,
          max: 5
        }
      },
      ),

      await queryInterface.addColumn('Reviews',
        'value', {
        type: Sequelize.INTEGER,
        allowNull: true,
        validate: {
          min: 0,
          max: 5
        }
      },
      ),

      await queryInterface.addColumn('Reviews',
        'accuracy', {
        type: Sequelize.INTEGER,
        allowNull: true,
        validate: {
          min: 0,
          max: 5
        }
      },
      )


  },

  async down(queryInterface, Sequelize) {

    await queryInterface.removeColumn('Reviews', 'accuracy')
    await queryInterface.removeColumn('Reviews', 'value')
    await queryInterface.removeColumn('Reviews', 'checkin')
    await queryInterface.removeColumn('Reviews', 'location')
    await queryInterface.removeColumn('Reviews', 'communication')
    await queryInterface.removeColumn('Reviews', 'cleanliness')

    await queryInterface.removeColumn('Spots', 'size')
    await queryInterface.removeColumn('Spots', 'features')
    await queryInterface.removeColumn('Spots', 'attributes')
    await queryInterface.removeColumn('Spots', 'type')

    await queryInterface.removeColumn('Users', 'superhost')
    await queryInterface.removeColumn('Users', 'profilepic')
  }
};
