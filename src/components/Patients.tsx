import { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';

const Patients = () => {
  const { PatientData } = useAppContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className='max-w-7xl mx-auto bg-[#E7EEFE] rounded-[30px] my-20 px-20 max-md:px-10 p-10'>
        <h1 title='Отзывы пациентов' className='text-[#1F2A42] text-[48px] font-montserrat font-medium leading-[120%]'>Отзывы пациентов</h1>
        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-y-10 gap-x-16 mt-10">
          {
            PatientData?.map((item) => (
              <div key={item.id} className='bg-white rounded-[20px] p-2'>
                <div className="flex items-center gap-5 mb-5">
                  <img src={item.image} alt={item.description} />
                  <h1 title={item.title} className='text-[#0A0933] text-[24px] font-bold font-poppins'>{item.title}</h1>
                </div>
                <p className='text-[#0A0933] text-[18px] font-normal font-montserrat'>{item.description}</p>
              </div>
            ))
          }
        </div>
        <div className="flex items-center justify-center mt-16">
          <button
            className='bg-[#0A6CFB] rounded-[5px] text-[20px] font-montserrat font-medium text-white cursor-pointer px-12 py-4'
            onClick={() => setIsModalOpen(true)}
          >
            Оставить отзыв
          </button>
        </div>
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
  );
};

export default Patients;