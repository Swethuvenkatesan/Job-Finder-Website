import React, { useContext, useState } from 'react';
import { JobContext } from '../context/JobContext';
import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import './Jobs.css';
const Jobs = () => {
  const { jobs, setFilters } = useContext(JobContext);
  const [search, setSearch] = useState({
    role: '',
    experience: '',
    type: '',
    level: '',
  });

  // Handle filter changes and update the context filters
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setSearch({ ...search, [name]: value });
  };

  // Apply filters when the user submits the form
  const applyFilters = (e) => {
    e.preventDefault();
    setFilters(search);
  };

  return (
    <div className="container my-4">
      <h2 className="mb-4">
        <i className="fa-solid fa-briefcase me-2"></i>
        <b> Job Listings </b> </h2>
      
      {/* Filter Form */}
      <Form onSubmit={applyFilters} className="mb-4">
        <Row>
          <Col md={3}>
            <Form.Group controlId="role">
              <Form.Label>Role</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search by role"
                name="role"
                value={search.role}
                onChange={handleFilterChange}
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId="experience">
              <Form.Label>Experience</Form.Label>
              <Form.Control
                type="text"
                placeholder="Experience (e.g., 2-4 years)"
                name="experience"
                value={search.experience}
                onChange={handleFilterChange}
                
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId="type">
              <Form.Label>Job Type</Form.Label>
              <Form.Control
                as="select"
                name="type"
                value={search.type}
                onChange={handleFilterChange}
              >
                <option value="">Select Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId="level">
              <Form.Label>Level</Form.Label>
              <Form.Control
                as="select"
                name="level"
                value={search.level}
                onChange={handleFilterChange}
              >
                <option value="">Select Level</option>
                <option value="Junior">Junior</option>
                <option value="Mid">Mid</option>
                <option value="Senior">Senior</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Button type="submit" className="mt-3">
        <i class="bi bi-arrow-right-short me-1"></i> Apply Filters
        </Button>
      </Form>

      {/* Job Cards */}
      <Row>
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <Col key={job.id} md={4} className="mb-4">
              <Card className="hover-card shadow-sm border-0"> {/* job-card class for hover effect */}
                <Card.Body>
                  <Card.Title>{job.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-danger">
                    {job.company} - {job.location}
                  </Card.Subtitle>
                  <Card.Text>
                    <strong>Experience:</strong> {job.experience}
                    <br />
                    <strong>Type:</strong> {job.type}
                    <br />
                    <strong>Level:</strong> {job.level}
                    <br />
                    {job.description}
                  </Card.Text>
                  <Button variant="dark">
                  <i class="bi bi-arrow-right-short me-1"></i> Apply Now</Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>No jobs found matching your criteria.</p>
        )}
      </Row>
    </div>
  );
};

export default Jobs;