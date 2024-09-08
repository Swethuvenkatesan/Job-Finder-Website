import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-primary text-dark py-1  ">
      <div className="container-fluid">
        <div className="row">
          
          <div className="col-md-4 mb-3">
            <h4> <i class="bi bi-box-arrow-in-right me-1"></i><b> Job Finder </b></h4>
            <p> The Site Of Your Campaigns</p>
          </div>

          {/* Contact Us */}
          <div className="col-md-4 mb-3">
            <h4> <i class="bi bi-box-arrow-in-right me-1"></i> <b>Contact Us </b></h4>
            <ul className="list-unstyled">
              <li>Email: <a href="mailto:support@jobfinder.com" className="text-white">support@jobfinder.com</a></li>
              <li>Phone: +1-800-123-4567</li>
            </ul>

             {/* Social Media Icons */}
             <div className="d-flex mt-2">
              
                <i className="bi bi-linkedin me-3" style={{ fontSize: '1.5rem',color: 'white' }}></i>
              
                <i className="bi bi-whatsapp me-3" style={{ fontSize: '1.5rem',color: 'white' }}></i>
              
                <i className="bi bi-facebook me-3" style={{ fontSize: '1.5rem',color: 'white' }}></i>
              
                <i className="bi bi-twitter me-3" style={{ fontSize: '1.5rem',color: 'white'}}></i>

                <i className="bi bi-instagram me-3" style={{ fontSize: '1.5rem',color: 'white'}}></i>
              
            </div>
            
              
             
            
          </div>

          {/* Resources and Support */}
          <div className="col-md-4 mb-3">
            <h4><i class="bi bi-box-arrow-in-right me-1"></i><b> Resources and Support</b></h4>
            <p>
              Explore our resources including resume tips, interview guidance, and career advice. Visit our <a href="/resources" className="text-white">Resources</a> page.
            </p>
            <p>
              Need help? Contact our support team 24/7 via our <a href="/support" className="text-white">Support</a> page.
            </p>
          </div>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;