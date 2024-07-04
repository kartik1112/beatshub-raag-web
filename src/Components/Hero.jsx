// Hero.jsx
// eslint-disable-next-line no-unused-vars
import { React } from 'react';

const Hero = () => {
  return (
    <div className='relative flex items-center justify-center h-screen contentpa bg-blue-50'>
      <img className='object-cover h-full w-full' src="https://images.unsplash.com/photo-1493247035880-efdf55d1cc99?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <div className='absolute h-full w-full opacity-70 z-10 bg-gradient-to-r from-base-color via-pink to-black'></div>
      <div className='absolute z-20 flex flex-col box-border p-4 sm:p-16 md:p-24 lg:pt-16 lg:pb-16 lg:px-52 h-full w-full'>
        <div className='flex flex-row items-start justify-between'>
          <p className='font-mono text-xs sm:text-sm md:text-base font-semibold text-white'>BeatsHub</p>
          <p className='font-mono text-xs sm:text-sm md:text-base font-semibold text-white'>Join</p>
        </div>
        <div className='flex flex-col items-center justify-center flex-grow'>
          <p className='font-tagline text-2xl sm:text-5xl md:text-6xl text-white text-center'>Create. Connect. Conquer the Music World.</p>
        </div>
        <div className='flex flex-row items-end justify-between'>
          <p className='font-mono text-xs sm:text-sm md:text-base font-semibold text-white'>Music</p>
          <p className='font-mono text-xs sm:text-sm md:text-base font-semibold text-white'>Producers</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
