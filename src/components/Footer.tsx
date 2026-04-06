import React from 'react';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2 className="footer-logo">Elizabeth Ijeoma Okon</h2>
            <p className="footer-tagline">
              Professional IT Project Manager delivering technology solutions with impact.
            </p>
          </div>
          
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/experience">Experience</a></li>
              <li><a href="/projects">Projects</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3>Connect</h3>
            <div className="contact-item">
              <Mail size={16} />
              <span>elizabethokon900@gmail.com</span>
            </div>
            <div className="contact-item">
              <Phone size={16} />
              <span>+234 08067501219</span>
            </div>
            <div className="contact-item">
              <MapPin size={16} />
              <span>Calabar, Nigeria</span>
            </div>
          </div>
          
          <div className="footer-social">
            <h3>Social</h3>
            <div className="social-icons">
              <a href="#" aria-label="LinkedIn"><Linkedin size={24} /></a>
              <a href="mailto:elizabethokon900@gmail.com" aria-label="Email"><Mail size={24} /></a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Elizabeth Ijeoma Okon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
