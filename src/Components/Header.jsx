// Header.jsx
// eslint-disable-next-line no-unused-vars
import { React } from 'react';

const Header = () => {
  return (
    <div className='flex flex-col items-center justify-around h-screen w-full bg-white-bg'>
      <div className='flex'>
        <svg height={30} width={30} xmlns="http://www.w3.org/2000/svg">
          <circle cx="50%" cy="50%" r="15" fill='#32004f' />
        </svg>
      </div>
      <h1 className='font-sans text-6xl sm:text-8xl md:text-10xl lg:text-12xl text-base-color'>RAAG</h1>
      <div className='flex flex-row items-center justify-center'>
        <button className='font-mono mx-1 sm:mx-3' onClick={() => {
          console.log("click1");
        }}>Home</button>
        <button className='font-mono mx-1 sm:mx-3' onClick={() => {
          console.log("click2");
        }}>Connect</button>
        <button className='font-mono mx-1 sm:mx-3' onClick={() => {
          console.log("click3");
        }}>Marketplace</button>
      </div>
    </div>
  );
};

export default Header;
