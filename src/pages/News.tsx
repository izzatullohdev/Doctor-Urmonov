import { useEffect } from 'react';
import Elementary from '../components/Elementary';
import Cards from '../components/NewsCards';

const News = () => {
  useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className='px-4'>
        <Elementary />
        <Cards />
    </div>
  )
}

export default News;