// JobComponent.js
import React from 'react';

// Component to display individual job details
const JobComponent = ({ job }) => {
  const { title, company, location, experience, type, level, description } = job;

  return (
    <div className="job-card border p-3 mb-3 shadow-sm rounded">
      <h3 className="text-primary">{title}</h3>
      <p>
        <strong>Company:</strong> {company}
      </p>
      <p>
        <strong>Location:</strong> {location}
      </p>
      <p>
        <strong>Experience:</strong> {experience}
      </p>
      <p>
        <strong>Type:</strong> {type}
      </p>
      <p>
        <strong>Level:</strong> {level}
      </p>
      <p className="text-muted">{description}</p>
    </div>
  );
};

export default JobComponent;