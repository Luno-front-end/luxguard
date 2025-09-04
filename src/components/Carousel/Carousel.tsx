// import React, { FC } from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import { ReactComponent as Car } from "../../img/car.svg";
// import s from "./carousel.module.scss";

// interface ICarouselProps {
//   children: React.ReactNode;
// }

// export const CarouselComponent: FC<ICarouselProps> = ({ children }) => {
//   const responsive = {
//     // superLargeDesktop: {
//     //   // the naming can be any, depends on you.
//     //   breakpoint: { max: 4000, min: 3000 },
//     //   items: 3,
//     // },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3,
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2,
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//       partialVisibilityGutter: 70,
//     },
//   };
//   return (
//     <Carousel
//       responsive={responsive}
//       removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
//       partialVisible={true}
//     >
//       {children}
//     </Carousel>
//   );
// };

// import React, { FC } from "react";
// // import Carousel from "react-multi-carousel";
// // import "react-multi-carousel/lib/styles.css";
// import { ReactComponent as Car } from "../../img/car.svg";
// import s from "./carousel.module.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/splide/dist/css/splide.min.css";

// interface ICarouselProps {
//   children: React.ReactNode;
// }

// export const CarouselComponent: FC<ICarouselProps> = ({ children }) => {
//   return (
//     <Splide
//       options={{
//         perPage: 4, // Кількість слайдів на десктопі
//         gap: "16px", // 🔥 ВІДСТАНЬ МІЖ КАРТКАМИ!
//         drag: "free", // Вільне перетягування
//         focus: "center", // 🔥 ЦЕНТРУЄ АКТИВНИЙ СЛАЙД, ПОКАЗУЮЧИ СУСІДНІ
//         pagination: false, // Вимикаємо точки
//         arrows: false, // Вимикаємо стрілки
//         breakpoints: {
//           // 1024: {
//           //   perPage: 2, // 2 слайди на планшеті
//           //   gap: "1rem",
//           // },
//           780: {
//             perPage: 1, // 1 слайд на мобільному
//             padding: "4rem",
//           },
//           360: {
//             perPage: 1, // 1 слайд на мобільному
//             padding: "45px",
//           },
//         },
//       }}
//       aria-label="My Carousel"
//     >
//       {React.Children.map(children, (child) => (
//         <SplideSlide>{child}</SplideSlide>
//       ))}
//     </Splide>
//   );
// };

import React, { FC } from "react";
// Імпортуємо компоненти Swiper для React
import { Swiper, SwiperSlide } from "swiper/react";
// Імпортуємо необхідні модулі
import { Grid, Pagination } from "swiper/modules";

// Імпортуємо стилі Swiper
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
// import "./styles.css"; // Ваш файл стилів
import s from "./carousel.module.scss";
import { ReactComponent as Car } from "../../img/car.svg";
import "@splidejs/splide/dist/css/splide.min.css";

interface ICarouselProps {
  children: React.ReactNode;
}

const cars = [
  {
    title: "Protected. Secured. Ready.",
    text: "Your safety — our mission.",
  },
  {
    title: "Eyes on — always.",
    text: "24/7 Tactical Control.",
  },
  {
    title: "Red zones. Zero hesitation.",
    text: "We go where others won't",
  },
];

interface ICarouselProps {
  children: React.ReactNode;
}

export const CarouselComponent: FC<ICarouselProps> = ({ children }) => {
  return (
    <div className={s.carousel_wrapper}>
      <Splide
        options={{
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "16px",
          padding: "16px",
          // breakpoints: {
          // Ваш мобільний брейкпоінт
          // 825: {
          autoWidth: true, // Переконайтесь, що тут також autoWidth

          // focus: "center",
          // },
          // 826: {
          //   autoWidth: true, // Переконайтесь, що тут також autoWidth
          //   destroy: true,
          // },

          // Новий брейкпоінт для великих екранів
          // 1400: {
          //   // Наприклад, для екранів ширших за 1400px
          //   // destroy: true, // Повністю вимикаємо Splide
          // },
          // },
        }}
      >
        {React.Children.map(children, (child) => (
          <SplideSlide>{child}</SplideSlide>
        ))}
      </Splide>
    </div>
  );
};
