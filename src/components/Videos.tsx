import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface VideoItem {
  id: number;
  video: string;
  title: string;
}

const Videos: React.FC = () => {
  const { t } = useTranslation();

  const videos: VideoItem[] = [
    {
      id: 1,
      video: "https://youtu.be/4hF4AdV4AKc?si=CYp9criB2aaGYNbt",
      title: "Ракдан қутилган аёл. Сиз ҳам эшитинг!!!",
    },
    {
      id: 2,
      video: "https://youtu.be/QiMCraoEeCU?si=chxgfidpWCy4Phlh",
      title: "Onkologik bemorda faqat 1 marta shans bo‘ladi",
    },
    {
      id: 3,
      video: "https://youtu.be/S_vEpRRajak?si=7o92N6ovB0lLSKtP",
      title:
        "Химиотерапия ўтказишдан мақсад ва ундан кутилaётган натижалар!",
    },
    {
      id: 4,
      video: "https://youtu.be/S_vEpRRajak?si=7o92N6ovB0lLSKtP",
      title:
        "Химиотерапия ўтказишдан мақсад ва ундан кутилaётган натижалар!",
    },
  ];

  const extractVideoId = (url: string): string => {
    const regex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/;
    const match = url.match(regex);
    return match ? match[1] : "";
  };

  return (
    <div className="max-w-7xl mx-auto my-20 px-4">
      <h1 title={t('global_title.videos')} className="text-[#0A0933] text-[36px] md:text-[48px] font-semibold text-center mb-10">
        {t('global_title.videos')}
      </h1>
      <div className="bg-[#181818] rounded-[10px] p-5">
      <Swiper
        style={{ width: '100%' }} 
        slidesPerView={3} 
        spaceBetween={20} 
        loop={false}
        autoplay={{      
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {      
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {videos.map((item) => {
          const videoId = extractVideoId(item.video);
          return (
            <SwiperSlide
              key={item.id}
              className="bg-[#181818] rounded-[10px] overflow-hidden text-white shadow-lg"
            >
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  className="w-full h-full rounded-[10px] overflow-contain"
                  allowFullScreen
                ></iframe>
                <h1 title={item.title} className='font-semibold mt-4 px-1'>{item.title}</h1>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      </div>
    </div>
  );
};

export default Videos;