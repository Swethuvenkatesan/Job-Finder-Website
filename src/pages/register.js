import React from 'react';

const Register = () => {
  return (
    <div className="container my-2">

        <h1 class="text-primary ms-5"> Best Jobs Search Platform 
        <i class="bi bi-search ms-3" style={{fontSize: '1.8rem' }} ></i>
        </h1>

<div className="col mb-2 ">
            <img
              src=" https://png.pngtree.com/png-clipart/20220429/original/pngtree-man-search-for-hiring-job-online-from-laptop-human-resources-management-png-image_7579804.png" 
              alt="Success Image"
              className="img-fluid rounded ms-2 mt-3"
              style={{ width: '45rem', height: '25rem' }} 
            />
          </div>  

      <h2> <i className="fas fa-user-plus me-2 mt-3"></i>  <b> Register </b></h2>
      <form className="mt-4">
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input type="text" className="form-control" id="username" placeholder="Enter your username" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="password" placeholder="Enter your password" />
        </div>
        <button type="submit" className="btn btn-primary">
        <i class="bi bi-arrow-right-short me-1"></i>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;