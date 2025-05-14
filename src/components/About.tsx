// import images 
import bg from "../assets/bg.png";
import urmonov from "../assets/urmonov.png";

import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const About = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className='bg-[#F5F8FF] mt-[300px] my-20 max-xl:px-4 max-sm:px-0 max-md:hidden'>
          <div className="max-w-7xl mx-auto max-md:px-4 max-sm:px-0 flex max-md:flex-col items-center justify-between relative pt-12 pb-18">
              <div className="w-[58%]">
                  <h1 title={t('about.title')} className='font-bold text-[#0A0933] font-poppins text-[75px] leading-[140%] relative z-20'>{t('about.title')}</h1>
                  <p className='text-[#0A0933] text-[36px] max-xl:text-[20px] max-md:text-[14px] max-sm:text-[10px] font-montserrat font-medium relative z-20 my-5 mb-10'>{t('about.desc')}</p>
                  <button 
                    onClick={() => setIsModalOpen(true)} 
                    className='cursor-pointer bg-[#0A6CFB] rounded-[5px] text-[20px] max-md:text-[15px] max-sm:text-[10px] font-montserrat font-medium relative z-20 text-white px-8 py-5'
                  >{t('about.button')}</button>
              </div>
              <img 
                src={bg} 
                loading="lazy"
                alt={t('about.desc')} 
                className="h-full absolute top-0 left-0"
              />
              <div className="h-[110%] absolute bottom-0 right-0">
                  <img 
                    src={urmonov}
                    loading="lazy" 
                    alt={t('about.desc')} 
                    className="h-full relative"
                  />
              </div>
          </div>
      </div>
      <div className="md:hidden max-lg:mt-[200px] flex flex-col bg-[#F5F8FF] relative pt-8 px-4">
        <img 
          src="https://res.cloudinary.com/dmgcfv5f4/image/upload/v1747205024/Group_2_qx3zt1.png" 
          loading="lazy"
          alt={t('about.desc')} 
          className="w-full h-full absolute top-0 left-0 "
        />
        <h1 title='Урмонов Умиджон Бутабекович' className='relative font-bold text-[#0A0933] font-poppins text-[36px] leading-[140%]'>{t('about.title')}</h1>
        <p className='relative text-[#0A0933] text-[18px] font-montserrat font-medium my-4'>{t('about.desc')}</p>
        <img 
          src="https://res.cloudinary.com/dmgcfv5f4/image/upload/v1747204776/IMG_0904_2_2_zx90fa.png" 
          loading="lazy"
          alt={t('about.desc')} 
          className="relative mb-16"
        />
        <button 
          className="w-[92%] flex items-center justify-center bg-[#0A6CFB] rounded-[5px] text-[20px] font-montserrat font-medium absolute bottom-0 text-white py-5"
          onClick={() => setIsModalOpen(true)}
        >{t('about.button')}</button>
      </div>
      <AnimatePresence>
              {isModalOpen && (
                <motion.div
                  className="w-screen h-screen bg-[#0000004d] flex items-center justify-center fixed left-0 top-0 z-50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsModalOpen(false)}
                >
                  <motion.div
                    className="w-3xl max-md:w-[80vw] h-[50%] max-md:h-[90%] bg-[#F5F8FF] rounded-xl overflow-y-auto relative flex items-center justify-center p-5"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex flex-col items-center mt-5">
                      <h1 title='Записаться на приём' className='font-semibold text-[#0A0933] font-montserrat text-[32px]'>Записаться на приём</h1>
                      <form action="" className='w-lg rounded-[10px] flex flex-col gap-5 p-5'>
                        <input type="text" placeholder='Имя' className='outline-none text-[#454745] placeholder:text-[#454745] rounded-[5px] bg-white border border-[#0A6CFB] px-5 py-4'/>
                        <input type="text" placeholder='Телефон' className='outline-none text-[#454745] placeholder:text-[#454745] rounded-[5px] bg-white border border-[#0A6CFB] px-5 py-4'/>
                        <input type="text" placeholder='Сообшение' className='outline-none text-[#454745] placeholder:text-[#454745] rounded-[5px] bg-white border border-[#0A6CFB] py-8 px-5'/>
                        <button className='text-white bg-[#0A6CFB] rounded-[5px] text-[16px] font-montserrat font-medium py-4'>Отправить</button>
                      </form>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
    </>
  )
}

export default About;