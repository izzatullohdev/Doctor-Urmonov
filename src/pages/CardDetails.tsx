import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TiArrowForwardOutline } from "react-icons/ti";
import { useTranslation } from 'react-i18next';
import Elementary from '../components/Elementary';
import { MdKeyboardArrowRight } from 'react-icons/md';

interface cardItem {
  uuid: string;
  title_uz: string;
  title_ru: string;
  title_en: string;
  description_uz: string;
  description_ru: string;
  description_en: string;
  image: string;
  date: string;
  hashtags: {
    title_uz: string;
    title_ru: string;
    title_en: string;
  }[];
}

const BlogCardDetails = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const _api = import.meta.env.VITE_API;
  const [card, setCard] = useState<cardItem | null>(null);
  const [cards, setCards] = useState<cardItem[]>([]);

  useEffect(() => {
    if (id) {
      fetch(`${_api}/new/${id}`)
        .then(res => res.json())
        .then(data => setCard(data));
    }
  }, [id]);

  useEffect(() => {
    fetch(`${_api}/news/`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setCards(data);
      });
  }, []);

  const handleCardClick = (uuid: string) => {
    fetch(`${_api}/new/${uuid}`)
      .then(res => res.json())
      .then(data => {
        setCard(data);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
  };

  return (
    <>
      <Elementary />
      <div className="max-w-7xl mx-auto flex items-start max-lg:flex-col gap-10 mb-52 py-8 max-lg:px-4">
        <div className="w-[65%] max-lg:w-full bg-[#F5F8FF] rounded-[20px] p-4">
          <img
            src={`https://urmonov.novacode.uz/${card?.image}`}
            alt={
              i18n.language === "uz"
              ? card?.title_uz
              : i18n.language === "ru"
              ? card?.title_ru
              : card?.title_en
            }
            className="w-full rounded-[10px]"
          />
          <h1 className='text-[26px] font-montserrat font-bold text-[#0A0933] leading-[140%] pt-5 py-3'>
            {
              i18n.language === "uz"
              ? card?.title_uz
              : i18n.language === "ru"
              ? card?.title_ru
              : card?.title_en
            }
          </h1>
          <div
            className="text-[20px] leading-[140%]"
            dangerouslySetInnerHTML={{
              __html:
                i18n.language === "uz"
                ? card?.description_uz || ""
                : i18n.language === "ru"
                ? card?.description_ru || ""
                : card?.description_en || ""
            }}
          ></div>
          <div className="flex justify-between items-end max-md:flex-col max-md:items-start max-md:gap-2">
            <div className="w-[50%] flex items-center gap-3 flex-wrap max-md:mt-8">
              {card?.hashtags.map((item, index) => (
                <p key={index} className='text-[#0A6CFB] text-[14px]'>
                  {
                    i18n.language === "uz"
                    ? item.title_uz
                    : i18n.language === "ru"
                    ? item.title_ru
                    : item.title_en
                  }
                </p>
              ))}
            </div>
            <div className="flex items-center max-md:w-full max-md:justify-between gap-2 text-[18px] font-montserrat font-normal text-[#454745] mt-10 max-md:mt-5">
              <p className='border-r-2 border-[#E1E1E1] max-md:border-none pr-4'>{card?.date}</p>
              <button className='text-[#0A6CFB] flex items-center gap-1'>
                <span className='font-normal text-[18px]'>{t('global_title.share')}</span>
                <TiArrowForwardOutline className='text-[19px] mb-[2px]'/>
              </button>
            </div>
          </div>
        </div>
        <div className="w-[35%] flex flex-col gap-3 max-lg:w-full">
          {cards.map((item) => (
            <div
              key={item.uuid} 
              className="bg-[#F5F8FF] rounded-[10px] flex flex-col cursor-pointer"
            >
              <button
                onClick={() => handleCardClick(item.uuid)}
                className="flex justify-between items-center px-5 py-3 focus:outline-none"
              >
                <p className="w-[70%] text-[18px] leading-[140%] font-montserrat font-medium text-start">
                  {
                    i18n.language === "uz"
                    ? item.title_uz
                    : i18n.language === "ru"
                    ? item.title_ru
                    : item.title_en
                  }
                </p>
                <span className='bg-white w-[30px] h-[30px] rounded-full flex justify-center items-center'>
                  <MdKeyboardArrowRight
                    size={23}
                    className={`text-[#0A6CFB] transition-transform duration-300`}
                  />
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogCardDetails;