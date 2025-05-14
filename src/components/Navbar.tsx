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
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  const navLinks = [
    { path: "/", label: t("navbar.home") },
    { path: "/about", label: t("navbar.about") },
    { path: "/services", label: t("navbar.service") },
    { path: "/blog", label: t("navbar.blog") },
    { path: "/news", label: t("navbar.news") },
    { path: "/sampi", label: "SAMPI" }
  ];

  return (
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
            <button className="w-[210px] h-[60px] bg-[#0A6CFB] font-montserrat text-white rounded-md cursor-pointer">
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
  );
};

export default Navbar;
