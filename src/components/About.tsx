// import images 
import { NavLink } from "react-router-dom";
import bg from "../assets/bg.png";
import urmonov from "../assets/urmonov.png";

const About = () => {
  return (
    <>
      <div className='bg-[#F5F8FF] mt-[300px] my-20 max-xl:px-4 max-sm:px-0 max-md:hidden'>
          <div className="max-w-7xl mx-auto max-md:px-4 max-sm:px-0 flex max-md:flex-col items-center justify-between relative pt-12 pb-18">
              <div className="w-[58%]">
                  <h1 title='Урмонов Умиджон Бутабекович' className='font-bold text-[#0A0933] font-poppins text-[75px] leading-[140%] relative z-20'>Урмонов Умиджон Бутабекович</h1>
                  <p className='text-[#0A0933] text-[36px] max-xl:text-[20px] max-md:text-[14px] max-sm:text-[10px] font-montserrat font-medium relative z-20 my-5'>Торакоабдоминальный онколог-хирург, кандидат медицинских наук, онкохирург высшей категории</p>
                  <NavLink to={"/about"} className='bg-[#0A6CFB] rounded-[5px] text-[20px] max-md:text-[15px] max-sm:text-[10px] font-montserrat font-medium relative z-20 text-white px-8 py-5 mt-3'>Записаться на приём</NavLink>
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
      <div className="md:hidden max-lg:mt-[200px] flex flex-col bg-[#F5F8FF] relative pt-8 px-4">
        <img 
          src="https://res.cloudinary.com/dmgcfv5f4/image/upload/v1747205024/Group_2_qx3zt1.png" 
          loading="lazy"
          alt="Урмонов Умиджон Бутабекович" 
          className="w-full h-full absolute top-0 left-0 "
        />
        <h1 title='Урмонов Умиджон Бутабекович' className='relative font-bold text-[#0A0933] font-poppins text-[36px] leading-[140%]'>Урмонов Умиджон Бутабекович</h1>
        <p className='relative text-[#0A0933] text-[18px] font-montserrat font-medium my-4'>Торакоабдоминальный онколог-хирург, кандидат медицинских наук, онкохирург высшей категории</p>
        <img 
          src="https://res.cloudinary.com/dmgcfv5f4/image/upload/v1747204776/IMG_0904_2_2_zx90fa.png" 
          loading="lazy"
          alt="Урмонов Умиджон Бутабекович" 
          className="relative mb-16"
        />
        <NavLink to={"/about"} className="w-[91%] flex items-center justify-center bg-[#0A6CFB] rounded-[5px] text-[20px] font-montserrat font-medium absolute bottom-0 text-white py-5">Записаться на приём</NavLink>
      </div>
    </>
  )
}

export default About;