const { Gadget } = require('../models');
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

exports.updateGadget = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, status } = req.body;


        const gadget = await Gadget.findByPk(id);
        if (!gadget) {
            return res.status(404).json({ error: 'Gadget not found' });
        }


        gadget.name = name;
        gadget.status = status;
        await gadget.save();

        res.json(gadget);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.deleteGadget = async (req, res) => {
    try {
        const { id } = req.params;
        const gadget = await Gadget.findByPk(id);

        if (!gadget) {
            return res.status(404).json({ error: 'Gadget not found' });
        }

        await gadget.destroy();
        res.status(200).json({ message: 'Gadget deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.selfDestructGadget = async (req, res) => {
    try {
        const { id } = req.params;
        const gadget = await Gadget.findByPk(id);

        if (!gadget) {
            return res.status(404).json({ error: 'Gadget not found' });
        }

        // Aqui você pode adicionar a lógica de destruição do gadget, por exemplo:
        await gadget.destroy();

        res.status(200).json({ message: 'Gadget self-destructed successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
