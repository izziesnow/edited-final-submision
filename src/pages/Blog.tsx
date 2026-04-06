import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, BookOpen } from 'lucide-react';
import '../styles/Blog.css';

const blogPosts = [
  {
    title: "Managing Cross-Functional Teams for Better Delivery",
    summary: "Exploring how to bridge the gap between technical teams and business stakeholders for seamless project execution.",
    date: "April 2026",
    category: "Team Leadership"
  },
  {
    title: "Why Agile Mindset Matters in Modern Project Execution",
    summary: "Breaking down the benefits of Agile methodologies in delivering value faster and responding to change.",
    date: "March 2026",
    category: "Methodology"
  },
  {
    title: "Lessons from Leading Technology Projects Across Industries",
    summary: "Key takeaways from managing data analytics and software projects in finance, healthcare, and e-commerce.",
    date: "February 2026",
    category: "Project Insights"
  },
  {
    title: "The Human Side of Stakeholder Management",
    summary: "How effective communication and empathy drive project success and stakeholder satisfaction.",
    date: "January 2026",
    category: "Communication"
  },
  {
    title: "From Planning to Delivery: Building Better Project Systems",
    summary: "A guide to structuring ideas and workflows to ensure high-quality digital product delivery.",
    date: "December 2025",
    category: "Workflow"
  }
];

const Blog: React.FC = () => {
  return (
    <div className="blog-page">
      <section className="section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="title-large">Insights & Reflections</h1>
            <p className="section-subtitle">
              Sharing perspectives on project delivery, digital transformation, teamwork, execution, and technology leadership.
            </p>
          </motion.div>

          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <motion.article 
                key={index}
                className="blog-card card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="blog-header">
                  <span className="blog-category">{post.category}</span>
                  <div className="blog-date"><Calendar size={14} /> {post.date}</div>
                </div>
                <h2 className="blog-title">{post.title}</h2>
                <p className="blog-summary">{post.summary}</p>
                <button className="read-more">
                  Read More <ArrowRight size={16} />
                </button>
              </motion.article>
            ))}
          </div>

          <motion.div 
            className="blog-newsletter card"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="newsletter-content">
              <BookOpen size={40} className="newsletter-icon" />
              <h2>Stay Updated</h2>
              <p>Subscribe to receive the latest insights on IT Project Management and technology leadership.</p>
              <div className="newsletter-form">
                <input type="email" placeholder="Enter your email" />
                <button className="btn btn-primary">Subscribe</button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
