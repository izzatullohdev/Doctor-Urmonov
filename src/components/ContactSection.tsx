import { FC } from "react";
import {
  FaWhatsapp,
  FaFacebookF,
} from "react-icons/fa";
import { PiTelegramLogo, PiTelegramLogoBold } from "react-icons/pi";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { AiOutlineYoutube } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io";
import { useTranslation } from "react-i18next";

const ContactSection: FC = () => {
  const { t } = useTranslation();
  return (
    <>
    <section className="bg-[#F8F9FF] text-gray-900 px-4 md:px-10 py-10">
      <h2 title={t('global_title.contact')} className="text-center text-[#0A0933] text-[56px] font-extrabold mb-10">{t('global_title.contact')}</h2>
      <div className="max-w-7xl mx-auto flex max-md:flex-col max-md:gap-12 items-center justify-between">
        <div className="flex flex-col gap-5">
          <a
            href="https://t.me/username"
            target="_blank"
            className="w-[368px] h-[81px] flex items-center justify-center gap-7 bg-gradient-to-r from-[#00A3FF] to-[#0779FF] text-white px-5 py-3 rounded-md transition"
          >
            <p className="text-[16px] font-bold font-montserrat leading-[100%]">{t('global_title.telegram')}</p>
            <PiTelegramLogoBold size={40} />
          </a>
          <a
            href="https://wa.me/998770002626"
            target="_blank"
            className="w-[368px] h-[81px] flex items-center justify-center gap-7 bg-gradient-to-r from-[#42D85D] to-[#05B529] text-white px-5 py-3 rounded-md transition"
          >
            <p className="text-[16px] font-bold font-montserrat leading-[100%]">{t('global_title.whatsup')}</p>
            <FaWhatsapp size={40} />
          </a>
          <div className="w-[368px] flex justify-between items-center mt-5">
            <div className="flex items-center gap-3">
              <FiPhoneCall size={28}/>
              <p className="font-montserrat text-[#0A0933] flex flex-col items-start text-[13px] leading-[20px]"><span className="font-bold">{t('global_title.phone')}</span>+998770002626</p>
            </div>
            <div className="flex items-center gap-3">
              <MdOutlineEmail size={32}/>
              <p className="font-montserrat text-[#0A0933] flex flex-col items-start text-[13px] leading-[20px]"><span className="font-bold">{t('global_title.email')}</span>Dr_urmonov@mail.ru</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <SlLocationPin size={28}/>
            <p className="font-montserrat text-[#0A0933] flex flex-col items-start text-[13px] leading-[20px]"><span className="font-bold">{t('global_title.location')}</span>Tashkent, yangi Tosh MI</p>
          </div>
        </div>
        <div className="w-[65%] max-md:w-full h-[340px] rounded-[14px] overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://maps.google.com/maps?q=Tashkent&t=&z=13&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-gray-300 my-14"></div>
      <footer className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <h1 title="Doctor Urmonov" className="text-[46px] font-poppins font-bold leading-[102%] mb-4">Doctor Urmonov</h1>
          <div className="flex items-center gap-3">
            <FaFacebookF size={35} className="bg-white p-1 text-[#0A0933] hover:text-blue-600 cursor-pointer transition-all duration-300" />
            <IoLogoInstagram size={42} className="bg-white p-1 text-[#0A0933] hover:text-pink-500 cursor-pointer transition-all duration-300" />
            <PiTelegramLogo size={38} className="bg-white p-1 text-[#0A0933] hover:text-sky-500 cursor-pointer transition-all duration-300" />
            <FaWhatsapp size={38} className="bg-white p-1 text-[#0A0933] hover:text-green-500 cursor-pointer transitio-all duration-300n" />
            <AiOutlineYoutube size={43} className="bg-white p-1 text-[#0A0933] hover:text-red-600 cursor-pointer transition-all duration-300" />
          </div>
        </div>
        <div className="text-[#0A0933] font-montserrat">
          <h4 title={t('footer.date')} className="text-[16px] font-bold mb-2">{t('footer.date')}</h4>
          <p className="flex flex-col gap-2 mt-4">
            <span className="font-medium">{t('footer.month')}</span>
            <span>09:00 - 18:00</span>
          </p>
          <p className="flex flex-col gap-2 mt-4">
            <span className="font-medium">{t('footer.hours')}</span>
            <span>10:00 - 16:00</span>
          </p>
        </div>
        <div className="text-[#0A0933] font-montserrat">
          <h4 title={t('footer.menu')} className="text-[16px] font-bold text-[#0A0933] font-montserrat mb-4">{t('footer.menu')}</h4>
          <ul className="space-y-1">
            <li>{t('footer.home')}</li>
            <li>{t('footer.about')}</li>
            <li>{t('footer.service')}</li>
            <li>{t('footer.blog')}</li>
            <li>{t('footer.media')}</li>
          </ul>
        </div>
        <div className="text-[#0A0933] font-montserrat">
          <h4 title={t('footer.address.address')} className="text-[16px] font-bold text-[#0A0933] font-montserrat mb-4">{t('footer.address.address')}</h4>
          <p className="mb-2">
            {t('footer.address.title')}
          </p>
          <div className="flex items-center gap-5 mt-4">
            <div className="flex items-center gap-3">
              <FiPhoneCall size={18}/>
              <p className="font-montserrat text-[#0A0933] flex flex-col items-start text-[10px] leading-[14px]"><span className="font-bold">{t('global_title.phone')}</span>+998770002626</p>
            </div>
            <div className="flex items-center gap-3">
              <MdOutlineEmail size={18}/>
              <p className="font-montserrat text-[#0A0933] flex flex-col items-start text-[10px] leading-[14px]"><span className="font-bold">{t('global_title.email')}</span>Dr_urmonov@mail.ru</p>
            </div>
          </div>
        </div>
      </footer>
    </section>
    <div className="w-full bg-[#F5F8FF] mt-20 py-10">
      <p className="text-center text-[#454745] text-[14px] leading-[14px] font-montserrat">
        © {t('footer.address.desc')}
      </p>
    </div>
    </>
  );
};

export default ContactSection;
