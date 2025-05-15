import { useState } from "react"
import { useAppContext } from "../context/AppContext"
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslation } from "react-i18next"

interface InfoItem {
  id: number
  title: string
  description: string
}

const Information = () => {
  const { InfoData }: { InfoData: InfoItem[] } = useAppContext()
  const [openId, setOpenId] = useState<number | null>(null)

  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleOpen = (id: number) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <>
    <div className="max-w-7xl mx-auto my-20 max-md:px-4">
      <h1 title={t('global_title.info')} className="text-[48px] leading-[140%] font-semibold text-center">
        {t('global_title.info')}
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
          {t('global_title.info_click')}
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
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="w-lg max-md:w-[90vw] bg-[#F5F8FF] rounded-xl overflow-y-auto relative flex items-center justify-center p-5"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col items-center w-full">
                <h1 className="font-semibold text-[#0A0933] font-montserrat text-[32px] mb-6">{t('global_title.info')}</h1>
                <form className="w-full rounded-[10px] flex flex-col gap-5 p-2">
                  <div className="flex flex-col gap-2">
                    <input
                      type="text"
                      id="title"
                      placeholder={t('form.title_placeholder')}
                      className="outline-none text-[#454745] placeholder:text-[#454745] rounded-[5px] bg-white border border-[#0A6CFB] px-5 py-4 transition-all focus:shadow-md focus:border-[#0848a0]"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <textarea
                      id="description"
                      placeholder={t('form.description_placeholder')}
                      rows={4}
                      className="outline-none text-[#454745] placeholder:text-[#454745] rounded-[5px] bg-white border border-[#0A6CFB] px-5 py-4 resize-none transition-all focus:shadow-md focus:border-[#0848a0]"
                    />
                  </div>
                  <button className="text-white bg-[#0A6CFB] rounded-[5px] text-[16px] font-montserrat font-medium py-4 mt-2 hover:bg-[#0848a0] transition-colors">
                    {t('form.save_button')}
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Information;