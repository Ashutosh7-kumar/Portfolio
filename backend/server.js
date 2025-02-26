const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
const contactRoutes = require('./routes/contactRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/",contactRoutes)
// Create a transporter for sending emails
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
    const { name, email,subject, message } = req.body;

    try {
        // Email options
        const mailOptions = {
            from: process.env.EMAIL,
            to: process.env.EMAIL, // Your email where you want to receive messages
            subject: `${subject}`,
            html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Sender's Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
            `
        };

        // Send email
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Email sent successfully!'});
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Failed to send email'});
    }
});
mongoose.connect(process.env.MONGO)
.then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);

});
