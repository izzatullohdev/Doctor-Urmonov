import React from 'react';
// import elementary and cards components
const Elementary = React.lazy(() => import('../components/Elementary')); 
const BlogCards = React.lazy(() => import('../components/BlogCards'));


const Blog = () => {
  return (
    <div className='px-4'>
        <Elementary />
        <BlogCards />
    </div>
  )
}

export default Blog;