import { useTranslation } from 'react-i18next';
import { useAppContext } from '../context/AppContext';

const HomeCards = () => {
  const { UsluguData } = useAppContext();
  const { t } = useTranslation();

  return (
    <div className='max-w-7xl mx-auto max-md:px-4 my-20'>
      <h1 title='Перечень услуг' className='text-[#1F2A42] text-[48px] font-poppins font-bold leading-[140%] text-center'>
        {t('global_title.cards')}
      </h1>
      <div className="max-w-7xl mx-auto grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 max-xl:grid-cols-2 mt-16 gap-4">
        {UsluguData?.map((item) => (
          <div
            key={item.id}
            className='group bg-[#F5F8FF] hover:bg-[#0A0933] hover:text-white text-[#0A0933] rounded-[20px] overflow-hidden transition-all duration-300 relative p-4'
          >
            <img
              src={item.image}
              loading='lazy'
              alt={item.title}
              className='w-full rounded-[15px]'
            />
            <div className="">
              <h1 title={item.title} className='text-[20px] font-semibold leading-[140%] font-montserrat py-4'>
                {item.title}
              </h1>
              <span className='w-[95%] flex flex-col gap-1'>
                {item.description?.map((desc, index) => (
                  <p key={index} className='text-[16px] font-montserrat leading-[140%]'>
                    {desc}
                  </p>
                ))}
              </span>
            </div>
            <div className="w-[165px] h-[95px] bg-white rounded-[21px] absolute bottom-[-25px] right-[-25px] transition-all duration-300">
              <div className="
                w-[35px] h-[35px] absolute bottom-[25px] right-[165px] 
                bg-[#F5F8FF] border border-[#F5F8FF] card-shadow 
                transition-all duration-300 
                group-hover:bg-[#0A0933] group-hover:border-[#0A0933]
              "></div>
              <div className="
                w-[35px] h-[35px] absolute bottom-[95px] right-[25px] 
                bg-[#F5F8FF] border border-[#F5F8FF] card-shadow 
                transition-all duration-300 
                group-hover:bg-[#0A0933] group-hover:border-[#0A0933]
              "></div>
              <button className='
                w-[125px] h-[55px] ml-3 mt-3 rounded-[10px] text-[20px] font-normal 
                transition-all duration-300 
                bg-[#0A6CFB] text-white
              '>
                {t('global_title.button')}
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeCards;