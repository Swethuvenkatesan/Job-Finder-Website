import React from 'react';

const Login = () => {
  return (
    
    <div className="container my-1 ">
      <h2>  <i className="fas fa-sign-in-alt me-2"></i> <b> Login </b></h2>
      <form className="mt-4">
        <div className="mb-4">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email" />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="form-label">
            user Name
          </label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email" />
        </div>

        <div className=" mt-2 mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="password" placeholder="Enter your password" />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
        <i class="bi bi-arrow-right-short  me-1"></i> Login
        </button>
      </form>
      
    </div>
    
  );
 
};

export default Login;