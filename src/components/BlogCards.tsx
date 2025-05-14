import { NavLink } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const BlogCards = () => {
  const { BlogData } = useAppContext();

  return (
    <div className='max-w-7xl mx-auto px-4 mb-26'>
      <div className="grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 gap-y-6 gap-x-4">
        {
          BlogData?.map((item) => (
            <NavLink to={`/blog/${item.id}`} key={item.id}>
              <div className='rounded-[10px] overflow-hidden relative group shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer'>
                <img 
                  src={item.image}
                  alt={item.title} 
                  className='w-full object-contain group-hover:scale-105 transition-transform duration-300 ease-in-out'
                />
                <div className="w-full absolute bottom-0 left-0 p-4">
                  <h1 
                    title={item.title} 
                    className='text-start font-montserrat text-white text-[20px] md:text-[22px] lg:text-[24px] font-semibold leading-[125%]'
                  >
                    {item.title}
                  </h1>
                </div>
              </div>
            </NavLink>
          ))
        }
      </div>
    </div>
  )
}

export default BlogCards;