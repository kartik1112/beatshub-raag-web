// Team.jsx
// eslint-disable-next-line no-unused-vars
import { React } from 'react';

const Team = () => {
  return (
    <div className='my-6 sm:mb-36 mx-4 sm:mx-16 md:mx-32 lg:mx-52'>
      <div className='flex flex-col items-center justify-center w-full'>
        <p className='font-tagline text-white text-3xl sm:text-4xl'>Team Beats</p>
        <p className='font-mono text-center text-wrap text-white text-xs sm:text-lg mt-4'>Meet our top producers setting the charts on fire</p>
      </div>
      <div className='grid gap-8 my-10 grid-flow-col items-center justify-stretch w-full bg-base-bg'>
        <div className='flex flex-col items-center justify-center py-12 rounded-2xl bg-base-card'>
          <img width={70} className='grayscale hover:grayscale-0 rounded-full h-20 w-20 object-cover' src="https://framerusercontent.com/images/7avws9dEhriUlY3tlp9SqeTtGM.jpg?scale-down-to=1024" alt="" />
          <p className='font-tagline text-white text-xl mt-6'>JAXON BLAZE</p>
          <p className='font-mono text-center text-wrap text-white text-xs sm:text-sm mt-2'>EDM Producer</p>
        </div>
        <div className='flex flex-col items-center justify-center py-12 rounded-2xl bg-base-card'>
          <img width={70} className='grayscale hover:grayscale-0 rounded-full h-20 w-20 object-cover' src="https://framerusercontent.com/images/uc0mwweC4nBJ6GdRoEJWDuDc.jpg?scale-down-to=1024" alt="" />
          <p className='font-tagline text-white text-xl mt-6'>LEYLA HARMONY</p>
          <p className='font-mono text-center text-wrap text-white text-xs sm:text-sm mt-2'>POP Producer</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
