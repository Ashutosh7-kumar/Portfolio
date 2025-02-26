import React from "react";
import "./Skills.css";
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaBootstrap, FaPython} from "react-icons/fa";
import { SiExpress, SiMongodb, SiC, SiCplusplus } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { motion } from "framer-motion";


const skills = [
  { name: "HTML", icon: <FaHtml5 className="skill-icon html" /> },
  { name: "CSS", icon: <FaCss3Alt className="skill-icon css" /> },
  { name: "JS", icon: <FaJs className="skill-icon js" /> },
  { name: "C", icon: <SiC className="skill-icon c" /> },
  { name: "C++", icon: <SiCplusplus className="skill-icon c" /> },
  { name: "Java", icon: <FaJava className="skill-icon python" /> },
  { name: "Python", icon: <FaPython className="skill-icon python" /> },
  { name: "NodeJS", icon: <FaNodeJs className="skill-icon nodejs" /> },
  { name: "ExpressJS", icon: <SiExpress className="skill-icon express" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="skill-icon bootstrap" /> },
  { name: "MongoDB", icon: <SiMongodb className="skill-icon mongodb" /> }
];

const Skills = () => {
  return (
    <section className="skills-container">
      <div className="skills-content">
        <div className="skills-title">  <motion.h2 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100, damping: 10 }}
                    viewport={{ once: true }}
                    className="skills-title"
                  >Skills
                  </motion.h2>
                  <p className="skills-description">
                  Here are some of the technologies that are part of my current stack:
                </p>
                  </div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              {skill.icon}
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
