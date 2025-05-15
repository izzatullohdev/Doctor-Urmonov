import { useTranslation } from "react-i18next"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const About = () => {
  const _api = import.meta.env.VITE_API
  const { t } = useTranslation()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [notification, setNotification] = useState<null | { type: "success" | "error"; message: string }>(null)

  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.full_name || !formData.phone || !formData.message) {
      showNotification("error", t("form.required"))
      return
    }

    try {
      const response = await fetch(`${_api}/contact/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setFormData({ full_name: "", phone: "", message: "" })
        setIsModalOpen(false)
        showNotification("success", t("form.success"))
      } else {
        showNotification("error", t("form.error"))
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      showNotification("error", t("form.error"))
    }
  }

  const showNotification = (type: "success" | "error", message: string) => {
    setNotification({ type, message })
    setTimeout(() => setNotification(null), 3000)
  }

  return (
    <>
      <div className="bg-[#F5F8FF] mt-[300px] my-20 max-xl:px-4 max-sm:px-0 max-md:hidden">
        <div className="max-w-7xl mx-auto max-md:px-4 max-sm:px-0 flex max-md:flex-col items-center justify-between relative pt-12 pb-18">
          <div className="w-[58%]">
            <h1
              title={t("about.title")}
              className="font-bold text-[#0A0933] font-poppins text-[75px] leading-[140%] relative z-20"
            >
              {t("about.title")}
            </h1>
            <p className="text-[#0A0933] text-[36px] max-xl:text-[20px] max-md:text-[14px] max-sm:text-[10px] font-montserrat font-medium relative z-20 my-5 mb-10">
              {t("about.desc")}
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="cursor-pointer bg-[#0A6CFB] rounded-[5px] text-[20px] max-md:text-[15px] max-sm:text-[10px] font-montserrat font-medium relative z-20 text-white px-8 py-5"
            >
              {t("about.button")}
            </button>
          </div>
          <img
            src="https://res.cloudinary.com/dmgcfv5f4/image/upload/v1747227887/bg_tjoihm.png"
            alt={t("about.desc")}
            className="h-full absolute top-0 left-0"
          />
          <div className="h-[110%] absolute bottom-0 right-0">
            <img
              src="https://res.cloudinary.com/dmgcfv5f4/image/upload/v1747227952/urmonov_hiqohd.png"
              alt={t("about.desc")}
              className="h-full relative"
            />
          </div>
        </div>
      </div>
      <div className="md:hidden max-lg:mt-[200px] flex flex-col bg-[#F5F8FF] relative pt-8 px-4">
        <img
          src="https://res.cloudinary.com/dmgcfv5f4/image/upload/v1747205024/Group_2_qx3zt1.png"
          alt={t("about.desc")}
          className="w-full h-full absolute top-0 left-0 "
        />
        <h1
          title="Урмонов Умиджон Бутабекович"
          className="relative font-bold text-[#0A0933] font-poppins text-[36px] leading-[140%]"
        >
          {t("about.title")}
        </h1>
        <p className="relative text-[#0A0933] text-[18px] font-montserrat font-medium my-4">{t("about.desc")}</p>
        <img
          src="https://res.cloudinary.com/dmgcfv5f4/image/upload/v1747204776/IMG_0904_2_2_zx90fa.png"
          alt={t("about.desc")}
          className="relative mb-16"
        />
        <button
          className="w-[92%] flex items-center justify-center bg-[#0A6CFB] rounded-[5px] text-[20px] font-montserrat font-medium absolute bottom-0 text-white py-5"
          onClick={() => setIsModalOpen(true)}
        >
          {t("about.button")}
        </button>
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
              className="lg:w-xl w-[95vw] bg-[#F5F8FF] rounded-xl relative flex flex-col items-center justify-start pb-10 p-5"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col items-center mt-5 w-full max-w-lg">
                <h1 className="font-semibold text-[#0A0933] font-montserrat text-[32px] mb-5">
                  {t("form.title")}
                </h1>
                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5 p-2">
                  <input
                    type="text"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleInputChange}
                    placeholder={t("form.name")}
                    className="w-full outline-none text-[#454745] placeholder:text-[#454745] rounded-[5px] bg-white border border-[#0A6CFB] px-5 py-4"
                  />
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder={t("form.phone")}
                    className="w-full outline-none text-[#454745] placeholder:text-[#454745] rounded-[5px] bg-white border border-[#0A6CFB] px-5 py-4"
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t("form.message")}
                    className="w-full outline-none text-[#454745] placeholder:text-[#454745] rounded-[5px] bg-white border border-[#0A6CFB] py-4 px-5 resize-y min-h-[120px]"
                  />
                  <button
                    type="submit"
                    className="text-white bg-[#0A6CFB] rounded-[5px] text-[16px] font-montserrat font-medium py-4"
                  >
                    {t("form.send")}
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Notifikatsiya */}
      <AnimatePresence>
        {notification && (
          <motion.div
            className={`fixed top-5 left-[50%] translate-x-[-50%] z-[9999] rounded-lg px-5 py-3 text-white font-medium shadow-xl ${
              notification.type === "success" ? "bg-green-500" : "bg-red-500"
            }`}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
          >
            {notification.message}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default About