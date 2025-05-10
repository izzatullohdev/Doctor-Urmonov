interface VideoItem {
  id: number;
  video: string;
  title: string;
  views: string;
  timeAgo: string;
  duration: string;
}

const Videos: React.FC = () => {
  const videos: VideoItem[] = [
    {
      id: 1,
      video: "https://youtu.be/4hF4AdV4AKc?si=CYp9criB2aaGYNbt",
      title: "Ракдан қутилган аёл. Сиз ҳам эшитинг!!!",
      views: "7,3 тыс. просмотров",
      timeAgo: "1 месяц назад",
      duration: "27:26",
    },
    {
      id: 2,
      video: "https://youtu.be/QiMCraoEeCU?si=chxgfidpWCy4Phlh",
      title: "Onkologik bemorda faqat 1 marta shans bo‘ladi",
      views: "3 тыс. просмотров",
      timeAgo: "1 месяц назад",
      duration: "4:32",
    },
    {
      id: 3,
      video: "https://youtu.be/S_vEpRRajak?si=7o92N6ovB0lLSKtP",
      title:
        "Химиотерапия ўтказишдан мақсад ва ундан кутилaётган натижалар!",
      views: "3,5 тыс. просмотров",
      timeAgo: "2 месяца назад",
      duration: "7:55",
    },
  ];

  const extractVideoId = (url: string): string => {
    const regex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/;
    const match = url.match(regex);
    return match ? match[1] : "";
  };

  return (
    <div className="max-w-7xl mx-auto my-20 px-4">
      <h1 className="text-[#0A0933] text-[36px] md:text-[48px] font-semibold text-center mb-10">
        Видео из социальных сетей
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-black rounded-[10px] gap-5 p-5">
        {videos.map((item) => {
          const videoId = extractVideoId(item.video);
          return (
            <div
              key={item.id}
              className="bg-[#181818] rounded-xl overflow-hidden text-white shadow-lg"
            >
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  className="w-full h-full rounded-xl"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Videos;