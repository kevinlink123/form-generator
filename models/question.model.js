module.exports = (sequelize, Sequelize) => {
    const Question = sequelize.define("questions", {
      questionType: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      }
    });
  
    return Question;
};