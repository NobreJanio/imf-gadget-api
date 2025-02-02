const jwt = require('jsonwebtoken');
const { User } = require('../models');
const bcrypt = require('bcryptjs');
const { secret } = require('../config/auth');

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if (!user || !bcrypt.compareSync(password, user.password)) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: user.id }, secret, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.register = async (req, res) => {
    try {
        const { email, password, name } = req.body;
        const hashedPassword = bcrypt.hashSync(password, 8);
        const user = await User.create({ email, password: hashedPassword, name });
        res.status(201).json({ user });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
