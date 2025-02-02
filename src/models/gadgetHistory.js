const { Sequelize, DataTypes } = require('sequelize');  // Importe o Sequelize e DataTypes
const sequelize = require('../config/database');  // Importe a instância do sequelize

const GadgetHistory = sequelize.define('GadgetHistory', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    gadgetId: { type: DataTypes.UUID, allowNull: false },
    action: { type: DataTypes.STRING, allowNull: false },
    timestamp: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
});

module.exports = GadgetHistory;