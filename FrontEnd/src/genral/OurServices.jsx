

import React from 'react';
import './OurServices.css';

const servicesData = [
  {
    title: 'Job Search',
    description: 'Find thousands of jobs in various sectors.',
    icon: '🔍',
  },
  {
    title: 'Resume Builder',
    description: 'Build a professional resume in minutes.',
    icon: '📄',
  },
  {
    title: 'Career Advice',
    description: 'Get expert guidance for your career path.',
    icon: '💡',
  },
  {
    title: 'Job Alerts',
    description: 'Receive job notifications directly in your inbox.',
    icon: '🔔',
  },
  {
    title: 'Freelance Gigs',
    description: 'Explore freelance and part-time jobs.',
    icon: '💼',
  },
  {
    title: 'Interview Prep',
    description: 'Practice questions and mock interviews.',
    icon: '🎤',
  },
  {
    title: 'Skill Courses',
    description: 'Enroll in skill-boosting online courses.',
    icon: '🎓',
  },
  {
    title: 'Company Reviews',
    description: 'Read reviews before applying to companies.',
    icon: '🏢',
  },
   {
    title: 'Job Search',
    description: 'Find thousands of jobs in various sectors.',
    icon: '🔍',
  },
  {
    title: 'Resume Builder',
    description: 'Build a professional resume in minutes.',
    icon: '📄',
  },
  {
    title: 'Career Advice',
    description: 'Get expert guidance for your career path.',
    icon: '💡',
  },
  {
    title: 'Job Alerts',
    description: 'Receive job notifications directly in your inbox.',
    icon: '🔔',
  },
  {
    title: 'Freelance Gigs',
    description: 'Explore freelance and part-time jobs.',
    icon: '💼',
  },
  {
    title: 'Interview Prep',
    description: 'Practice questions and mock interviews.',
    icon: '🎤',
  },
  {
    title: 'Skill Courses',
    description: 'Enroll in skill-boosting online courses.',
    icon: '🎓',
  },
  {
    title: 'Company Reviews',
    description: 'Read reviews before applying to companies.',
    icon: '🏢',
  },
];

const OurServices = () => {
  return (
    <div className="services-section">
      <h2 className="section-title">Our Services</h2>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;