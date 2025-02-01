const { Sequelize } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');
const Gadget = require('./gadget');
const GadgetHistory = require('./gadgetHistory');

User.hasMany(Gadget);
Gadget.belongsTo(User);
Gadget.hasMany(GadgetHistory);
GadgetHistory.belongsTo(Gadget);

module.exports = { sequelize, User, Gadget, GadgetHistory };