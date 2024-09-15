import React from 'react';

const ImageSection = () => {
  return (
    <div className="Image-section border-1">
      <div className="card bg-dark text-white border-0"></div>
      <img
        className="card-img img-fluid "
        src="https://wallpaperbat.com/img/305496-digital-marketing-wallpaper-png-7-png-image.png"
        alt="Job Finder"
        style={{
          width: '95rem',       
          maxWidth: '100%',        
          objectFit: 'cover',  
          height: '300px',     
        }}  />

          
   </div>
  );
};

export default ImageSection;
