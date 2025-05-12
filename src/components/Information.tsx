import { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { motion, AnimatePresence } from 'framer-motion';

interface InfoItem {
  id: number;
  title: string;
  description: string;
}

const Information = () => {
  const { InfoData }: { InfoData: InfoItem[] } = useAppContext();
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleDescription = (id: number) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <div className='max-w-7xl mx-auto my-20 max-md:px-4'>
      <h1 title='Часто задаваемые вопросы' className='text-[48px] leading-[140%] font-semibold text-center'>
        Часто задаваемые вопросы
      </h1>
      <div className="flex flex-col items-center justify-center gap-4 px-24 max-md:px-0 mt-10">
        {
          InfoData?.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className='w-full bg-[#1F2A42] rounded-[10px]'>
                <div className='flex items-center justify-between p-5'>
                  <h1 title={item.title} className='text-[24px] leading-[140%] font-medium text-white w-[90%]'>
                    {item.id}. {item.title}
                  </h1>
                  <button 
                    onClick={() => toggleDescription(item.id)} 
                    className='w-[30px] h-[30px] bg-white flex items-center justify-center rounded-full'
                  >
                    {isOpen ? (
                      <IoIosArrowDown size={18} className='text-[#1F2A42]' />
                    ) : (
                      <IoIosArrowForward size={18} className='text-[#1F2A42]' />
                    )}
                  </button>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      className='bg-[#F5F8FF] text-[#0A0933] font-normal font-montserrat text-[20px] rounded-b-[8px] leading-[140%] p-5'
                    >
                      {item.description}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })
        }
      </div>
      <div className="flex items-center justify-center mt-12 mb-5">
        <button className='bg-[#0A6CFB] rounded-[5px] text-[20px] font-montserrat font-medium text-white px-12 py-3'>Остались вопросы?  Напишите нам!</button>
      </div>
    </div>
  );
};

export default Information;