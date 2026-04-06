import React from 'react';
import { motion } from 'framer-motion';
import { Download, Briefcase, Mail, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <section className="hero section">
        <div className="container hero-container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="hero-subtitle">IT Project Manager</span>
            <h1 className="title-large">Elizabeth Ijeoma Okon</h1>
            <p className="hero-description">
              Results-driven IT Project Manager with 5+ years of experience managing technology projects, 
              delivering data analytics solutions, and leading cross-functional teams. Skilled in project 
              planning, SDLC, Agile methodologies, and stakeholder management.
            </p>
            <div className="hero-ctas">
              <a href="/cv.pdf" download className="btn btn-primary">
                <Download size={20} /> Download CV
              </a>
              <Link to="/experience" className="btn btn-outline">
                <Briefcase size={20} /> View Experience
              </Link>
              <Link to="/contact" className="btn btn-outline">
                <Mail size={20} /> Contact Me
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="hero-image-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-image-placeholder">
              {/* Image will be placed here */}
              <div className="placeholder-overlay">
                <span>Profile Photo</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="highlights section">
        <div className="container">
          <div className="highlights-grid">
            <motion.div 
              className="highlight-card card"
              whileHover={{ scale: 1.02 }}
            >
              <div className="highlight-icon">
                <CheckCircle size={32} />
              </div>
              <h3>5+ Years Experience</h3>
              <p>Leading technology-focused initiatives across analytics and operational delivery.</p>
            </motion.div>

            <motion.div 
              className="highlight-card card"
              whileHover={{ scale: 1.02 }}
            >
              <div className="highlight-icon">
                <CheckCircle size={32} />
              </div>
              <h3>Analytics Delivery</h3>
              <p>Coordinating developers and analysts to deliver complex data solutions.</p>
            </motion.div>

            <motion.div 
              className="highlight-card card"
              whileHover={{ scale: 1.02 }}
            >
              <div className="highlight-icon">
                <CheckCircle size={32} />
              </div>
              <h3>Agile & SDLC</h3>
              <p>Applying best practices to improve workflows and reduce unfinished tasks.</p>
            </motion.div>

            <motion.div 
              className="highlight-card card"
              whileHover={{ scale: 1.02 }}
            >
              <div className="highlight-icon">
                <CheckCircle size={32} />
              </div>
              <h3>Team Leadership</h3>
              <p>Leading cross-functional teams to translate ideas into functional products.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="cta-banner section">
        <div className="container">
          <div className="banner-content">
            <h2>Ready to collaborate on your next project?</h2>
            <Link to="/contact" className="btn btn-primary">
              Get in Touch <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
