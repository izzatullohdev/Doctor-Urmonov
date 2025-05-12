import React from 'react';
import { useAppContext } from '../context/AppContext';

const HomeCards = () => {
  const { UsluguData } = useAppContext();
  return (
    <div className='max-w-7xl mx-auto max-md:px-4 my-20'>
        <h1 title='Перечень услуг' className='text-[#1F2A42] text-[48px] font-poppins font-bold leading-[140%] text-center'>Перечень услуг</h1>
        <div className="max-w-7xl mx-auto grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 max-xl:grid-cols-2 mt-16 gap-4">
            {
                UsluguData?.map((item) => (
                    <div key={item.id} className='bg-[#E7EEFE] hover:bg-[#0A0933] hover:text-white text-[#0A0933] rounded-[20px] overflow-hidden transition-all duration-400 relative p-4'>
                        <img 
                          src={item.image}
                          loading='lazy' 
                          alt={item.title}
                          className='w-full rounded-[15px]'
                        />
                        <div className="mb-16">
                            <h1 title={item.title} className='text-[20px] font-semibold leading-[140%] font-montserrat py-4'>{item.title}</h1>
                            <span className='flex flex-col gap-1'>
                                {item.description?.map((item, index)=>(
                                    <p key={index+1} className='text-[16px] font-montserrat leading-[140%]'>{item}</p>
                                ))}
                            </span>
                        </div>
                        <div className="w-[165px] h-[95px] bg-white rounded-[21px] absolute bottom-[-25px] right-[-25px]">
                            <div className="bg-[#E7EEFE] hover:bg-[#0A0933] border border-[#E7EEFE] hover:border-[#0A0933] w-[30px] h-[30px] rounded-b-3xl -rotate-45 absolute bottom-[25px] right-[165px] card-shadow"></div>
                            <div className="bg-[#E7EEFE] hover:bg-[#0A0933] border border-[#E7EEFE] hover:border-[#0A0933] w-[30px] h-[30px] rounded-b-3xl -rotate-45 absolute bottom-[25px] right-[165px] card-shadow"></div>
                            <button className='w-[125px] h-[55px] bg-[#0A6CFB] text-[20px] rounded-[10px] font-normal text-white ml-3 mt-3'>Подробно</button>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default HomeCards;