import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const useCurrentPage = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const path = location.pathname;

  const pageNames: Record<string, string> = {
    blog: t("pageNames.blog"),
    news: t("pageNames.news"), 
    services: t("pageNames.services"),
    about: t("pageNames.about"),
  };

  let title = "";
  let breadcrumb = "";

  if (path.includes("/card/")) {
    title = t("cardTitle");
    breadcrumb = t("breadcrumb.card");
  }
  else if (path.includes("/blog/")){
    title = t("blogTitle");
    breadcrumb = t("breadcrumb.blog");
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