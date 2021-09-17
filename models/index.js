const config = require("../config/db.config.js");
const Sequelize = require("sequelize");
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB,
    process.env.DB_USER,
    process.env.PASSWORD,
    {
        host: process.env.HOST,
        dialect: process.env.DIALECT
    }
);
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.form = require('../models/form.model')(sequelize, Sequelize);
db.question = require('../models/question.model')(sequelize, Sequelize);

db.form.hasMany(db.question, {
    as: 'questions',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
db.question.belongsTo(db.form, {
    foreignKey: 'formId',
    as: 'form'
});

module.exports = db;