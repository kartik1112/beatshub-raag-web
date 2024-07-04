// Section.jsx
// eslint-disable-next-line no-unused-vars
import { React } from 'react';

// eslint-disable-next-line react/prop-types
const Section = ({ imgSrc, imgAlt, title, description, reverse }) => {
    return (
        <div className={`mx-4 sm:mx-16 md:mx-32 lg:mx-52 mt-16 sm:mt-32 grid-flow-col grid grid-cols-1 sm:grid-cols-2 h-72 items-center ${reverse ? 'sm:grid-cols-2-reverse' : ''}`}>

            {reverse ? (
                <div className='flex items-center justify-center h-full w-full'>
                    <img width={'100%'} height={'100%'} className='h-full object-cover rounded-2xl' src={imgSrc} alt={imgAlt} />
                </div>

            ) : (null)}
            <div className={!reverse ? 'mr-12':'ml-12'}>
                <p className='font-tagline text-xl sm:text-2xl md:text-3xl text-violet-300 mb-3'>{title}</p>
                <p className='font-mono font-semibold text-sm sm:text-base md:text-md text-violet-200'>{description}</p>
            </div>
            {!reverse ? (
                <div className='flex items-center justify-center h-full w-full'>
                    <img width={'100%'} height={'100%'} className='h-full object-cover rounded-2xl' src={imgSrc} alt={imgAlt} />
                </div>
            ) : (null)}
        </div>
    );
};

export default Section;
