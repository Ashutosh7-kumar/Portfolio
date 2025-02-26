import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Ashutosh Kumar. All Rights Reserved.
      </p>
      <p>Crafted with code, creativity, and a sprinkle of magic by Ashutosh Kumar.</p>
    </footer>
  );
};

export default Footer;
