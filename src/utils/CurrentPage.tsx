import { useLocation } from "react-router-dom";

export const useCurrentPage = () => {
  const location = useLocation();
  const path = location.pathname;

  const pageNames: Record<string, string> = {
    blog: "Блог",
    news: "Новости",
    services: "Услуги",
    about: "О себе"
  };

  let title = "";
  let breadcrumb = "";

  if (path.includes("/card/")) {
    title = "Новости";
    breadcrumb = "Новости Конференция";
  }
  else if (path.includes("/blog/")){
    title = "Блог";
    breadcrumb = "Блог";
  } 
  else {
    const lastSegment = path.split("/").filter(Boolean).pop() || "home";
    const formatted =
      pageNames[lastSegment] ||
      lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);
    title = formatted;
    breadcrumb = formatted;
  }

  return { title, breadcrumb };
};