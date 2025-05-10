import { useAppContext } from '../context/AppContext';

const Patients = () => { 
  const { PatientData } = useAppContext();
  return (
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
            <button className='bg-[#0A6CFB] rounded-[5px] text-[20px] font-montserrat font-medium text-white px-12 py-3'>Оставить отзыв</button>
        </div>
    </div>
  )
}

export default Patients;