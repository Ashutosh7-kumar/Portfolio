import React from "react";
import "./Hero.css";
import img from '/img/My_img.png';
import { motion } from "framer-motion";
import { FaGithub, FaXTwitter, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa6";

const Hero = () => {
  const handleContactClick = () => {
    document.getElementById("Contact").scrollIntoView({ behavior: "smooth" });
  };
  const handleportfolioClick = () => {
    document.getElementById("Resume").scrollIntoView({ behavior: "smooth" });
  };
  const handleRoleClick = () => {
    window.open('https://www.google.com/search?q=frontend+developer', '_blank');
  };
  return (
    <header className="hero-container">
      <div className="hero-content">
        <p className="hero-subtitle">Namasté, I'm</p>
        <motion.h1 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 100, damping: 10 }}
          viewport={{ once: true }}
          className="hero-title"
          >Ashutosh Kumar</motion.h1>
        <button className="hero-role" onClick={handleRoleClick}>✨ Frontend Developer</button>
        <p className="hero-description">
          I am an IT <span className="underline">undergraduate</span> passionate about technology and software development. <br />
          With strong programming skills, I have successfully led and contributed to <span className="underline">various projects.</span>
        </p>
        <div className="hero-icons">
          <a href="https://github.com/Ashutosh7-kumar" target="_blank" rel="noopener noreferrer" className="icon github"><FaGithub /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="icon twitter"><FaXTwitter /></a>
          <a href="https://www.instagram.com/ashutosh_7_kumar?igsh=OXM2NmRqcWhqYWlq" target="_blank" rel="noopener noreferrer" className="icon instagram"><FaInstagram /></a>
          <a href="https://www.facebook.com/share/169cuFSLb4/" target="_blank" rel="noopener noreferrer" className="icon facebook"><FaFacebook /></a>
          <a href="https://www.linkedin.com/in/ashutosh7-kumar/" target="_blank" rel="noopener noreferrer" className="icon linkedin"><FaLinkedin /></a>
        </div>
        <div className="hero-buttons">      
          <button className="hero-contact" onClick={handleContactClick}>💻 Contact Me</button>
          <button className="hero-portfolio" onClick={handleportfolioClick}>View Portfolio ➡️</button>
        </div>
      </div>
      <div className="hero-image-container">
        
      <a href ={img} download="Ashutosh_Kumar.png">
        <img src={img} alt="Developer Ashutosh" className="hero-image" />
        </a>
      </div>
    </header>
  );
};

export default Hero;
