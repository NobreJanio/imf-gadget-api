const express = require('express');
const { getAllGadgets, addGadget, updateGadget, deleteGadget, selfDestructGadget } = require('../controllers/gadgetController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();
router.get('/', authMiddleware, getAllGadgets);
router.post('/', authMiddleware, addGadget);
router.patch('/:id', authMiddleware, updateGadget);
router.delete('/:id', authMiddleware, deleteGadget);
router.post('/:id/self-destruct', authMiddleware, selfDestructGadget);

module.exports = router;