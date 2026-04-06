import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';
import '../styles/Education.css';

const educationData = [
  {
    degree: "Master’s in Information Technology (MIT) – In View",
    institution: "Miva Open University, Nigeria",
    period: "Ongoing"
  },
  {
    degree: "BSc, Botany",
    institution: "University of Calabar, Nigeria",
    period: "Completed"
  }
];

const certifications = [
  { name: "Google Project Management Certificate", issuer: "Google / Coursera" },
  { name: "AWS Cloud Foundations", issuer: "AWS" },
  { name: "Data Science Certification", issuer: "Explore AI" },
  { name: "SQL Certificate of Achievement", issuer: "365 Data Science" },
  { name: "SQL for Data Analysis", issuer: "LinkedIn Learning" },
  { name: "Learning BigQuery", issuer: "LinkedIn Learning" },
  { name: "Python Programmer Bootcamp", issuer: "365 Data Science" }
];

const Education: React.FC = () => {
  return (
    <div className="education-page">
      <section className="section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="title-large">Education & Certifications</h1>
            <p className="section-subtitle">A foundation of continuous learning and professional development.</p>
          </motion.div>

          <div className="education-grid">
            <div className="edu-main">
              <h2 className="section-title"><GraduationCap size={24} /> Academic Background</h2>
              <div className="edu-list">
                {educationData.map((edu, index) => (
                  <motion.div 
                    key={index}
                    className="edu-card card"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="edu-info">
                      <h3>{edu.degree}</h3>
                      <p className="institution">{edu.institution}</p>
                    </div>
                    <span className="edu-period">{edu.period}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="cert-side">
              <h2 className="section-title"><Award size={24} /> Professional Certifications</h2>
              <div className="cert-grid">
                {certifications.map((cert, index) => (
                  <motion.div 
                    key={index}
                    className="cert-badge card"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="cert-icon">
                      <ExternalLink size={16} />
                    </div>
                    <div className="cert-info">
                      <h4>{cert.name}</h4>
                      <p>{cert.issuer}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
