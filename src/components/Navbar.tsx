import { FC, useState } from "react";
import {
  FaFacebookF,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io";
import { PiTelegramLogo } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import Translation from "../components/Translation";

const Navbar: FC = () => {
  const { t } = useTranslation();
  const _api = import.meta.env.VITE_API;
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navLinks = [
    { path: "/", label: t("navbar.home") },
    { path: "/about", label: t("navbar.about") },
    { path: "/services", label: t("navbar.service") },
    { path: "/blog", label: t("navbar.blog") },
    { path: "/news", label: t("navbar.news") },
    { path: "/sampi", label: "SAMPI" }
  ];

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
    <header className="w-full fixed top-0 left-0 z-50 bg-[#F8F9FF] border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-6 max-lg:py-4 px-4">
        <NavLink to={"/"} className="font-poppins font-extrabold text-[30px] sm:text-[36px] text-gray-900">
          Doctor Urmonov
        </NavLink>
        <div className="max-lg:hidden flex items-center gap-6 text-gray-700 text-xl ml-10">
          <AiOutlineYoutube className="hover:text-red-600 cursor-pointer" size={25}/>
          <IoLogoInstagram className="hover:text-pink-500 cursor-pointer" size={23}/>
          <PiTelegramLogo className="hover:text-sky-500 cursor-pointer" size={21}/>
          <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
        </div>
        <div className="hidden lg:flex items-center gap-8">
          <a href="tel:+998900302423" className="text-[#454745] font-montserrat text-[22px]">
            +998 77 000 26 26
          </a>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-[210px] h-[60px] bg-[#0A6CFB] font-montserrat text-white rounded-md cursor-pointer"
            >
              {t('navbar.button')}
            </button>
            <Translation />
          </div>
        </div>
        <div className="lg:hidden flex items-center gap-3">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <FaTimes className="text-3xl text-gray-800 cursor-pointer mt-2" />
              </motion.div>
            ) : (
              <motion.div
                initial={{ rotate: 180 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaBars className="text-3xl text-gray-800 cursor-pointer mt-2" />
              </motion.div>
            )}
          </motion.button>
        </div>
      </div>
      <nav className="bg-[#F8F9FF]">
        <ul className="max-w-7xl mx-auto px-4 gap-10 py-[0px] text-[18px] font-medium text-[#454745] hidden lg:flex">
          {navLinks.map(({ path, label }) => (
            <li key={path} className="py-5">
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "font-bold border-b-2 border-[#454745] text-[#454745] pb-5.5"
                    : "hover:text-gray-900"
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden flex flex-col gap-4 px-6 py-4 text-[18px] text-[#454745] font-medium"
            >
              <motion.ul
                className="flex flex-col gap-4"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } },
                  hidden: {},
                }}
              >
                {navLinks.map(({ path, label }) => (
                  <motion.li
                    key={path}
                    variants={{
                      hidden: { opacity: 0, y: -10 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <NavLink
                      to={path}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        isActive
                          ? "text-gray-900 font-semibold border-b-2 border-gray-800 pb-1"
                          : "hover:text-gray-900"
                      }
                    >
                      {label}
                    </NavLink>
                  </motion.li>
                ))}
                <motion.button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-[#0A6CFB] font-montserrat text-white rounded-md cursor-pointer p-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {t('navbar.button')}
              </motion.button>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <motion.div
        className="flex justify-between items-center lg:hidden border-t border-[#00000054] px-4"
         initial="hidden"
         animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {},
         }}
       >
         <motion.div
          className="flex items-center text-[#1F2A42] gap-4 py-4"
          variants={{ visible: {}, hidden: {} }}
        >
          <AiOutlineYoutube className="hover:text-red-600 cursor-pointer" size={25}/>
          <IoLogoInstagram className="hover:text-pink-500 cursor-pointer" size={23}/>
          <PiTelegramLogo className="hover:text-sky-500 cursor-pointer" size={21}/>
          <FaFacebookF className="hover:text-blue-600 cursor-pointer" size={18}/>
        </motion.div>
        <motion.div
          className="flex items-center gap-3"
          variants={{ visible: {}, hidden: {} }}
        >
          <a href="tel:+998900302423" className="text-[#454745] font-montserrat text-[17px]">+998 77 000 26 26</a>
          <Translation />
         </motion.div>
      </motion.div>
    </header>
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
  );
};

export default Navbar;
