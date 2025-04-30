import React from 'react';
import photo from "/img/resume.png";
import { motion } from "framer-motion";
import axios from 'axios';
import "./Resume.css";

function Resume(){

  return (
    <div className="resume-container">
        <div className="resume-title">  <motion.h2 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100, damping: 10 }}
            viewport={{ once: true }}
            className="resume-title"
          >Resume
          </motion.h2>
          <p className="resume-description">Dive into to see my career highlights and the expertise I've gained over the years.</p>
          </div>
      <div className="resume-flex">
        <div className="resume-images">
          <motion.img src={photo} className="resume-image rotate-left" alt="Resume Preview" />
          <motion.img src={photo} className="resume-image rotate-right" alt="Resume Preview" />
          <motion.img 
            initial={{ scale: 1, translateX: "-150%" }}
            whileInView={{ scale: [1.2, 1.1, 1.2, 1.1], translateX: "-150%" }}
            transition={{ duration: 1 }}
            src={photo} 
            className="resume-image shadow" 
            alt="Resume Preview" 
          />
        </div>
        <div className="resume-content">
          <div className="resume-download">
              <a href="/AshutoshResume.pdf" download="Ashutosh_Kumar_Resume.pdf">
                <motion.button 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, transition: { duration: 1, delay: 0.5 } }}
                  whileHover={{ scale: 1.1, boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)", transition: { duration: 0.3 } }}
                  whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
                  viewport={{ amount: 0.1, once: true }}
                  className="resume-button"
                >
                  Download CV
                </motion.button>
              </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
