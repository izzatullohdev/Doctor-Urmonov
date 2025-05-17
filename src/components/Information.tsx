import { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

interface InfoItem {
  uuid: string;
  confirmed: boolean;
  question_uz: string;
  question_ru: string;
  question_en: string;
  answer_uz: string;
  answer_ru: string;
  answer_en: string;
}

const Information = () => {
  const { t, i18n } = useTranslation();
  const _api = import.meta.env.VITE_API;
  const [faqs, setFaqs] = useState<InfoItem[]>([]);
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${_api}/faqs/`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setFaqs(data);
        } else {
          setFaqs([]);
        }
      })
      .catch((err) => {
        console.error("Ma'lumotlarni olishda xatolik:", err);
      });
  }, []);

  const toggleOpen = (uuid: string) => {
    setOpenId(openId === uuid ? null : uuid);
  };

  return (
    <div className="max-w-7xl mx-auto my-20 max-md:px-4">
      <h1 title={t("global_title.info")} className="text-[48px] max-md:text-[28px] leading-[140%] font-semibold text-center">
        {t("global_title.info")}
      </h1>
      <div className="flex flex-col items-center justify-center gap-4 px-24 max-md:px-0 mt-10">
        {faqs.map((item, index) => {
          const isOpen = openId === item.uuid;

          return (
            <motion.div
              key={item.uuid}
              className="w-full cards bg-[#1F2A42] cursor-pointer rounded-[10px] overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between p-5" onClick={() => toggleOpen(item.uuid)}>
                <h1
                  title={
                    i18n.language === "uz"
                      ? item.question_uz
                      : i18n.language === "ru"
                      ? item.question_ru
                      : item.question_en
                  }
                  className="text-[24px] max-md:text-[20px] leading-[140%] font-medium text-white w-[90%] flex items-start gap-1"
                >
                  <span>{index + 1}.</span>{" "}
                  {i18n.language === "uz"
                    ? item.question_uz
                    : i18n.language === "ru"
                    ? item.question_ru
                    : item.question_en}
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
                        height: { duration: 0.3 },
                        opacity: { duration: 0.3, delay: 0.1 },
                      },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: { duration: 0.3 },
                        opacity: { duration: 0.1 },
                      },
                    }}
                    className="bg-[#F5F8FF] rounded-b-[10px]"
                  >
                    <div className="text-[#0A0933] pt-12 p-5">
                      <div
                        className="text-[18px] leading-[160%]"
                        dangerouslySetInnerHTML={{
                          __html:
                            i18n.language === "uz"
                              ? item.answer_uz
                              : i18n.language === "ru"
                              ? item.answer_ru
                              : item.answer_en,
                        }}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Information;