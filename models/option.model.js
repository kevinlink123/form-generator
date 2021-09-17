module.exports = (sequelize, Sequelize) => {
    const Option = sequelize.define("options", {
      options: {
        type: Sequelize.STRING
      }
    });
  
    return Option;
};