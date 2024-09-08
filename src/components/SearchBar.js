import React, { useContext } from 'react';
import { JobContext } from '../context/JobContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchBar = () => {
  const { setFilters } = useContext(JobContext);

  const handleChange = (e) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="container my-4">
      <div className="row g-2">
        <div className="col-md-3">
  
          <input
            type="text"
            name="role"
            placeholder="Search by role..."
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            name="experience"
            placeholder="Experience (e.g., 2-4 years)"
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="col-md-3">
          <select name="type" onChange={handleChange} className="form-select">
            <option value="">Select job type</option>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
          </select>
        </div>
        <div className="col-md-3">
          <select name="level" onChange={handleChange} className="form-select">
            <option value="">Select level</option>
            <option value="junior">Junior</option>
            <option value="mid">Mid</option>
            <option value="senior">Senior</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;