import { useEffect } from 'react';
import Elementary from '../components/Elementary';
import BlogCards from '../components/BlogCards';

const Blog = () => {
  useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className='px-4'>
        <Elementary />
        <BlogCards />
    </div>
  )
}

export default Blog;