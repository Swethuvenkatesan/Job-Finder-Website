import React from 'react';

const About = () => {
  return (
    <div className="container my-3">
      <h2> <i className="fas fa-info-circle me-2" ></i> 
      <b> About Us </b></h2>
      <p>
        Job Finder is a platform that helps job seekers find the perfect job by connecting them with top companies.</p> 
        
        <p>Our mission is to streamline the hiring process by providing a seamless experience for both job seekers and employers.
      </p>

      
     <h1 class="mt-4 text-success"> <b> Find the most exciting </b></h1>
        <h1 class="text-success"> <b> Startup Jobs. </b></h1>
    

      {/* Experience Section */}
      <section className="mt-5">
        <h2>  Our Experience </h2>
        <p className="text-primary ">
          With over 10 years of experience in the recruitment industry, Job Finder has helped thousands of job seekers and employers connect efficiently.</p>
           <p className="text-primary mt-1"> Our team consists of experienced professionals dedicated to making the job search process easier for everyone.
        </p>
      </section>

      {/* Past Successes Section */}
      <section className="mt-4">
    <div className="row align-items-center">

      <div className="col-md-8">
        <h2> <i class="bi bi-hand-thumbs-up-fill"  style={{ fontSize: '1.5rem', color: 'green' }}></i> Past Successes </h2>
        <ul className="list-group mt-3">
          <li className="list-group-item mb-3" style={{ fontSize: '1.2rem', color:'green' }}>
             Over 50,000 successful job placements worldwide. 
          </li>
          <li className="list-group-item mb-3 " style={{ fontSize: '1.2rem', color: 'green' }}>
            Partnered with 1,000+ top companies.
          </li>
          <li className="list-group-item"  style={{ fontSize: '1.2rem', color: 'green' }}>
            Recognized as one of the leading job search platforms by TechReview 2023.
          </li>
        </ul>
        </div>

          <div className="col-md-4 ">
            <img
              src="https://static.vecteezy.com/system/resources/previews/033/124/789/original/tiny-female-character-with-huge-glowing-light-bulb-in-hands-businesswoman-has-creative-idea-muse-business-vision-educational-insight-and-motivation-business-success-cartoon-illustration-vector.jpg" 
              alt="Success Image"
              className="img-fluid rounded-circle ms-2 mt-5" 
            />
          </div>
    </div>

      </section>

      {/* Website Details */}
      <section className="mt-5">
        <h2> <i class="bi bi-globe" style={{ fontSize: '1.5rem' }}></i> Website Details </h2>
        <p>
          Visit our website for the latest job listings and career resources: <a href="https://www.jobfinder.com" target="_blank" rel="noopener noreferrer">www.jobfinder.com</a>
        </p>
      </section>

      {/* Contact Us Section */}
      <section className="mt-5">
        <h2>Contact Us</h2>
        <p>
          Have questions? Reach out to us at:
        </p>
        <ul className="list-unstyled">
          <li> Email: <a href="mailto:support@jobfinder.com">support@jobfinder.com</a></li>
           <li> Phone: +1-800-123-4567</li>
        </ul>
      </section>

      {/* Social Media Links */}
      <section className="mt-5">
        <h2>Follow Us</h2>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="https://www.facebook.com/jobfinder" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <i class="bi bi-facebook"></i> Facebook
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.twitter.com/jobfinder" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <i class="bi bi-twitter"></i> Twitter
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.linkedin.com/company/jobfinder" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <i class="bi bi-linkedin"  style={{ fontSize: '1rem', color: 'white' }}></i> LinkedIn
            </a>
          </li>
        </ul>
      </section>

      {/* Ratings Section */}
      <section className="mt-5">
        <h2>Ratings </h2>
        <p>We are rated 4.8/5 by our users on TrustPilot. 
        <i class="bi bi-heart-fill ms-1" style={{ fontSize: '1rem', color: 'orange' }}></i>
        </p>
      </section>


    </div>
  );
};


export default About;