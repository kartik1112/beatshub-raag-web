// App.jsx
// eslint-disable-next-line no-unused-vars
import { React } from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Section from './Components/Section';
import Card from './Components/Card';
import Team from './Components/Team';
import Join from './Components/Join';
import Features from './Components/Features';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className='w-full bg-blue-150'>
      <Header />
      <Hero />
      <div className='grid grid-flow-row items-center justify-around h-full w-full bg-base-bg'>
        <Section
          imgSrc="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          imgAlt=""
          reverse={false}
          title="Finger on the Pulse of Music Trends"
          description="Stay updated with trending tracks, top producers, and hot uploads. Unearth the gems that haven’t yet hit the mainstream."
        />
        <Section
          imgSrc="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          imgAlt=""
          title="Your Music Journey Starts Here"
          description="Effortlessly upload your tracks, customize your profile, and start building your fanbase."
          reverse={true}
        />
        <div className='grid grid-flow-row items-center mx-4 sm:mx-16 md:mx-32 lg:mx-52 py-16 sm:py-32 h-full'>
          <Card
            iconSrc='src/assets/headphones.svg'
            title='Top Tracks'
            description='Discover Popular Beats'
            
          />
          <Card
            iconSrc='src/assets/fire.svg'
            title='New Releases'
            description='Back in fresh tunes'
          />
          <Card
            iconSrc='src/assets/thunder.svg'
            title='Dynamic Community'
            description='Connect with music titans'
          />
        </div>
        <Team />
        <Join />
        <Features />
        <Footer />
      </div>

    </div>
  );
};

export default App;
