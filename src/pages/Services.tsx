import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
const Elementary = React.lazy(() => import('../components/Elementary'));

const Services = () => {
  const { serviceData } = useAppContext();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDesc = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className=''>
      <Elementary />
      <div className="max-w-7xl mx-auto flex items-start justify-start max-lg:flex-col gap-10 mb-52 max-lg:px-4">
        <div className='w-[65%] max-lg:w-full bg-[#F5F8FF] rounded-[20px]'>
          {serviceData?.map((item) => (
            <div key={item.id} className="p-4">
              <img
                src={item.image}
                alt={item.title}
                loading='lazy'
                className="w-full rounded-[10px]"
              />
              <h1 className='text-[32px] font-montserrat font-medium text-[#0A0933] leading-[140%] mt-7 my-3'>{item.title}</h1>
              <div className="flex flex-col gap-2">
                {item.description?.map((desc, index) => (
                  <h3 key={index} className='text-[#0A0933] text-[20px] leading-[140%] font-normal font-montserrat'>{desc}</h3>
                ))}
              </div>
              <div className="flex flex-col mt-2">
                {item.full_description?.map((desc, index) => (
                  <li key={index} className='text-[#0A0933] text-[20px] leading-[140%] font-normal font-montserrat'>{desc}</li>
                ))}
              </div>
              <li className='text-[#0A0933] text-[20px] leading-[140%] font-extrabold font-montserrat'>{item.big_title}</li>
              <div>
                {item.full_description_2?.map((desc, index) => (
                  <li key={index} className='text-[#0A0933] text-[20px] leading-[140%] font-normal font-montserrat'>{desc}</li>
                ))}
              </div>
              <p className='text-[#0A0933] text-[20px] leading-[140%] font-normal font-montserrat mb-5 mt-1'>{item.sub_description}</p>
            </div>
          ))}
        </div>
        <div className='w-[35%] max-lg:w-full'>
          {serviceData?.map((item) => (
            <div key={item.id} className='flex flex-col gap-4'>
              {item.desc_title?.map((title, index) => (
                <div key={index} className="bg-[#F5F8FF] rounded-[10px] flex flex-col overflow-hidden">
                  <button
                    onClick={() => toggleDesc(index)}
                    className="w-full flex justify-between items-center px-5 py-3"
                  >
                    <p className="w-[70%] text-[18px] leading-[140%] font-montserrat font-medium text-start">
                      {title}
                    </p>
                    <span className='bg-white w-[30px] h-[30px] rounded-full flex justify-center items-center'>
                      <MdKeyboardArrowRight
                        size={23}
                        className={`text-[#0A6CFB] transition-transform duration-300 ${openIndex === index ? 'rotate-90' : ''}`}
                      />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {openIndex === index && item.desc?.[index] && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="px-5 pb-3 text-[16px] leading-[140%] font-montserrat font-normal overflow-hidden"
                      >
                        {item.desc[index]}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;