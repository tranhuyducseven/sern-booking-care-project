'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'example@example.com',
      password: '12345678',
      firstName: 'hasdfuySuc',
      lastName: 'Doe',
      address: 'Viet Nam',
      gender: true,
      roleId:'patient',
      phoneNumber:'0123901323',
      image:'https://www.example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
