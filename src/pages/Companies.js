import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Companies = () => {
  return (
    <div className="container my-1">
      <h2 className="mb-4">
       <i className="bi bi-person-workspace me-2"></i><b> Companies </b>

      </h2>
      <p> <i class="bi bi-arrow-down-square-fill me-3"></i>This page lists the companies currently hiring. 
        You can explore more about each company here.</p>

         {/* Company List using Bootstrap Card Model */}

        {/* Cards Row */}
      <div className="row d-flex align-items-center">
           {/* Card 1 */}
           <div className="col-md-4 mb-4">
               <div className="card" style={{ width: '60%', padding: '0.4rem' }}>
                  <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBg9zkf0PWdFupdiDjLIkF1rWzE_oC76dNaQ&s" 
                  className="card-img-top"
                   alt="Company Logo"
                  style={{ height: '150px', objectFit: 'cover' }}
                />
                <div className="card-body p-2">
                   <h5 className="card-title text-primary" style={{ fontSize: '1rem' }}>
                       <b> Tech Corp</b>
                    </h5>
                    <p className="card-text" style={{ fontSize: '0.875rem' }}>
                       <i class="bi bi-geo-alt-fill me-1"></i> Bangalore
                    </p>
                   <a href="#" className="btn btn-primary btn-sm">
                      <i class="bi bi-globe me-1"></i> Visit Website
                   </a>
                </div>
               </div>
           </div>

                {/* Card 2 */}
              <div className="col-md-4 mb-4">
                   <div className="card" style={{ width: '60%', padding: '0.5rem' }}>
                      <img
                       src="https://cdn0.iconfinder.com/data/icons/business-381/500/business-work_11-512.png" 
                        className="card-img-top"
                        alt="Company Logo"
                        style={{ height: '150px', objectFit: 'cover' }}
                       />
                     <div className="card-body p-2">
                       <h5 className="card-title text-primary" style={{ fontSize: '1rem' }}>
                           <b> Innovate Ltd </b>
                       </h5>
                          <p className="card-text" style={{ fontSize: '0.875rem' }}>
                         <i class="bi bi-geo-alt-fill me-1"></i>Bangalore
                        </p>
                         <a href="#" className="btn btn-primary btn-sm">
                          <i className="bi bi-globe me-1"></i> Visit Website
                         </a>
                     </div>
                    </div>
                </div>

               {/* Card 3 */}
         <div className="col-md-4 mb-4">
          <div className="card" style={{ width: '60%', padding: '0.5rem' }}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ThSkUVamlgohHA1UmOebUjx7WHt5V5dqww&s"
              className="card-img-top"
              alt="Company Logo"
              style={{ height: '150px', objectFit: 'cover' }}
            />
            <div className="card-body p-2">
              <h5 className="card-title text-primary" style={{ fontSize: '1rem' }}>
                <b> D Solutions </b>
              </h5>
              <p className="card-text" style={{ fontSize: '0.875rem' }}>
              <i class="bi bi-geo-alt-fill me-1"></i> Hyderabad
              </p>
              <a href="#" className="btn btn-primary btn-sm">
              <i class="bi bi-globe me-1"></i>Visit Website
              </a>
            </div>
          </div>
         </div>

        
         {/* Card 4 */}
         <div className="col-md-4 mb-4">
          <div className="card" style={{ width: '60%', padding: '0.5rem' }}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjs9J__YL7Q4wWT2raIyMjAwhFZj66KTw3yg&s" 
              className="card-img-top"
              alt="Company Logo"
              style={{ height: '150px', objectFit: 'cover' }}
            />
            <div className="card-body p-2">
              <h5 className="card-title text-primary" style={{ fontSize: '1rem' }}>
                <b> AA Solutions</b>
              </h5>
              <p className="card-text" style={{ fontSize: '0.875rem' }}>
              <i class="bi bi-geo-alt-fill me-1"></i> chennai
              </p>
              <a href="#" className="btn btn-primary btn-sm">
              <i class="bi bi-globe"></i> Visit Website
              </a>
            </div>
          </div>
         </div>
        

           {/* Card 5 */}
          <div className="col-md-4 mb-4">
          <div className="card" style={{ width: '60%', padding: '0.5rem' }}>
            <img
              src="https://static.thenounproject.com/png/4737315-200.png"
              className="card-img-top"
              alt="Company Logo"
              style={{ height: '150px', objectFit: 'cover' }}
            />
            <div className="card-body p-2">
              <h5 className="card-title text-primary" style={{ fontSize: '1rem' }}>
               <b> SS ltd </b>
              </h5>
              <p className="card-text" style={{ fontSize: '0.875rem' }}>
              <i class="bi bi-geo-alt-fill me-1"></i> noida
              </p>
              <a href="#" className="btn btn-primary btn-sm">
              <i class="bi bi-globe"></i> Visit Website
              </a>
            </div>
          </div>
         </div>
           
           {/* Card 6 */}
          <div className="col-md-4 mb-4">
          <div className="card" style={{ width: '60%', padding: '0.5rem' }}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKepE-JQRviGikOmXtD4fB059-54QugrLEALVVcvVhLgLZ01UYivzSBPD0tXMrJfeCR98&usqp=CAU"
              className="card-img-top"
              alt="Company Logo"
              style={{ height: '150px', objectFit: 'cover' }}
            />
            <div className="card-body p-2">
              <h5 className="card-title text-primary" style={{ fontSize: '1rem' }}>
               <b> GROW TECH </b>
              </h5>
              <p className="card-text" style={{ fontSize: '0.875rem' }}>
              <i class="bi bi-geo-alt-fill me-1"></i> chennai
              </p>
              <a href="#" className="btn btn-primary btn-sm">
              <i class="bi bi-globe"></i> Visit Website
              </a>
            </div>
          </div>
          </div>

        </div>


      {/* Job Roles Section */}
      <div className="mt-5">
               <h2> <b> Job Roles </b> </h2>
         <div className="row text-center mt-3">
              {/* Job Role 1 */}
              <div className="col-3">
                 <i className="bi bi-pencil-square" style={{ fontSize: '2rem', color: '#007bff' }}></i>
                 <p>Designer</p>
              </div>

              {/* Job Role 2 */}
              <div className="col-3">
                 <i className="bi bi-graph-up" style={{ fontSize: '2rem', color: 'brown' }}></i>
                 <p>Marketing</p>
               </div>

               {/* Job Role 3 */}
                <div className="col-3">
                   <i className="bi bi-code-slash" style={{ fontSize: '2rem', color: 'green' }}></i>
                    <p>Developer</p>
               </div>

                
               { /* Job Role 4 */}
               <div className="col-3">
                  <i className="bi bi-currency-dollar" style={{ fontSize: '2rem', color: '#dc3545' }}></i>
                   <p>Finance</p>
               </div>

               {/* Job Role 5 */}
               <div className="col-3">
                   <i className="bi bi-pencil-fill" style={{ fontSize: '2rem', color: 'black' }}></i>
                    <p>Creativity</p>
               </div>

               
                {/* Job Role 6 */}
                <div className="col-3">
                   <i className="bi bi-camera-reels-fill" style={{ fontSize: '2rem', color: 'grey' }}></i>
                    <p>Editing</p>
               </div>

                {/* Job Role 7 */}
                <div className="col-3">
                   <i className="bi bi-wrench-adjustable" style={{ fontSize: '2rem', color: 'navy' }}></i>
                    <p>Testing</p>
               </div>

                {/* Job Role 8 */}
                <div className="col-3">
                   <i className="bi bi-controller" style={{ fontSize: '2rem', color: '#F07857' }}></i>
                    <p>Gaming</p>
               </div>

           </div>
       </div>
      
    </div> 
  );
};

export default Companies;