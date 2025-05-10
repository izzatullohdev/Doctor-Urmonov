import React from 'react';
const Patients = React.lazy(() => import('../components/Patients'));
const Videos = React.lazy(() => import('../components/Videos'));

const Home = () => {
  return (
    <div className=''>
        <Patients />
        <Videos />
    </div>
  )
}

export default Home;