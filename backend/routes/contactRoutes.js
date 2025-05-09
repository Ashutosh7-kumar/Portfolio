// routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.post('/api/contact', contactController.createContact);

module.exports = router;
