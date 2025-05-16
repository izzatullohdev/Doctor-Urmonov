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

  if (path === "/blog" || path.startsWith("/blog/")) {
    const blogName = pageNames.blog || "Blog";
    return {
      title: blogName,
      breadcrumb: blogName,
    };
  }

  if (path === "/news" || path.startsWith("/new/")) {
    const newsName = pageNames.news || "News";
    return {
      title: newsName,
      breadcrumb: newsName,
    };
  }

  const lastSegment = path.split("/").filter(Boolean).pop() || "home";
  const formatted =
    pageNames[lastSegment] ||
    lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);

  return {
    title: formatted,
    breadcrumb: formatted,
  };
};