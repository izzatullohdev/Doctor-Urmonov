import React, { useEffect } from 'react';
const Elementary = React.lazy(() => import('../components/Elementary'));
const Statistics = React.lazy(() => import('../components/Statistics'));
const Biographia = React.lazy(() => import('../components/Biographia'));
const Years = React.lazy(() => import('../components/Years'));

const About = () => {
  useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div>
      <Elementary />
      <Statistics />
      <Biographia />
      <Years />
    </div>
  )
}

export default About;