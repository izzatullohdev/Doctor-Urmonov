import { NavLink } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const Cards = () => {
  const { cardData } = useAppContext();

  return (
    <div className="pb-52 py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 max-xl:grid-cols-2 gap-x-4 gap-y-12">
        {
          cardData?.map((item) => (
            <div key={item.id} className="bg-[#F4F5F8] rounded-[10px] relative">
              <div className="absolute top-2 right-2 z-30 text-[#0A6CFB] bg-white rounded-[50px] font-normal font-poppins px-3 py-1">
                {item.type}
              </div>
              <img 
                src={item.image} 
                alt={item.description} 
                loading='lazy'
                className="rounded-t-[10px] w-full h-[300px] object-cover"
              />
              <div className="p-4">
                <h2 className="text-[20px] sm:text-[22px] text-[#1F2A42] font-semibold pb-3">
                  {item.title}
                </h2>
                <p className="text-[14px] sm:text-[16px] text-[#1F2A42] mb-4">
                  {item.description}
                </p>
                <NavLink to={`/card/${item.id}`} className="w-full flex justify-center rounded-[10px] bg-[#0A6CFB] text-white font-medium text-[16px] sm:text-[18px] lg:text-[20px] py-[10px] hover:bg-[#085cd6] transition-colors duration-200 mt-6">
                  {item.button}
                </NavLink>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Cards;