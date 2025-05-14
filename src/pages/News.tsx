import React, { useEffect } from 'react';
// import elementary and cards components
const Elementary = React.lazy(() => import('../components/Elementary')); 
const Cards = React.lazy(() => import('../components/NewsCards'));

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