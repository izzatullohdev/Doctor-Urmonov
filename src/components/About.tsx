// import images 
import bg from "../assets/bg.png";
import urmonov from "../assets/urmonov.png";

const About = () => {
  return (
    <div className='bg-[#F5F8FF] mt-38 my-20 max-xl:px-4 max-sm:px-0'>
        <div className="max-w-7xl mx-auto max-md:px-4 max-sm:px-0 flex items-center justify-between relative pt-16 pb-20">
            <div className="w-[58%]">
                <h1 title='Урмонов Умиджон Бутабекович' className='font-bold font-poppins text-[80px] max-xl:text-[40px] max-md:text-[18px] leading-[140%] relative z-20'>Урмонов Умиджон Бутабекович</h1>
                <p className='text-[#0A0933] text-[38px] max-xl:text-[20px] max-md:text-[14px] max-sm:text-[10px] font-montserrat font-medium relative z-20 my-5'>Торакоабдоминальный онколог-хирург, кандидат медицинских наук, онкохирург высшей категории</p>
                <button className='bg-[#0A6CFB] rounded-[5px] text-[20px] max-md:text-[15px] max-sm:text-[10px] font-montserrat font-medium relative z-20 text-white px-12 mt-3 py-3'>Записаться на приём</button>
            </div>
            <img 
              src={bg} 
              loading="lazy"
              alt='Урмонов Умиджон Бутабекович' 
              className="h-full absolute top-0 left-0"
            />
            <div className="h-[110%] absolute bottom-0 right-0">
                <img 
                  src={urmonov}
                  loading="lazy" 
                  alt='Урмонов Умиджон Бутабекович' 
                  className="h-full relative"
                />
            </div>
        </div>
    </div>
  )
}

export default About;