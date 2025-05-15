import { useState } from "react"
import { useAppContext } from "../context/AppContext"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslation } from "react-i18next"
import { FiUpload, FiX } from "react-icons/fi"

const Patients = () => {
  const { PatientData } = useAppContext()
  const { t } = useTranslation()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setSelectedImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const removeImage = () => {
    setSelectedImage(null)
  }

  return (
    <>
      <div className="max-w-7xl mx-auto bg-[#E7EEFE] rounded-[30px] my-20 px-20 max-md:px-10 p-10">
        <h1
          title={t("global_title.patients")}
          className="text-[#1F2A42] text-[48px] font-montserrat font-medium leading-[120%]"
        >
          {t("global_title.patients")}
        </h1>
        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-y-10 gap-x-16 mt-10">
          {PatientData?.map((item) => (
            <div key={item.id} className="bg-white rounded-[20px] p-2">
              <div className="flex items-center gap-5 mb-5">
                <img src={item.image || "/placeholder.svg"} alt={item.description} />
                <h1 title={item.title} className="text-[#0A0933] text-[24px] font-bold font-poppins">
                  {item.title}
                </h1>
              </div>
              <p className="text-[#0A0933] text-[18px] font-normal font-montserrat">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center mt-16">
          <button
            className="bg-[#0A6CFB] rounded-[5px] text-[20px] font-montserrat font-medium text-white cursor-pointer px-12 py-4"
            onClick={() => setIsModalOpen(true)}
          >
            {t("global_title.patients_click")}
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
                <h1 className="font-semibold text-[#0A0933] font-montserrat text-[32px] mb-6">Добавить пациента</h1>
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
                  <div className="flex flex-col gap-2">
                    {selectedImage ? (
                      <div className="relative w-full h-[150px] border border-[#0A6CFB] rounded-[5px] overflow-hidden group">
                        <img
                          src={selectedImage || "/placeholder.svg"}
                          alt="Preview"
                          className="w-full h-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={removeImage}
                          className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md opacity-80 hover:opacity-100 transition-opacity"
                        >
                          <FiX size={18} className="text-red-500" />
                        </button>
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
                          <label
                            htmlFor="image"
                            className="cursor-pointer bg-white bg-opacity-0 group-hover:bg-opacity-80 px-3 py-2 rounded-md text-transparent group-hover:text-[#0A6CFB] font-medium transition-all"
                          >
                            Изменить
                          </label>
                        </div>
                        <input
                          type="file"
                          id="image"
                          accept="image/*"
                          onChange={handleImageChange}
                          className="hidden"
                        />
                      </div>
                    ) : (
                      <label
                        htmlFor="image"
                        className="w-full h-[150px] border-2 border-dashed border-[#0A6CFB] rounded-[5px] flex flex-col items-center justify-center cursor-pointer bg-white hover:bg-blue-50 transition-colors"
                      >
                        <FiUpload size={32} className="text-[#0A6CFB] mb-2" />
                        <p className="text-[#0A6CFB] font-medium">{t('form.image_upload_text')}</p>
                        <input
                          type="file"
                          id="image"
                          accept="image/*"
                          onChange={handleImageChange}
                          className="hidden"
                        />
                      </label>
                    )}
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

export default Patients