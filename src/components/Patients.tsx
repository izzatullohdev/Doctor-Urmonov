import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface InfoItem {
  uuid: string;
  name: string;
  image: string;
  description_uz: string;
  description_ru: string;
  description_en: string;
}

const Patients = () => {
  const { t, i18n } = useTranslation();
  const _api = import.meta.env.VITE_API;
  const [review, setReviews] = useState<InfoItem[]>([]);

  useEffect(() => {
    fetch(`${_api}/reviews/`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setReviews(data);
        } else {
          setReviews([]);
        }
      })
      .catch((err) => {
        console.error("Ma'lumotlarni olishda xatolik:", err);
      });
  }, []);

  return (
    <>
      <div className="max-w-7xl mx-auto bg-[#E7EEFE] rounded-[30px] my-20 px-20 max-md:px-10 p-10">
        <h1
          title={t("global_title.patients")}
          className="text-[#1F2A42] max-md:text-[28px] text-[48px] font-montserrat font-medium leading-[120%]"
        >
          {t("global_title.patients")}
        </h1>
        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-y-10 gap-x-16 mt-10">
          {review?.map((item) => (
            <div key={item.uuid} className="bg-white rounded-[20px] p-2">
              <div className="flex items-center gap-5 mb-5">
                <img 
                  src={`https://urmonov.novacode.uz/${item.image}`} 
                  alt={
                    i18n.language === "uz"
                      ? item.description_uz
                      : i18n.language === "ru"
                      ? item.description_ru
                      : item.description_en
                  } 
                  className="w-[88px] h-[69px] rounded-[15px] object-cover"
                />
                <h1 
                  title={item.name}
                  className="text-[#0A0933] text-[24px] font-bold font-poppins"
                >
                  {item.name} 
                </h1>
              </div>
              <p className="text-[#0A0933] text-[18px] font-normal font-montserrat">
                {
                  i18n.language === "uz"
                  ? item.description_uz
                  : i18n.language === "ru"
                  ? item.description_ru
                  : item.description_en
                } 
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Patients