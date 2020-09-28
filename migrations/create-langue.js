module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('Langues', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            designation: {
                type: Sequelize.STRING
            },
            niveau_p: {
                type: Sequelize.STRING
            },
            niveau_e: {
                type: Sequelize.STRING
            },
            niveau_c: {
                type: Sequelize.STRING
            }
        }),
    down: (queryInterface /* , Sequelize */) => queryInterface.dropTable('Langues'),
};