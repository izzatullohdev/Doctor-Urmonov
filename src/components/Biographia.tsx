import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

interface bioTypes {
  description_uz: string;
  description_ru: string;
  description_en: string;
}

interface bioTypes {
  title_uz: string;
  title_ru: string;
  title_en: string;
  image: string;
  description_uz: string;
  description_ru: string;
  description_en: string;
  experience: string;
}

const Biographia = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const isAboutPage = location.pathname === "/about";
  const [bioData, setBioData] = useState<bioTypes | null>(null);
  const [bio, setBio] = useState<bioTypes | null>(null);
  const _api = import.meta.env.VITE_API;
  
  useEffect(() => {
    fetch(`${_api}/about-us/`)
      .then(res => res.json())
      .then(data => {
        setBioData(data);
      })
      .catch(err => {
         console.error("ma'lumotlarni olishda xatolik:", err);
      });
  }, []);

  useEffect(() => {
      fetch(`${_api}/biography/`)
        .then(res => res.json())
        .then(data => {
          setBio(data);
          console.log(data);
        })
        .catch(err => {
           console.error("ma'lumotlarni olishda xatolik:", err);
        });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 flex max-lg:flex-col items-center justify-between gap-10 my-20">
      {/* salom */}
      <div className="w-2xl max-sm:w-[360px] max-md:w-lg relative">
        <img 
          src={`https://urmonov.novacode.uz/${bio?.image}`}
          alt={
                i18n.language === "uz"
                ? bio?.title_uz
                : i18n.language === "ru"
                ? bio?.title_ru
                : bio?.title_en
              } 
          className="object-contain rounded-xl"
        />
        <div className="bg-white w-[46.5%] max-sm:w-[48%] max-md:w-[47.7%] max-lg:w-[45.5%] h-[22%] flex items-end justify-start rounded-xl absolute bottom-0 left-0 pt-2 pr-2">
          <button className="w-full h-full bg-[#0A6CFB] rounded-[10px] text-white flex items-center gap-3 font-montserrat p-1">
            <h3 
              title={bio?.experience}
              className="font-semibold text-[35px] max-sm:text-[25px] max-md:text-[28px] max-lg:text-[30px]"
            >
              {bio?.experience}+
            </h3>
            <span className="flex flex-col items-start">
              <h4 title="Летний" className="text-[30px] max-sm:text-[15px] max-md:text-[18px] max-lg:text-[25px] font-semibold font-montserrat">{t('bio.sub_title')}</h4>
              <p className="text-[18px] max-sm:text-[12px] max-md:text-[14px] max-lg:text-[18px] font-montserrat">{t('bio.sub_desc')}</p>
            </span>
          </button>
          <div className="bio-img-1 bg-transparent w-[35px] h-[30px] absolute top-[-30px] left-0"></div>
          <div className="bio-img-2 bg-transparent w-[35px] h-[30px] absolute bottom-[0] right-[-35px]"></div>
        </div>
      </div>
      {/* alik */}
      <div className="w-full lg:w-[45%] flex flex-col items-start gap-5">
        {isAboutPage ? (
          <>
            <h1 
              title={t('bio.title')} 
              className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] leading-[140%] font-montserrat font-semibold text-[#0A0933]"
            >
              {t('bio.title')}
            </h1>
            <div
              className="text-[16px] sm:text-[18px] md:text-[20px] font-medium font-montserrat leading-[140%] text-[#454745]"
              dangerouslySetInnerHTML={{
                __html:
                  i18n.language === "uz"
                    ? bioData?.description_uz || ""
                    : i18n.language === "ru"
                    ? bioData?.description_ru || ""
                    : bioData?.description_en || ""
              }}
            ></div>
          </>
        ) : (
          <>
            <h1 
              title={
                  i18n.language === "uz"
                  ? bio?.title_uz
                  : i18n.language === "ru"
                  ? bio?.title_ru
                  : bio?.title_en
                }
              className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] leading-[140%] font-montserrat font-semibold text-[#0A0933]"
            >
              {
                i18n.language === "uz"
                ? bio?.title_uz
                : i18n.language === "ru"
                ? bio?.title_ru
                : bio?.title_en
              }
            </h1>
            <div
              className="text-[18px] sm:text-[20px] md:text-[22px] font-medium font-montserrat leading-[140%] text-[#454745]"
              dangerouslySetInnerHTML={{
                __html:
                  i18n.language === "uz"
                    ? bio?.description_uz || ""
                    : i18n.language === "ru"
                    ? bio?.description_ru || ""
                    : bio?.description_en || ""
              }}
            ></div>
            <NavLink 
              to='/about' 
              className="bg-[#0A6CFB33] text-[#0A6CFB] font-poppins font-semibold text-[18px] sm:text-[20px] rounded-[5px] px-8 sm:px-10 py-2.5 sm:py-3 transition-all duration-300 hover:bg-[#0A6CFB55]"
            >
              {t('bio.button')}
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Biographia;