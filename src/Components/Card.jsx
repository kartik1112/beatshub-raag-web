// Card.jsx
// eslint-disable-next-line no-unused-vars
import { React } from 'react';

const Card = ({ iconSrc, title, description }) => {
  return (
    <div className='flex flex-row p-2 rounded-xl w-full bg-base-card mt-4 sm:mt-8'>
      <img src={iconSrc} width={75} alt="" className='bg-white p-6 rounded-xl' />
      <div className='flex flex-col mx-4 sm:mx-8 w-full justify-center'>
        <p className='font-mono font-bold text-white text-base sm:text-lg'>{title}</p>
        <p className='font-mono font-medium text-white text-sm'>{description}</p>
      </div>
      <img src="src/assets/arrow.svg" className='mr-4 sm:mr-8' width={20} alt="" />
    </div>
  );
};

export default Card;
