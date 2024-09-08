import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './JobCard.css';

const JobCard = ({ job }) => {
  const handleApply = () => {
    alert(`Applying for ${job.title} at ${job.company}`);
  };

  return (

    

    <div className="col-md-4 mb-4">
      <div className="card h-100 ">
        <div className="card-body">
          <h5 className="card-title">{job.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{job.company}</h6>
          <p className="card-text">{job.description}</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Location: {job.location}</li>
            <li className="list-group-item">Experience: {job.experience}</li>
            <li className="list-group-item">Job Type: {job.type}</li>
            <li className="list-group-item">Level: {job.level}</li>
          </ul>
        </div>
        <div className="card-footer">
          <button
            onClick={handleApply}
            className="btn btn-primary w-100"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;