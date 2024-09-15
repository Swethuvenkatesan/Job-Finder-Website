import React from 'react';

const Contact = () => {
  return (
    <div className="container my-1">
      <h2> <i className="fas fa-phone me-2"></i>
       <b> Contact Us </b></h2>
      <form className="mt-4">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
          <i class="bi bi-box-arrow-in-right me-1"></i>  Name
          </label>
          <input type="text" className="form-control" id="name" placeholder="Enter your name" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
          <i class="bi bi-box-arrow-in-right me-1"></i> Email address
          </label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
          <i class="bi bi-box-arrow-in-right me-1"></i> Message
          </label>
          <textarea className="form-control" id="message" rows="3" placeholder="Your message"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
        <i class="bi bi-arrow-right-short"></i> Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;