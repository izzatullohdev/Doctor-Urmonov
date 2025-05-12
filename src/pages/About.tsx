import React from 'react';
const Elementary = React.lazy(() => import('../components/Elementary'));
const Statistics = React.lazy(() => import('../components/Statistics'));
const Biographia = React.lazy(() => import('../components/Biographia'));

const About = () => {
  return (
    <div>
      <Elementary />
      <Statistics />
      <Biographia />
    </div>
  )
}

export default About;