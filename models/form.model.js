module.exports = (sequelize, Sequelize) => {
    const Form = sequelize.define("forms", {
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      }
    });
  
    return Form;
};