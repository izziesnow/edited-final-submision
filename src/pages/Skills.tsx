import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Settings, Users, Monitor, ShieldCheck, MessageSquare, ClipboardList, TrendingUp } from 'lucide-react';
import '../styles/Skills.css';

const Skills: React.FC = () => {
  const skillGroups = [
    {
      title: "Project Management Methodology",
      icon: <Layers size={28} />,
      skills: ["Agile Methodologies", "Scrum", "SDLC", "Project Planning", "Timeline Management", "Risk & Quality Monitoring"]
    },
    {
      title: "Strategic Execution",
      icon: <TrendingUp size={28} />,
      skills: ["Budget Management", "Resource Allocation", "KPI Alignment", "Stakeholder Engagement", "Client Requirement Gathering"]
    },
    {
      title: "Team & Leadership",
      icon: <Users size={28} />,
      skills: ["Cross-functional Team Coordination", "Communication", "Team Collaboration", "Practical Leadership", "Conflict Resolution"]
    },
    {
      title: "Operations & Support",
      icon: <ClipboardList size={28} />,
      skills: ["Documentation & Reporting", "Dashboard Reporting", "Customer Support", "Administrative Coordination", "Service Delivery"]
    }
  ];

  const tools = [
    "Project Dashboards", "Agile Work Environments", "Collaboration Platforms", 
    "Documentation Tools", "Scheduling Software", "Reporting Systems", 
    "Microsoft Office Suite", "Project Management Tools"
  ];

  return (
    <div className="skills-page">
      <section className="section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="title-large">Professional Skills</h1>
            <p className="section-subtitle">A diverse toolkit for managing technology projects from conception to delivery.</p>
          </motion.div>

          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <motion.div 
                key={index}
                className="skill-group card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="skill-group-header">
                  <div className="skill-group-icon">{group.icon}</div>
                  <h2>{group.title}</h2>
                </div>
                <div className="skill-tags">
                  {group.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="tools-section section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="tools-title"><Monitor size={24} /> Tools & Work Environments</h2>
            <div className="tools-grid">
              {tools.map((tool, index) => (
                <div key={index} className="tool-item">
                   <ShieldCheck size={16} /> <span>{tool}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
