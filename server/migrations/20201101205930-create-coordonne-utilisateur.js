'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CoordonneUtilisateurs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      num_tel: {
        type: Sequelize.STRING
      },
      ville: {
        type: Sequelize.STRING
      },
      commune: {
        type: Sequelize.STRING
      },
      quartier: {
        type: Sequelize.STRING
      },
      avenu: {
        type: Sequelize.STRING
      },
      numero: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('CoordonneUtilisateurs');
  }
};