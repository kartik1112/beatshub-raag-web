// Join.jsx
// eslint-disable-next-line no-unused-vars
import { React } from 'react';

const Join = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center w-full'>
        <p className='font-tagline text-center text-2xl sm:text-3xl mb-5 text-pretty text-white-bg'>Join BeatsHub</p>
        <p className='font-mono text-center text-xs sm:text-sm font-bold text-pretty text-white-bg w-56 sm:w-72'>Discover thousands of explosive tracks. Build your profile. Connect with the brightest minds in music. Your musical journey stars now. Ready to hit the high notes?</p>
        <div className='m-5'>
          <button className='bg-white text-base-card rounded-md px-4 sm:px-6 font-mono font-medium text-xs sm:text-sm py-2 m-1'>Register</button>
          <button className='bg-white text-base-card rounded-md px-4 sm:px-6 font-mono font-medium text-xs sm:text-sm py-2 m-1'>Upload</button>
        </div>
      </div>
    </div>
  );
};

export default Join;
