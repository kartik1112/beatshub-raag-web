// Footer.jsx
// eslint-disable-next-line no-unused-vars
import { React } from 'react';

const Footer = () => {
  return (
    <div className='mx-4 sm:mx-16 md:mx-32 lg:mx-52 text-xs sm:text-sm font-medium text-white-bg font-mono'>
      <div className='grid mt-12 mb-16 grid-flow-col grid-row-3 gap-10 sm:gap-20'>
        <div className='flex flex-col'>
          <p className='my-2 text-base sm:text-lg'>About</p>
          <div className='flex flex-col gap-2'>
            <p>Company</p>
            <p>Careers</p>
            <p>Impact</p>
          </div>
        </div>
        <div className='flex flex-col'>
          <p className='my-2 text-base sm:text-lg'>Help</p>
          <div className='flex flex-col gap-2'>
            <p>FAQ</p>
            <p>Contact</p>
            <p>Support</p>
          </div>
        </div>
        <div className='flex flex-col'>
          <p className='my-2 text-base sm:text-lg'>Legal</p>
          <div className='flex flex-col gap-2'>
            <p>Privacy</p>
            <p>Terms</p>
            <p>Cookies</p>
          </div>
        </div>
      </div>
      <hr className='mx-4 sm:mx-16 md:mx-32 lg:mx-52 my-2 border-divider' />
      <div className='flex items-center justify-center mx-4 sm:mx-16 md:mx-32 lg:mx-52'>
        <div className='text-white-bg font-mono font-normal text-xs sm:text-sm'>
          <p>© 2024 Raag. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
