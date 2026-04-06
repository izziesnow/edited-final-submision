import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Rocket, Briefcase, Share2 } from 'lucide-react';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <section className="section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="title-large">Let’s Build Successful Projects Together</h1>
            <p className="section-subtitle">
              I’m open to working on technology projects, collaborating with teams, supporting digital product delivery, 
              and connecting with professionals across IT, analytics, and innovation.
            </p>
          </motion.div>

          <div className="contact-grid">
            <motion.div 
              className="contact-info-side"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="contact-methods">
                <div className="contact-card card">
                  <Mail className="contact-icon" />
                  <div>
                    <h3>Email</h3>
                    <p>elizabethokon900@gmail.com</p>
                  </div>
                </div>
                <div className="contact-card card">
                  <Phone className="contact-icon" />
                  <div>
                    <h3>Phone</h3>
                    <p>+234 08067501219</p>
                  </div>
                </div>
                <div className="contact-card card">
                  <MapPin className="contact-icon" />
                  <div>
                    <h3>Location</h3>
                    <p>Calabar, Nigeria</p>
                  </div>
                </div>
              </div>

              <div className="social-cta card">
                <h3>Find me on LinkedIn</h3>
                <p>Connect for professional opportunities and industry insights.</p>
                <a href="#" className="btn btn-outline">
                  <Linkedin size={20} /> LinkedIn Profile
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="contact-form-side card"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" placeholder="Elizabeth Okon" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="example@gmail.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" placeholder="Project Collaboration" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows={5} placeholder="Tell me about your project..." required></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Send Message <Send size={18} />
                </button>
              </form>
            </motion.div>
          </div>

          <div className="cta-grid section">
            <motion.div 
              className="cta-card card"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Rocket size={32} className="cta-icon" />
              <h3>Hire for Project Delivery</h3>
              <p>Looking for a project manager to lead your next IT initiative?</p>
            </motion.div>
            <motion.div 
              className="cta-card card"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Briefcase size={32} className="cta-icon" />
              <h3>Collaborate on Initiatives</h3>
              <p>Let's partner on innovative digital solutions and growth projects.</p>
            </motion.div>
            <motion.div 
              className="cta-card card"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Share2 size={32} className="cta-icon" />
              <h3>Professional Networking</h3>
              <p>Always happy to connect with fellow IT and analytics professionals.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
