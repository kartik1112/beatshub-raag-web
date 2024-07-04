// Features.jsx
// eslint-disable-next-line no-unused-vars
import { React } from 'react';

const Features = () => {
  return (
    <div className='mx-4 sm:mx-16 md:mx-32 lg:mx-52 my-24'>
      <div className='items-start h-9 justify-start mt-10'>
        <p className='font-tagline text-white-bg'>New Features</p>
      </div>
      <div className='flex flex-row items-start justify-between'>
        <p className='font-mono font-medium text-white-bg'>Streaming Player</p>
        <p className='font-mono font-medium text-white-bg'>2024</p>
      </div>
      <div className='flex flex-row items-start justify-between'>
        <p className='font-mono font-medium text-white-bg'>Connect Tab</p>
        <p className='font-mono font-medium text-white-bg'>2024</p>
      </div>
      <div className='flex flex-row items-start justify-between'>
        <p className='font-mono font-medium text-white-bg'>Improved UI</p>
        <p className='font-mono font-medium text-white-bg'>2024</p>
      </div>
      <div className='flex flex-row items-start justify-between'>
        <p className='font-mono font-medium text-white-bg'>Enhanced Search</p>
        <p className='font-mono font-medium text-white-bg'>2024</p>
      </div>
    </div>
  );
};

export default Features;
