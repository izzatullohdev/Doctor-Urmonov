const Statistics = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 xl:px-0 py-20">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full h-full flex justify-center">
          <img 
            src="https://res.cloudinary.com/dmgcfv5f4/image/upload/v1747055693/Subtract_1_tm0nrp.png"
            loading="lazy"
            alt="О себе"
            className="w-full max-w-[600px] h-auto object-contain"
          />
        </div>
        <div className="w-full grid grid-cols-2 max-sm:grid-cols-1 gap-6">
          <div className="bg-[#F5F8FF] flex flex-col items-center justify-center rounded-[20px] text-center py-22 p-6">
            <h1 title="+13" className="text-[#0A6CFB] text-[80px] font-montserrat font-bold">+13</h1>
            <p className="text-[#454745] text-[32px] font-montserrat font-semibold">лет опыта</p>
          </div>
          <div className="bg-[#F5F8FF] flex flex-col items-center justify-center rounded-[20px] text-center py-22 p-6">
            <h1 title="+80" className="text-[#0A6CFB] text-[80px] font-montserrat font-bold">+80</h1>
            <p className="text-[#454745] text-[32px] font-montserrat font-semibold">научных статей</p>
          </div>
          <div className="bg-[#F5F8FF] flex flex-col items-center justify-center rounded-[20px] text-center py-22 p-6">
            <h1 title="+1200" className="text-[#0A6CFB] text-[80px] font-montserrat font-bold">+1200</h1>
            <p className="text-[#454745] text-[32px] font-montserrat font-semibold text-center">довольных клиентов</p>
          </div>
          <div className="bg-[#F5F8FF] flex flex-col items-center justify-center rounded-[20px] text-center py-22 p-6">
            <h1 title="+2000" className="text-[#0A6CFB] text-[80px] font-montserrat font-bold">+2000</h1>
            <p className="text-[#454745] text-[32px] font-montserrat font-semibold text-center">проведенные операции</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;