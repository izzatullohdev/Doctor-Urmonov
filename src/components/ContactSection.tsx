import { FC } from "react";
import {
  FaTelegramPlane,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const ContactSection: FC = () => {
  return (
    <section className="bg-[#F8F9FF] text-gray-900 px-4 md:px-10 py-10">
      <h2 className="text-center text-3xl font-bold mb-10">Контакты</h2>

      {/* Top section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left side */}
        <div className="flex flex-col gap-5">
          <a
            href="https://t.me/username"
            target="_blank"
            className="flex items-center gap-3 bg-[#1E90FF] text-white px-5 py-3 rounded-md hover:bg-[#187bcd] transition w-fit"
          >
            <FaTelegramPlane size={20} />
            Связаться через Telegram
          </a>

          <a
            href="https://wa.me/998770002626"
            target="_blank"
            className="flex items-center gap-3 bg-[#25D366] text-white px-5 py-3 rounded-md hover:bg-[#1EBE5F] transition w-fit"
          >
            <FaWhatsapp size={20} />
            Связаться через WhatsApp
          </a>

          <div className="flex items-center gap-3 mt-5">
            <FaPhoneAlt />
            <span>Телефон: +998770002626</span>
          </div>

          <div className="flex items-center gap-3">
            <FaEnvelope />
            <span>Email: Dr_urmonov@mail.ru</span>
          </div>

          <div className="flex items-center gap-3">
            <FaMapMarkerAlt />
            <span>Адрес: Tashkent, yangi Tosh MI</span>
          </div>
        </div>

        {/* Right side - Map */}
        <div className="rounded-md overflow-hidden border">
          <iframe
            className="w-full h-72"
            src="https://maps.google.com/maps?q=Tashkent&t=&z=13&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Divider */}
      <div className="my-10 border-t border-gray-300"></div>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-sm">
        {/* Left - Logo + Socials */}
        <div>
          <h3 className="text-xl font-bold mb-3">Doctor Urmonov</h3>
          <div className="flex gap-4 text-lg">
            <FaFacebookF className="hover:text-blue-600 transition" />
            <FaInstagram className="hover:text-pink-500 transition" />
            <FaTelegramPlane className="hover:text-sky-500 transition" />
            <FaWhatsapp className="hover:text-green-500 transition" />
            <FaYoutube className="hover:text-red-600 transition" />
          </div>
        </div>

        {/* Working hours */}
        <div>
          <h4 className="font-semibold mb-2">Рабочее время</h4>
          <p>
            Понедельник - Пятница
            <br />
            09:00 - 18:00
          </p>
          <p className="mt-2">
            Суббота
            <br />
            10:00 - 16:00
          </p>
        </div>

        {/* Menu */}
        <div>
          <h4 className="font-semibold mb-2">Меню</h4>
          <ul className="space-y-1">
            <li>Главная</li>
            <li>О себе</li>
            <li>Услуги</li>
            <li>Работы</li>
            <li>Медиа</li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h4 className="font-semibold mb-2">Адрес</h4>
          <p className="mb-2">
            Ташкентский городской филиал Республиканского специализированного
            научно-практического медицинского центра онкологии и радиологии
          </p>
          <div className="flex items-center gap-2">
            <FaPhoneAlt /> +998770002626
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope /> Dr_urmonov@mail.ru
          </div>
        </div>
      </footer>

      {/* Bottom text */}
      <p className="text-center text-xs mt-10 text-gray-500">
        © 2025 Урмонов Умиджон Бугтабекович. Все права защищены.
      </p>
    </section>
  );
};

export default ContactSection;
