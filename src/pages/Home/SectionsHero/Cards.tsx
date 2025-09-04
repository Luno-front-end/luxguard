import s from "./sectionsHero.module.scss";
import { ReactComponent as Car } from "../../../img/car.svg";
import { useTranslation } from "react-i18next";
import { FC } from "react";

interface ICardsProps {
  cards: {
    title: string;
    subtitle: string;
  }[];
}

export const Cards: FC<ICardsProps> = ({ cards }) => {
  const { t } = useTranslation();

  return (
    <>
      {cards.map((card, index) => (
        <div className={s.wrapper_with_border_cart} key={index}>
          {/* <div className={s.border_cart}></div> */}
          <div className={s.wrapper_carousel}>
            <div className={s.wrapper_carousel_icon}>
              <Car />
            </div>
            <div className={s.wrapper_text}>
              <p className={s.title_carousel}>{card.title}</p>
              <p className={s.subtitle_carousel}>{card.subtitle}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
