import React from 'react';
import UserClass from './UserClass';

function About() {
  return (
    <div>
      <h1 className='text-8xl text-center text-red-500 min-w-full min-h-96 flex flex-col justify-center'>About Us Page</h1>
      <div className='flex flex-wrap justify-around'>
        {/* Passing values from props */}
        <UserClass name={"Developer"} location={"USA"}/>
      </div>
    </div>
  )
}

export default About;