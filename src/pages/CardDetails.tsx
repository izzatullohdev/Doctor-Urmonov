import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import type { CardTypes } from '../types';
import { TiArrowForwardOutline } from "react-icons/ti";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useTranslation } from 'react-i18next';
import Elementary from '../components/Elementary';

const BlogCardDetails = () => {
  const { id } = useParams();
  const { cardData } = useAppContext();

  const  { t } = useTranslation();

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  const toggleDescription = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const card: CardTypes | undefined = cardData?.find(
    (item) => item.id.toString() === id
  );

  if (!card) return <div className='text-center py-5'>Ma'lumot topilmadi 😕</div>;

  return (
    <>
      <Elementary />
      <div className="max-w-7xl mx-auto flex items-start max-lg:flex-col gap-10 mb-52 py-8 max-lg:px-4">
        <div className="w-[65%] max-lg:w-full bg-[#F5F8FF] relative rounded-[20px] p-4">
          <div className="absolute top-6 right-6 z-30 text-[#0A6CFB] bg-white rounded-[50px] font-normal font-poppins px-3 py-1">
            {card.type}
          </div>
          <img
            src={card.big_image}
            alt={card.description}
            className="w-full rounded-[10px]"
          />
          <div className="grid grid-cols-3 gap-x-4 gap-y-4 py-4 px-1">
            {card.images?.slice(0, 3).map((img: string, index: number) => (
              <img
                key={index}
                src={img}
                alt={`Gallery image ${index + 1}`}
                className="w-full rounded-[10px]"
              />
            ))}
          </div>
          <h1 title={card.full_title} className='text-[26px] font-montserrat font-medium text-[#0A0933] leading-[140%]'>{card.full_title}</h1>
          <div className="text-[#0A0933] text-[20px] leading-[140%] font-normal font-montserrat flex flex-col gap-1 mt-2">
            {
              card.full_description?.map((item, index) => (
                <h3 key={index} title={item}>{item}</h3>
              ))
            }
          </div>
          <div className='text-[#0A0933] text-[20px] leading-[140%] font-normal font-montserrat flex flex-col gap-1'>
            {
              card.full_description_2?.map((item, index) => (
                <li key={index}>{item}</li>
              ))
            }
          </div>
          <div className="flex justify-between items-end max-md:flex-col max-md:items-start max-md:gap-2">
            <div className="w-[50%] flex items-center gap-3">
              {
                card.category?.map((item) => (
                  <p key={item} className='text-[#0A6CFB] text-[14px] '>{item}</p>
                ))
              }
            </div>
            <div className="flex items-center gap-2 text-[18px] font-montserrat font-normal text-[#454745] mt-12">
              <p className='border-r-2 border-[#E1E1E1] pr-4'>{card.date}</p>
              <button className='text-[#0A6CFB] flex items-center gap-1'>
                <span className='font-normal text-[18px]'>{t('global_title.share')}</span>
                <TiArrowForwardOutline className='text-[19px] mb-[2px]' />
              </button>
            </div>
          </div>
        </div>
        <div className="w-[35%] flex flex-col gap-4 max-lg:w-full">
          {card.sub_title?.map((item, index) => (
            <div key={index} className="bg-[#F5F8FF] rounded-[10px] flex flex-col">
              <button
                onClick={() => toggleDescription(index)}
                className="flex justify-between items-center px-5 py-3 focus:outline-none"
              >
                <p className="w-[70%] text-[18px] leading-[140%] font-montserrat font-medium text-start">{item}</p>
                <span className='bg-white w-[30px] h-[30px] rounded-full flex justify-center items-center'>
                  <MdKeyboardArrowRight
                    size={23}
                    className={`text-[#0A6CFB] transition-transform duration-300 ${openIndex === index ? "rotate-90" : ""}`}
                  />
                </span>
              </button>
              {openIndex === index && card.sub_description?.[index] && (
                <div className={`px-5 pb-3 text-[16px] leading-[140%] font-montserrat font-normal transition-all duration-500 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  {card.sub_description[index]}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogCardDetails;
