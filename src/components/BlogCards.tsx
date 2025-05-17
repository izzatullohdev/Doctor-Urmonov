import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
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
}

const BlogCards = () => {
  const { i18n } = useTranslation();
  const _api = import.meta.env.VITE_API;
  const [card, setCard] = useState<cardItem[]>([]);
    
  useEffect(() => {
    fetch(`${_api}/blogs/`)
      .then((res) => res.json())
      .then((data) => {
         if (Array.isArray(data)) {
          setCard(data);
        } else {
           setCard([]);
        }
       })
      .catch((err) => {
        console.error("Ma'lumotlarni olishda xatolik:", err);
       });
  }, []);

  return (
    <div className='max-w-7xl mx-auto px-4 mb-26'>
      <div className="grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 gap-y-6 gap-x-4">
        {
          card?.map((item) => (
            <NavLink to={`/blog/${item.uuid}`} key={item.uuid}>
              <div className='rounded-[10px] overflow-hidden relative group duration-300 ease-in-out cursor-pointer'>
                <img 
                  src={`https://urmonov.novacode.uz/${item.image}`}
                  alt={i18n.language === "uz"
                    ? item.title_uz
                    : i18n.language === "ru"
                    ? item.title_ru
                    : item.title_en
                  }  
                  className='w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out'
                />
                <div className="w-full absolute bottom-0 left-0 px-4 py-2">
                  <h1 
                    title={
                      i18n.language === "uz"
                      ? item.title_uz
                      : i18n.language === "ru"
                      ? item.title_ru
                      : item.title_en
                    }  
                    className='text-white text-[20px] font-semibold text-start'
                  >
                    {
                      i18n.language === "uz"
                      ? item.title_uz
                      : i18n.language === "ru"
                      ? item.title_ru
                      : item.title_en
                    }
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