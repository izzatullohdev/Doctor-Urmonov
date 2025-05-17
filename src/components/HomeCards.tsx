import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

interface cardItem {
  uuid: string;
  title_uz: string;
  title_ru: string;
  title_en: string;
  description_uz: string;
  description_ru: string;
  description_en: string;
  image: string;
  popular: boolean;
}

const HomeCards = () => {
  const { t, i18n } = useTranslation();
  const _api = import.meta.env.VITE_API;
  const [card, setCard] = useState<cardItem[]>([]);

  useEffect(() => {
    fetch(`${_api}/services/popular/`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setCard(data.filter((item: cardItem) => item.popular));
        } else {
          setCard([]);
        }
      })
      .catch(() => setCard([]));
  }, []);

  if (card.length === 0) {
    return <div></div>;
  }

  return (
    <div className='max-w-7xl mx-auto max-md:px-4 my-20'>
      <h1 title='Перечень услуг' className='text-[#1F2A42] max-md:text-[28px] text-[48px] font-poppins font-bold leading-[140%] text-center'>
        {t('global_title.cards')}
      </h1>
      <div className="max-w-7xl mx-auto grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 max-xl:grid-cols-2 mt-16 gap-4">
        {card.map((item) => (
          <div
            key={item.uuid}
            className='group bg-[#F5F8FF] hover:bg-[#0A0933] hover:text-white text-[#0A0933] rounded-[20px] overflow-hidden transition-all duration-300 relative p-4'
          >
            <img
              src={`https://urmonov.novacode.uz/${item.image}`}
              alt={i18n.language === "uz" ? item.title_uz : i18n.language === "ru" ? item.title_ru : item.title_en}
              className='w-full h-[250px] object-cover rounded-[15px]'
            />
            <div>
              <h1
                title={i18n.language === "uz" ? item.title_uz : i18n.language === "ru" ? item.title_ru : item.title_en}
                className='text-[20px] font-semibold leading-[140%] font-montserrat py-4'
              >
                {i18n.language === "uz" ? item.title_uz : i18n.language === "ru" ? item.title_ru : item.title_en}
              </h1>
              <div
                className='w-[95%] flex flex-col text-[16px] font-montserrat leading-[140%] text-ellipsis line-clamp-9 gap-1'
                dangerouslySetInnerHTML={{
                  __html:
                    i18n.language === "uz"
                      ? item.description_uz.slice(0, 500)
                      : i18n.language === "ru"
                      ? item.description_ru.slice(0, 500)
                      : item.description_en.slice(0, 500),
                }}
              />
            </div>
            <div className="w-[165px] h-[95px] bg-white rounded-[21px] absolute bottom-[-25px] right-[-25px] transition-all duration-300">
              <div className="w-[35px] h-[35px] absolute bottom-[25px] right-[165px] bg-[#F5F8FF] border border-[#F5F8FF] card-shadow transition-all duration-300 group-hover:bg-[#0A0933] group-hover:border-[#0A0933]"></div>
              <div className="w-[35px] h-[35px] absolute bottom-[95px] right-[25px] bg-[#F5F8FF] border border-[#F5F8FF] card-shadow transition-all duration-300 group-hover:bg-[#0A0933] group-hover:border-[#0A0933]"></div>
              <NavLink to={"/services"} className='flex items-center justify-center w-[125px] h-[55px] ml-3 mt-3 rounded-[10px] text-[20px] font-normal transition-all duration-300 bg-[#0A6CFB] text-white'>
                {t('global_title.button')}
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeCards;