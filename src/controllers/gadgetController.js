const { Gadget, GadgetHistory } = require('../models');
const { generateSuccessProbability } = require('../utils/generateSuccessProbability');

exports.getAllGadgets = async (req, res) => {
    try {
        const gadgets = await Gadget.findAll();
        const gadgetsWithProbability = gadgets.map(gadget => ({
            ...gadget.toJSON(),
            successProbability: generateSuccessProbability()
        }));
        res.json(gadgetsWithProbability);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.addGadget = async (req, res) => {
    try {
        const { name, status } = req.body;
        const newGadget = await Gadget.create({ name, status });
        res.status(201).json(newGadget);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};