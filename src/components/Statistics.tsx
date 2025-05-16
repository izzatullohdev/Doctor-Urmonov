import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface imgTypes {
  image: string;
} 

interface statisTypes {
  uuid: string;
  value: string;
  title_uz: string;
  title_ru: string;
  title_en: string;
}

const Statistics = () => {
  const { t, i18n } = useTranslation();
  const [image, setImage] = useState<imgTypes | null>(null);
  const [statis, setStatis] = useState<statisTypes[] | null>(null);
  const _api = import.meta.env.VITE_API;
    
  useEffect(() => {
    fetch(`${_api}/about-us/`)
      .then(res => res.json())
      .then(data => {
        setImage(data);
      })
      .catch(err => {
         console.error("ma'lumotlarni olishda xatolik:", err);
      });
  }, []);

  useEffect(() => {
    fetch(`${_api}/statistics/`)
      .then(res => res.json())
      .then(data => {
        setStatis(data);
      })
      .catch(err => {
         console.error("ma'lumotlarni olishda xatolik:", err);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 xl:px-0">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full h-full flex justify-center">
          <img 
            src={`https://urmonov.novacode.uz/${image?.image}`}
            alt={t('about_page.general_title')}
            className="w-full max-w-[600px] rounded-3xl object-contain"
          />
        </div>
        <div className="w-full grid grid-cols-2 max-sm:grid-cols-1 gap-6">
          {
            statis?.map((item) =>(
              <div key={item.uuid} className="bg-[#F5F8FF] flex flex-col items-center justify-center rounded-[20px] text-center py-22 p-6">
                <h1 
                  title={item.value} 
                  className="text-[#0A6CFB] text-[80px] font-montserrat font-bold"
                >
                  {item.value}
                </h1>
                <p className="text-[#454745] text-[32px] font-montserrat font-semibold">
                  {
                    i18n.language === "uz"
                    ? item.title_uz
                    : i18n.language === "ru"
                    ? item.title_ru
                    : item.title_en
                  }
                </p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Statistics;