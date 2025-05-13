import { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { IoMdClose } from "react-icons/io";
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
          >
            <motion.div
              className="w-4xl max-md:w-[80vw] h-[60%] max-md:h-[90%] bg-white rounded-xl overflow-y-auto relative p-5"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <IoMdClose
                size={28}
                className='absolute cursor-pointer text-gray-700 right-4 top-4 z-[999]'
                onClick={() => setIsModalOpen(false)}
              />
              <div className="flex flex-col items-center mt-10">
                <h1 title='Отзывы пациентов' className='font-semibold text-[#0A0933] font-montserrat text-4xl'>Отзывы пациентов</h1>
                <form action="" className='w-xl rounded-[10px] shadow flex flex-col mt-10 p-5'>
                  <input type="text" />
                  <input type="text" />
                  <input type="text" />
                  <button></button>
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