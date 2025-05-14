import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Elementary from '../components/Elementary';

const BlogDetails = () => {
  const { id } = useParams();
  const { BlogData } = useAppContext();

  useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const blog = BlogData?.find(item => String(item.id) === id);

  if (!blog) {
    return <div className="text-center mt-10">Blog topilmadi 😕</div>;
  }

  return (
    <>
      <Elementary />
      <div className='max-w-7xl mx-auto max-lg:px-4 bg-[#F5F8FF] rounded-[30px] text-[#0A0933] font-montserrat mb-24 px-8 py-6'>
        <h1 title={blog.general_title} className='max-lg:w-[85%] text-start text-[32px] text-[#0A0933] font-semibold mb-4'>{blog.general_title}</h1>
        <img 
          src={blog.general_image} 
          alt={blog.general_title} 
          className='w-full rounded-md mb-6' 
        />
        <p className='text-[20px] leading-[140%]'>
          {blog.description || "Hozircha bu blog haqida batafsil ma'lumot yo'q."}
        </p>
        <p className='text-[24px] font-medium leading-[140%] mt-6 mb-3'>{blog.sub_title}</p>
        <div className="">
            {
                blog.sub_description?.map((item, index) => (
                    <p key={index+1} className='text-[20px] leading-[140%]'>{item}</p>
                ))
            }
        </div>
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-6 mt-6">
            {
                blog.helper_image?.map((item, index) =>(
                    <img 
                      key={index+1}
                      src={item}
                      loading='lazy' 
                      alt={blog.sub_title}
                    />
                ))
            }
        </div>
        <p className='text-[20px] leading-[140%] my-8'>{blog.helper_title}</p>
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-6 mt-6">
            {
                blog.helper_image_two?.map((item, index) =>(
                    <img 
                      key={index+1}
                      src={item}
                      loading='lazy' 
                      alt={blog.sub_title}
                    />
                ))
            }
        </div>
      </div>
      <div className="max-w-7xl mx-auto max-lg:px-4 mb-24">
        <h1 title='Похожие блоги' className='text-[#000000] text-[32px] font-montserrat font-semibold leading-[140%] mb-6'>Похожие блоги</h1>
        <Swiper
          style={{ width: '100%' }}
          slidesPerView={4}
          spaceBetween={20}
          loop={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
        >
            {
                BlogData?.map((item) =>(
                    <SwiperSlide key={item.id} className='rounded-[10px] overflow-hidden relative group shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer'>
                        <img 
                          src={item.image}
                          loading='lazy' 
                          alt={item.title} 
                          className='w-full object-contain group-hover:scale-105 transition-transform duration-300 ease-in-out'
                        />
                        <div className="w-full absolute bottom-0 left-0 p-4">
                          <h1 
                            title={item.title} 
                            className='text-start font-montserrat text-white text-[22px] md:text-[18px] lg:text-[20px] font-semibold leading-[125%]'
                          >
                            {item.title}
                          </h1>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
      </div>
    </>
  )
}

export default BlogDetails;