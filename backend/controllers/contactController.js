// controllers/contactController.js
const Contact = require('../models/Contact');

exports.createContact = async (req, res) => {
  try {
    const { name, email } = req.body;
    const newContact = new Contact({ name, email });
    await newContact.save();
    res.status(201).json({ message: 'Message sent successfully', contact: newContact });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send message', error: error.message });
  }
};
