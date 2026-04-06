import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Linkedin, Globe, Target, Heart, Zap } from 'lucide-react';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <section className="about-hero section">
        <div className="container about-container">
          <motion.div 
            className="about-image-side"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-image-placeholder">
              <span>Profile Image</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="about-content-side"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="title-large">My Story</h1>
            <p className="about-narrative">
              Elizabeth Ijeoma Okon is a results-driven IT Project Manager based in Calabar, Nigeria, 
              with over five years of experience leading technology-focused initiatives across analytics, 
              software, and operational delivery.
            </p>
            <p className="about-narrative">
              Her work spans project planning, stakeholder coordination, Agile execution, and 
              product-focused collaboration, enabling teams to deliver solutions that create 
              measurable value. She brings a practical leadership style, strong communication, 
              and a passion for structuring ideas into successful outcomes.
            </p>
            
            <div className="contact-details-grid">
              <div className="detail-item">
                <MapPin size={18} />
                <span>Calabar, Nigeria</span>
              </div>
              <div className="detail-item">
                <Phone size={18} />
                <span>+234 08067501219</span>
              </div>
              <div className="detail-item">
                <Mail size={18} />
                <span>elizabethokon900@gmail.com</span>
              </div>
              <div className="detail-item">
                <Linkedin size={18} />
                <a href="#">LinkedIn Profile</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="about-details section">
        <div className="container">
          <div className="details-grid">
            <motion.div 
              className="detail-card card"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
            >
              <div className="detail-icon"><Globe size={32} /></div>
              <h2>What I Do</h2>
              <ul>
                <li>Technology project management</li>
                <li>Digital product delivery</li>
                <li>Data analytics solutions</li>
                <li>Stakeholder management</li>
                <li>Agile project execution</li>
                <li>Software development lifecycle</li>
              </ul>
            </motion.div>

            <motion.div 
              className="detail-card card"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="detail-icon"><Target size={32} /></div>
              <h2>Core Interests</h2>
              <p>Passion for managing projects that create measurable impact and driving innovation through structured leadership.</p>
            </motion.div>

            <motion.div 
              className="detail-card card"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="detail-icon"><Zap size={32} /></div>
              <h2>Current Focus</h2>
              <p>Advancing project delivery frameworks and exploring emerging analytics technologies at PSP Analytics.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
