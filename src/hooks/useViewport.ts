import { useState, useEffect } from "react";

interface ViewportSize {
  width: number;
  height: number;
}

export const useViewportSize = (): ViewportSize => {
  // Функція для отримання розмірів, яка працює тільки в браузері
  const getSize = () => {
    return {
      width: typeof window !== "undefined" ? window.innerWidth : 0,
      height: typeof window !== "undefined" ? window.innerHeight : 0,
    };
  };

  const [viewportSize, setViewportSize] = useState<ViewportSize>(getSize());

  useEffect(() => {
    // Обробник події зміни розміру вікна
    const handleResize = () => {
      setViewportSize(getSize());
    };

    // Додаємо слухача події
    window.addEventListener("resize", handleResize);

    // Прибираємо слухача події при розмонтуванні компонента
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Порожній масив залежностей означає, що ефект запуститься лише раз

  return viewportSize;
};
