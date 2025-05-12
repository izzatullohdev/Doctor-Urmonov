import { FC } from "react";
import { motion } from "framer-motion";
import doctorImg from "../assets/doctor.jpg"; // replace with actual path

const BiographySection: FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <img
          src={doctorImg}
          alt="doctor"
          className="rounded-[20px] w-full object-cover rounded-bl-[24px]"
          style={{
            clipPath:
              "polygon(20% 0%, 100% 0, 100% 20%, 100% 100%, 80% 100%, 30% 100%, 0% 80%, 0 0);",
          }}
        />
        <div className="absolute left-[0px] bottom-0 bg-blue-500 border-5 border-white text-white px-6 py-2 rounded-xl shadow-lg">
          <p className="text-2xl font-bold leading-tight">
            13<span className="text-lg align-super">+</span> Летний
          </p>
          <p className="text-sm">профессиональный опыт</p>
        </div>
      </motion.div>

      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-3xl md:text-[44px] font-montserrat text-gray-900 mb-4">
          Биография
        </h2>
        <p className="text-gray-700 text-[22px] leading-relaxed mb-6">
          Меня зовут <strong>Урмонов Умиджон Бутабекович</strong>. Я онкохирург.
          Провожу операции при опухолях различной локализации, экстренные
          хирургические вмешательства и диагностические процедуры. Тысячи
          благодарных пациентов и сотни успешных операций — результат моей
          ежедневной работы.
        </p>
        <button className="bg-blue-100 text-blue-600 hover:bg-blue-200 font-semibold py-3 px-4">
          Подробнее
        </button>
      </motion.div>
    </section>
  );
};

export default BiographySection;
