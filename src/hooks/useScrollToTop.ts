import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  // Отримуємо pathname з об'єкта location
  const { pathname } = useLocation();

  // useEffect спрацьовує щоразу, коли змінюється pathname
  useEffect(() => {
    // Прокручуємо вікно до координат (0, 0)
    window.scrollTo(0, 0);
  }, [pathname]); // Масив залежностей з pathname

  // Цей компонент нічого не рендерить, він лише виконує дію
  return null;
};
