import { FC, useState } from "react";
import {
  FaYoutube,
  FaInstagram,
  FaTelegramPlane,
  FaFacebookF,
  FaBars,
  FaTimes,
  FaPhoneAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { path: "/", label: "Главная" },
  { path: "/about", label: "О себе" },
  { path: "/services", label: "Услуги" },
  { path: "/blog", label: "Блог" },
  { path: "/news", label: "Новости" },
  { path: "/sampi", label: "САМПИ" },
];

const Navbar: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#F8F9FF] border-b border-gray-200">
      {/* Top nav */}
      <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
        <h1 className="font-poppins font-bold text-[28px] sm:text-[36px] text-gray-900">
          Doctor Urmonov
        </h1>

        {/* Desktop Right Side */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex gap-6 text-gray-700 text-xl">
            <FaYoutube className="hover:text-red-600" />
            <FaInstagram className="hover:text-pink-500" />
            <FaTelegramPlane className="hover:text-sky-500" />
            <FaFacebookF className="hover:text-blue-600" />
          </div>

          <span className="text-[#454745] font-montserrat text-[18px]">
            +998 77 000 26 26
          </span>

          <button className="bg-[#0A6CFB] hover:bg-blue-700 text-white px-4 py-3 rounded-md text-sm">
            Записаться на приём
          </button>
        </div>

        {/* Hamburger */}
        <div className="lg:hidden">
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
                <FaTimes className="text-2xl text-gray-800" />
              </motion.div>
            ) : (
              <motion.div
                initial={{ rotate: 180 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaBars className="text-2xl text-gray-800" />
              </motion.div>
            )}
          </motion.button>
        </div>
      </div>

      {/* Bottom nav for desktop */}
      <nav className="border-t border-gray-200 bg-[#F8F9FF]">
        <ul className="max-w-7xl mx-auto px-4 gap-10 py-3 text-[18px] font-medium text-gray-700 hidden lg:flex">
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-gray-800 pb-1 text-gray-900"
                    : "hover:text-gray-900"
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* AnimatePresence bilan mobile menyu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden flex flex-col gap-4 px-6 py-4 text-[18px] text-gray-700 font-medium"
            >
              {/* Icons */}
              <motion.div
                className="flex justify-between items-center"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } },
                  hidden: {},
                }}
              >
                <motion.div
                  className="flex gap-4 text-xl"
                  variants={{ visible: {}, hidden: {} }}
                >
                  <FaYoutube />
                  <FaInstagram />
                  <FaTelegramPlane />
                  <FaFacebookF />
                </motion.div>

                <motion.div
                  className="flex items-center gap-2 text-base"
                  variants={{ visible: {}, hidden: {} }}
                >
                  <FaPhoneAlt /> +998 77 000 26 26
                </motion.div>
              </motion.div>

              {/* Button */}
              <motion.button
                className="bg-[#0A6CFB] hover:bg-blue-700 text-white px-4 py-3 rounded-md text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Записаться на приём
              </motion.button>

              {/* Links */}
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
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
