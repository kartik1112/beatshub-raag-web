// eslint-disable-next-line no-unused-vars
import { React } from 'react'

/**
 * The main App component that renders the entire application.
 * It includes the header with navigation buttons, the hero section with a background image and text, and several sections with information about the platform.
 */
const App = () => {
  return (
    <div className='w-full bg-blue-150'>
      <div className='flex flex-col items-center justify-around h-screen w-full bg-white-bg'>
        {/* <h1 className='font-sans text-xxxl text-base-color '>.</h1> */}
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
      <div className='relative flex items-center justify-center h-screen contentpa bg-blue-50'>
        {/* <div className='absolute bg-opacity-40 bg-base-color h-screen w-screen z-10'></div> */}
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
      <div className='grid grid-flow-row items-center justify-around h-full w-full bg-base-bg'>
        <div className='mx-4 sm:mx-16 md:mx-32 lg:mx-52 mt-16 sm:mt-32 grid-flow-col grid grid-cols-1 sm:grid-cols-2 h-72 items-center'>
          <div className='flex items-center justify-center h-full w-full'>
            <img width={'100%'} height={'100%'} className='h-full object-cover rounded-2xl' src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            {/* <div className='absolute h-full w-full opacity-70 z-10 bg-gradient-to-r from-base-color via-pink to-black'></div> */}
          </div>
          <div className='ml-4 sm:ml-10'>
            <p className='font-tagline text-xl sm:text-2xl md:text-3xl text-violet-400 mb-3'>Finger on the Pulse of Music Trends</p>
            <p className='font-mono font-bold text-sm sm:text-base md:text-lg text-violet-400'>Stay updated with trending tracks, top producers, and hot uploads. Unearth the gems that haven’t yet hit the mainstream.</p>
          </div>
        </div>
        <div className='mx-4 sm:mx-16 md:mx-32 lg:mx-52 mt-16 sm:mt-32 grid-flow-col grid grid-cols-1 sm:grid-cols-2 h-72 items-center'>
          <div className='mr-4 sm:mr-10'>
            <p className='font-tagline text-xl sm:text-2xl md:text-3xl text-violet-400 mb-3'>Your Music Journey Starts Here</p>
            <p className='font-mono font-bold text-sm sm:text-base md:text-lg text-violet-400'>Effortlessly upload your tracks, customize your profile, and start building your fanbase.</p>
          </div>
          <div className='flex items-center justify-center h-full w-full'>
            <img width={'100%'} height={'100%'} className='h-full object-cover rounded-2xl' src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            {/* <div className='absolute h-full w-full opacity-70 z-10 bg-gradient-to-r from-base-color via-pink to-black'></div> */}
          </div>
        </div>
        <div className='grid grid-flow-row items-center mx-4 sm:mx-16 md:mx-32 lg:mx-52 py-16 sm:py-32 h-full'>
          <div className='flex flex-row p-2 rounded-xl w-full bg-base-card'>
            <img src='src/assets/headphones.svg' width={75} alt="" className='bg-white p-6 rounded-xl' />
            <div className='flex flex-col mx-4 sm:mx-8 w-full justify-center'>
              <p className='font-mono font-bold text-white text-base sm:text-lg'>Top Tracks</p>
              <p className='font-mono font-medium text-white text-sm'>Discover Popular Beats</p>
            </div>
            <img src="src/assets/arrow.svg" className='mr-4 sm:mr-8' width={20} alt="" />
          </div>
          <div className='flex flex-row p-2 rounded-xl w-full bg-base-card mt-4 sm:mt-8'>
            <img src='src/assets/fire.svg' width={75} alt="" className='bg-white p-6 rounded-xl' />
            <div className='flex flex-col mx-4 sm:mx-8 w-full justify-center'>
              <p className='font-mono font-bold text-white text-base sm:text-lg'>New Releases</p>
              <p className='font-mono font-medium text-white text-sm'>Back in fresh tunes</p>
            </div>
            <img src="src/assets/arrow.svg" className='mr-4 sm:mr-8' width={20} alt="" />
          </div>
          <div className='flex flex-row p-2 rounded-xl w-full bg-base-card mt-4 sm:mt-8'>
            <img src='src/assets/thunder.svg' width={75} alt="" className='bg-white p-6 rounded-xl' />
            <div className='flex flex-col mx-4 sm:mx-8 w-full justify-center'>
              <p className='font-mono font-bold text-white text-base sm:text-lg'>Dynamic Community</p>
              <p className='font-mono font-medium text-white text-sm'>Connect with music titans</p>
            </div>
            <img src="src/assets/arrow.svg" className='mr-4 sm:mr-8' width={20} alt="" />
          </div>
        </div>
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
        </div>
        <hr className='mx-4 sm:mx-16 md:mx-32 lg:mx-52 my-2 border-divider' />
        <div className='flex items-center justify-center mx-4 sm:mx-16 md:mx-32 lg:mx-52'>
          <div className='text-white-bg font-mono font-normal text-xs sm:text-sm'>
            <p>© 2024 Raag. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
