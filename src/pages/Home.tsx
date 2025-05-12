import React from 'react';
const About = React.lazy(() => import('../components/About'));
const Biographia = React.lazy(() => import('../components/Biographia'));
const HomeCards = React.lazy(() => import('../components/HomeCards'));
const Videos = React.lazy(() => import('../components/Videos'));
const Patients = React.lazy(() => import('../components/Patients'));
const Information = React.lazy(() => import('../components/Information'));

const Home = () => {
  return (
    <div className=''>
        <About />
        <Biographia />
        <HomeCards />
        <Patients />
        <Videos />
        <Information />
    </div>
  )
}

export default Home;