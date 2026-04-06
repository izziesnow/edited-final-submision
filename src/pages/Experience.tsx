import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import '../styles/Experience.css';

const experiences = [
  {
    title: "IT Project Manager",
    company: "PSP Analytics",
    location: "Calabar, Nigeria",
    period: "March 2023 – Till Date",
    achievements: [
      "Managed 6+ IT and data analytics projects over 24 months, coordinating developers, analysts, and stakeholders.",
      "Managed full development of Greensight app, delivered in 6 months, improving data tracking by 40%.",
      "Created project plans and dashboards, achieving 95% of milestones on schedule.",
      "Managed budgets totaling over ₦50M, reducing costs by 15% through efficient planning.",
      "Applied Agile practices to reduce unfinished tasks by 30%."
    ]
  },
  {
    title: "Project Manager",
    company: "Spurt Group",
    location: "Calabar, Nigeria",
    period: "August 2019 – March 2023",
    achievements: [
      "Led a team of developers in the development of Syncl, Spurt’s all-in-one collaboration platform.",
      "Managed 5+ innovation and technology projects for startups and SME clients.",
      "Translated business ideas into functional digital products with software developers and designers.",
      "Facilitated communication between technical teams and business stakeholders."
    ]
  },
  {
    title: "Assistant Project Manager",
    company: "Sermatech Nigeria Limited",
    location: "Calabar, Nigeria",
    period: "March 2018 – August 2019",
    achievements: [
      "Supported the delivery of construction projects across roads, residential buildings, and electrical installations.",
      "Monitored on-site activities to ensure compliance with project schedules, budgets, and engineering designs.",
      "Worked with engineers, contractors, and suppliers to support smooth project execution.",
      "Prepared project documents, reports, and job estimates."
    ]
  },
  {
    title: "Administrative Manager / Customer Support",
    company: "Eddyliz Nigeria Limited",
    location: "Calabar, Nigeria",
    period: "August 2016 – March 2018",
    achievements: [
      "Answered incoming calls and made outbound calls to customers for follow-ups and service updates.",
      "Responded promptly to customer inquiries, complaints, and requests.",
      "Scheduled customer appointments and coordinated service timelines efficiently.",
      "Maintained accurate customer records and provided professional support."
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <div className="experience-page">
      <section className="section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="title-large">Professional Experience</h1>
            <p className="section-subtitle">A journey through technology project leadership and operational excellence.</p>
          </motion.div>

          <div className="timeline">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="timeline-dot"><Briefcase size={16} /></div>
                <div className="timeline-content card">
                  <div className="exp-header">
                    <div className="exp-title-group">
                      <h2>{exp.title}</h2>
                      <h3>{exp.company}</h3>
                    </div>
                    <div className="exp-meta">
                      <div className="meta-item"><Calendar size={14} /> {exp.period}</div>
                      <div className="meta-item"><MapPin size={14} /> {exp.location}</div>
                    </div>
                  </div>
                  <ul className="achievements-list">
                    {exp.achievements.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
