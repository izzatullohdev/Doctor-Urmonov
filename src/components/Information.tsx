import { useState } from "react"
import { useAppContext } from "../context/AppContext"
import { IoIosArrowDown, IoIosArrowForward, IoMdClose } from "react-icons/io"
import { motion, AnimatePresence } from "framer-motion"

interface InfoItem {
  id: number
  title: string
  description: string
}

const Information = () => {
  const { InfoData }: { InfoData: InfoItem[] } = useAppContext()
  const [openId, setOpenId] = useState<number | null>(null)

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleOpen = (id: number) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <>
    <div className="max-w-7xl mx-auto my-20 max-md:px-4">
      <h1 title="Часто задаваемые вопросы" className="text-[48px] leading-[140%] font-semibold text-center">
        Часто задаваемые вопросы
      </h1>
      <div className="flex flex-col items-center justify-center gap-4 px-24 max-md:px-0 mt-10">
        {InfoData?.map((item) => {
          const isOpen = openId === item.id

          return (
            <motion.div
              key={item.id}
              className="w-full cards bg-[#1F2A42] cursor-pointer rounded-[10px] overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: item.id * 0.1 }}
            >
              <div className="flex items-center justify-between p-5" onClick={() => toggleOpen(item.id)}>
                <h1 title={item.title} className="text-[24px] leading-[140%] font-medium text-white w-[90%]">
                  {item.id}. {item.title}
                </h1>
                <motion.button
                  className="w-[30px] h-[30px] bg-white flex items-center justify-center rounded-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <AnimatePresence mode="wait">
                    {isOpen ? (
                      <motion.div
                        key="arrow-down"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <IoIosArrowDown size={18} className="text-[#1F2A42] cursor-pointer" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="arrow-forward"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <IoIosArrowForward size={18} className="text-[#1F2A42] cursor-pointer" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      transition: {
                        height: {
                          duration: 0.3,
                        },
                        opacity: {
                          duration: 0.3,
                          delay: 0.1,
                        },
                      },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: {
                          duration: 0.3,
                        },
                        opacity: {
                          duration: 0.1,
                        },
                      },
                    }}
                    className="bg-[#F5F8FF] rounded-b-[10px]"
                  >
                    <div className="text-[#0A0933] pt-12 p-5">
                      <p className="text-[18px] leading-[160%]">{item.description}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
      <div className="flex items-center justify-center mt-12 mb-5">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#0A6CFB] rounded-[5px] text-[20px] font-montserrat font-medium cursor-pointer text-white px-8 py-5"
        >
          Остались вопросы? Напишите нам!
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
               <h2 className='text-xl font-bold'>Fikringizni yozing</h2>
             </motion.div>
           </motion.div>
         )}
      </AnimatePresence>
    </>
  )
}

export default Information;