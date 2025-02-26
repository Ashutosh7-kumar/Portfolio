import React from "react";
import "./Project.css"; // Import the CSS file
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "An e-commerce platform for selling products online. It has a user-friendly interface and is optimized for search engines.",
    image: "/img/ecommerce.jpg", // Update with your actual image path
    technologies: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "Blood Donation",
    description:
      "A responsive Blood Donation website with secure donor registration, real-time database, smooth animations, and a user-friendly UI to connect donors with those in need.",
    image: "/img/blood donation.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Bootstrap"],
  },
  {
    title: "Netflix Clone",
    description:
      "A clone of the popular streaming service Netflix. It has a user-friendly interface and is optimized for search engines.",
    image: "/img/netflix.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
  },
];

const Project = () => {
  return (
    <section className="projects-container">
      <div className="projects-container2">
        <div className="projects-title">  <motion.h2 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100, damping: 10 }}
                    viewport={{ once: true }}
                    className="projects-title"
                  >My Projects
                  </motion.h2>
                  <p className="projects-description">
                  Here are some collection of projects where creativity meets technology:
                </p>
                  </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
