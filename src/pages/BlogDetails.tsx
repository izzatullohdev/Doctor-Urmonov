import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Elementary from '../components/Elementary';
import { useTranslation } from 'react-i18next';

interface cardItem {
  uuid: string;
  title_uz: string;
  title_ru: string;
  title_en: string;
  description_uz: string;
  description_ru: string;
  description_en: string;
  image: string;
}

const BlogDetails = () => {
  const { id } = useParams();
  const { i18n } = useTranslation();
  const _api = import.meta.env.VITE_API;
  const [blog, setBlog] = useState<cardItem | null>(null);

  useEffect(() => {
    fetch(`${_api}/blog/${id}`)
      .then(res => res.json())
      .then(data => {
        setBlog(data);
      })
      .catch(err => {
         console.error("ma'lumotlarni olishda xatolik:", err);
      });
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  return (
    <>
      <Elementary />
      <div className='max-w-7xl mx-auto max-lg:px-4 bg-[#F5F8FF] rounded-[30px] text-[#0A0933] font-montserrat mb-24 px-8 py-6'>
        <h1 
          title={
            i18n.language === "uz"
            ? blog?.title_uz
            : i18n.language === "ru"
            ? blog?.title_ru
            : blog?.title_en
          }  
          className='max-lg:w-[85%] text-start text-[32px] text-[#0A0933] font-semibold mb-7 my-4'
        >
          {
            i18n.language === "uz"
            ? blog?.title_uz
            : i18n.language === "ru"
            ? blog?.title_ru
            : blog?.title_en
          }
        </h1>
        <img 
          src={`https://urmonov.novacode.uz/${blog?.image}`} 
          alt={
            i18n.language === "uz"
            ? blog?.title_uz
            : i18n.language === "ru"
            ? blog?.title_ru
            : blog?.title_en
          } 
          className='w-full rounded-md mb-6' 
        />
        <div
          className="text-[20px] leading-[140%]"
          dangerouslySetInnerHTML={{
            __html:
              i18n.language === "uz"
                ? blog?.description_uz || ""
                : i18n.language === "ru"
                ? blog?.description_ru || ""
                : blog?.description_en || ""
          }}
        ></div>
      </div>
      {/* <div className="max-w-7xl mx-auto max-lg:px-4 mb-24">
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
      </div> */}
    </>
  )
}

export default BlogDetails;