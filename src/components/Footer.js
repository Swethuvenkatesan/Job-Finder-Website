import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'; // Ensure your styles are correctly imported

const Footer = () => {
  return (
    <footer className="footer text-dark py-1" style={{ background: '#b7d7e8' }}>
      <div className="footer-container  px-0">
        <div className="row mx-0">
          {/* Job Finder Section */}
          <div className="col-md-4 mt-3">
            <h5>
              <i className="bi bi-box-arrow-in-right me-1"></i>
              <b>Job Finder</b>
            </h5>
            <p>The Site Of Your Campaigns</p>
          </div>

          {/* Contact Us Section */}
          <div className="col-md-4 mb-3">
            <h5>
              <i className="bi bi-box-arrow-in-right me-1"></i>
              <b>Contact Us</b>
            </h5>
            <ul className="list-unstyled">
              <li>
                Email: <a href="mailto:support@jobfinder.com" className="text-primary">support@jobfinder.com</a>
              </li>
              <li>Phone: +1-800-123-4567</li>
            </ul>

            {/* Social Media Icons */}
            <div className="d-flex mt-1">
              <i className="bi bi-linkedin me-3" style={{ fontSize: '1rem', color: 'black' }}></i>
              <i className="bi bi-whatsapp me-3" style={{ fontSize: '1rem', color: 'black' }}></i>
              <i className="bi bi-facebook me-3" style={{ fontSize: '1rem', color: 'black' }}></i>
              <i className="bi bi-twitter me-3" style={{ fontSize: '1rem', color: 'black' }}></i>
              <i className="bi bi-instagram me-3" style={{ fontSize: '1rem', color: 'black' }}></i>
            </div>
          </div>

          {/* Resources and Support Section */}
          <div className="col-md-4 mb-3">
            <h5>
              <i className="bi bi-box-arrow-in-right me-1"></i>
              <b>Resources and Support</b>
            </h5>
            <p>
              Explore our resources. Visit our{' '}
              <a href="/resources" className="text-primary">Resources</a> page.
            </p>
            <p>
              Need help? Contact our support team on our{' '}
              <a href="/support" className="text-primary">Support</a> page.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;