import React from 'react';
import NotFoundImage from './assets/notFoundImg.jpg';

function NotFound() {
  return (
    <div>
      <div>
      <img src={NotFoundImage} alt="404 Not Found Image" className='mx-auto max-h-[90vh]'/>
      </div>
    </div>
  )
}

export default NotFound;