module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('ReuniaoType', [
    {
      tipo: 'Periódica',
    },
    {
      tipo: 'Não Periódica',
    },
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('ReuniaoType', null, {}),
};
