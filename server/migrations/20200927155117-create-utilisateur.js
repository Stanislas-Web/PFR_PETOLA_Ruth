'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Utilisateurs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nom_utilisateur: {
        allowNull: false,
        type: Sequelize.STRING
      },
      prenom: {
        allowNull: true,
        type: Sequelize.STRING
      },
      pwd: {
        allowNull: false,
        type: Sequelize.STRING
      },
      photo: {
        allowNull: true,
        type: Sequelize.STRING
      },
      type_paiement: {
        allowNull: false,
        type: Sequelize.STRING
      },
      numero_carte: {
        allowNull: true,
        type: Sequelize.STRING
      },
      code_secret: {
        allowNull: false,
        type: Sequelize.STRING
      },
    
      // id_planning: {
      //   allowNull: false,
      //   type: Sequelize.INTEGER,
      //   references : {
      //     model : 'Plannings',
      //     key : 'id'
      //   }
      // },
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
    await queryInterface.dropTable('Utilisateurs');
  }
};