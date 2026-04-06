import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle, Smartphone, BarChart, Activity, ShoppingCart, Users, Zap } from 'lucide-react';
import '../styles/Projects.css';

const Projects: React.FC = () => {
  const categories = [
    {
      title: "Finance Analytics Projects",
      role: "IT Project Manager",
      icon: <BarChart size={24} />,
      desc: "Managed delivery of technology and analytics solutions for finance clients."
    },
    {
      title: "Healthcare Solutions Projects",
      role: "IT Project Manager",
      icon: <Activity size={24} />,
      desc: "Coordinated project delivery for healthcare-focused analytics and digital solutions."
    },
    {
      title: "E-commerce Technology Projects",
      role: "IT Project Manager",
      icon: <ShoppingCart size={24} />,
      desc: "Led and coordinated digital solution delivery for e-commerce clients."
    },
    {
      title: "Syncl Platform Development",
      role: "Project Manager",
      icon: <Users size={24} />,
      desc: "Led development of Spurt’s collaboration and project management platform."
    },
    {
      title: "Innovation & SME Solutions",
      role: "Project Manager",
      icon: <Zap size={24} />,
      desc: "Coordinated technology projects for startups and SME clients."
    }
  ];

  return (
    <div className="projects-page">
      <section className="section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="title-large">Projects Portfolio</h1>
            <p className="section-subtitle">Delivering measurable value through structured technology initiatives.</p>
          </motion.div>

          <motion.div 
            className="featured-project card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="project-badge">Featured Project</div>
            <div className="project-content">
              <div className="project-text">
                <div className="project-icon-large"><Smartphone size={40} /></div>
                <h2>Greensight App</h2>
                <p className="project-role">Role: IT Project Manager | Industry: Agriculture & Environment</p>
                <p className="project-desc">
                  Managed the full development lifecycle of the Greensight app, delivering the solution within 6 months. 
                  The platform revolutionized how clients track environmental and agricultural data.
                </p>
                
                <div className="project-impact">
                  <strong>Impact:</strong> Improved data tracking efficiency by 40% for primary users.
                </div>

                <div className="contributions-grid">
                  <div className="contribution"><CheckCircle size={16} /> Project Planning</div>
                  <div className="contribution"><CheckCircle size={16} /> Stakeholder Coordination</div>
                  <div className="contribution"><CheckCircle size={16} /> Delivery Tracking</div>
                  <div className="contribution"><CheckCircle size={16} /> Agile Execution</div>
                  <div className="contribution"><CheckCircle size={16} /> KPI Alignment</div>
                  <div className="contribution"><CheckCircle size={16} /> Team Coordination</div>
                </div>
              </div>
              <div className="project-visual-placeholder">
                <span>App Showcase Placeholder</span>
              </div>
            </div>
          </motion.div>

          <h2 className="categories-title">Project Categories Handled</h2>
          <div className="categories-grid">
            {categories.map((cat, index) => (
              <motion.div 
                key={index}
                className="category-card card"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="cat-icon">{cat.icon}</div>
                <h3>{cat.title}</h3>
                <p className="cat-role">{cat.role}</p>
                <p className="cat-desc">{cat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
