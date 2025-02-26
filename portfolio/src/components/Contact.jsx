import React, { useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Contact.css";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      toast.success('Message sent successfully!');
      setIsLoading(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <section className="contact-container">
      <ToastContainer />
      <div className="contact-content">
        <div className="contact-title">  
          <motion.h2 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, delay: 0.3, type: "spring", stiffness: 100, damping: 10 }}
            viewport={{ once: true }}
            className="contact-title"
          >Contact Me
          </motion.h2>
          <p className="contact-description">
            Interested in working together? Contact Me!
          </p>
        </div>
        <div className="contact-container2">
        <div className="contact-info">
          <h3 className="contact-subtitle">Contact Information</h3>
            <p><i className="fas fa-envelope"></i> ashutoshkumar7044709@gmail.com</p>
            <p><i className="fas fa-phone-alt"></i> +91&nbsp;9263470142</p>
            <p><i className="fab fa-linkedin"></i> <a href="https://www.linkedin.com/in/ashutosh7-kumar/">LinkedIn Profile</a></p>
            <p><i className="fab fa-github"></i> <a href="https://github.com/Ashutosh7-kumar">GitHub Profile</a></p>
            <p><i className="fab fa-instagram"></i> <a href="https://www.instagram.com/ashutosh_7_kumar?igsh=OXM2NmRqcWhqYWlq">Instagram Profile</a></p>
          </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input 
              type="text" 
              name="name" 
              placeholder="Name *" 
              required 
              value={formData.name} 
              onChange={handleChange} 
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Email *" 
              required 
              value={formData.email} 
              onChange={handleChange} 
            />
          </div>
          <input 
            type="text" 
            name="subject" 
            placeholder="Subject *" 
            required 
            value={formData.subject} 
            onChange={handleChange} 
          />
          <textarea 
            name="message" 
            placeholder="Your message *" 
            rows="5" 
            required 
            value={formData.message} 
            onChange={handleChange} 
          ></textarea>

          <button type="submit" className="contact-button" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Message"} <span>↗</span>
          </button>
        </form>
      </div>
      </div>
    </section>
  );
};

export default Contact;
