import { useEffect } from 'react';
import Elementary from '../components/Elementary';
import Statistics from '../components/Statistics';
import Biographia from '../components/Biographia';
import Years from '../components/Years';

const About = () => {
  useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className='max-lg:mt-[185px]'>
      <Elementary />
      <Statistics />
      <Biographia />
      <Years />
    </div>
  )
}

export default About;