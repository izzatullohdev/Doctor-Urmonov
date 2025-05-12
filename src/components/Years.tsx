import { useAppContext } from "../context/AppContext";

const Years = () => {
  const { YearsData } = useAppContext();

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 xl:px-0 py-20 relative">
      <div className="flex items-center justify-center mb-28">
        <h1
          title="Хронология профессионального пути"
          className="text-[#1F2A42] text-[32px] md:text-[48px] font-bold text-center leading-[140%] lg:w-[60%]"
        >
          Хронология профессионального пути
        </h1>
      </div>
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500 z-0"></div>
        {YearsData?.map((item, idx) => {
          const isLeft = idx % 2 === 0;
          const yearFontSize = typeof item.years === 'number' ? 'text-[36px]' : 'text-[22px] my-3';

          return (
            <div key={item.id} className="relative flex flex-col md:flex-row items-center justify-between">
              {isLeft && (
                <div className="w-full md:w-5/10 flex justify-end md:pr-1 z-10">
                  <div className="rounded-lg w-full">
                    <h2 className={`text-[#0A6CFB] font-semibold font-poppins text-end pr-5 ${yearFontSize}`}>
                      {item.years}
                    </h2>
                    <p className="bg-[#F5F8FF] font-montserrat text-[#000000] leading-[140%] font-medium text-[24px] text-base whitespace-pre-line px-5 py-2">
                      {item.title}
                    </p>
                  </div>
                </div>
              )}
              <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full z-20"></div>
              {!isLeft && <div className="w-full md:w-5/12"></div>}
              {!isLeft && (
                <div className="w-full md:w-5/10 flex justify-start md:pl-1 z-10">
                  <div className="rounded-lg w-full">
                    <h2 className={`text-[#0A6CFB] font-semibold font-poppins text-start pl-5 ${yearFontSize}`}>
                      {item.years}
                    </h2>
                    <p className="bg-[#F5F8FF] font-montserrat text-[#000000] leading-[140%] font-medium text-[24px] text-base whitespace-pre-line px-5 py-2">
                      {item.title}
                    </p>
                  </div>
                </div>
              )}
              {isLeft && <div className="w-full md:w-5/12"></div>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Years;