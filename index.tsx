import { useAppContext } from "../context/AppContext";

const Years = () => {
  const { YearsData } = useAppContext();

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 xl:px-0 py-20 relative">
      <div className="flex items-center justify-center mb-16">
        <h1
          title="Хронология профессионального пути"
          className="text-[#1F2A42] text-[32px] md:text-[48px] font-bold text-center leading-[140%] lg:w-[60%]"
        >
          Хронология профессионального пути
        </h1>
      </div>

      {/* Timeline chizig'i */}
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500 z-0"></div>

        {/* Timeline elements */}
        {YearsData?.map((item, idx) => {
          const isLeft = idx % 2 === 0;

          return (
            <div key={item.id} className="relative mb-12 flex flex-col md:flex-row items-center justify-between">
              {isLeft && (
                <div className="w-full md:w-5/12 flex justify-end md:pr-6 z-10">
                  <div className="bg-[#F5F8FF] p-4 rounded-lg shadow-md w-full max-w-md">
                    <h2 className="text-blue-700 font-semibold text-lg mb-1">{item.years}</h2>
                    <p className="text-gray-800 text-base whitespace-pre-line">{item.title}</p>
                  </div>
                </div>
              )}

              {/* Circle */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-blue-600 rounded-full z-20"></div>

              {!isLeft && <div className="w-full md:w-5/12"></div>}

              {!isLeft && (
                <div className="w-full md:w-5/12 flex justify-start md:pl-6 z-10">
                  <div className="bg-[#F5F8FF] p-4 rounded-lg shadow-md w-full max-w-md">
                    <h2 className="text-blue-700 font-semibold text-lg mb-1">{item.years}</h2>
                    <p className="text-gray-800 text-base whitespace-pre-line">{item.title}</p>
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