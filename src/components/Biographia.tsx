import { NavLink, useLocation } from "react-router-dom";
import subtract from "../assets/subtrack.png";
import { useTranslation } from "react-i18next";

const Biographia = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const isAboutPage = location.pathname === "/about";

  return (
    <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-10 my-20">
      <div className="w-full md:w-[48%] relative">
        <img 
          src={subtract}
          loading="lazy" 
          alt="Биография" 
          className="w-full h-auto object-contain rounded-xl"
        />
        <div className="w-[48%] h-[22%] flex items-end justify-start absolute bottom-0 left-0 pt-2 pr-2">
          <button className="w-full h-full bg-[#0A6CFB] rounded-[10px] text-white flex items-center gap-3 font-montserrat p-1">
            <h3 title="13+" className="font-semibold text-[24px] sm:text-[28px] md:text-[30px] lg:text-[32px]">13+</h3>
            <span className="flex flex-col items-start">
              <h4 title="Летний" className="font-medium text-[16px] sm:text-[22px] md:text-[18px] lg:text-[24px]">{t('bio.sub_title')}</h4>
              <p className="text-[10px] sm:text-[14px] md:text-[10px] lg:text-[16px]">{t('bio.sub_desc')}</p>
            </span>
          </button>
        </div>
      </div>
      <div className="w-full md:w-[45%] flex flex-col items-start gap-5">
        {isAboutPage ? (
          <>
            <h1 
              title={t('bio.title')} 
              className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] leading-[140%] font-montserrat font-semibold text-[#0A0933]"
            >
              {t('bio.title')}
            </h1>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-medium font-montserrat leading-[140%] text-[#454745]">
              {t('bio.desc_2')}
            </p>
          </>
        ) : (
          <>
            <h1 
              title={t('bio.title')} 
              className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] leading-[140%] font-montserrat font-semibold text-[#0A0933]"
            >
              {t('bio.title')}
            </h1>
            <p className="text-[18px] sm:text-[20px] md:text-[22px] font-medium font-montserrat leading-[140%] text-[#454745]">
              {t('bio.desc')}
            </p>
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