const express = require('express');
const authRoutes = require('./routes/authRoutes');
const gadgetRoutes = require('./routes/gadgetRoutes');
const userRoutes = require('./routes/userRoutes');
const { sequelize } = require('./models');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/gadgets', gadgetRoutes);
app.use('/api/users', userRoutes);

sequelize.sync();

module.exports = app;
