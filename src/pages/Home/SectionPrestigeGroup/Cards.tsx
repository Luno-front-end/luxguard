import { useTranslation } from "react-i18next";
import s from "./sectionPrestigeGroup.module.scss";

export const Cards = () => {
  const { t } = useTranslation();

  return (
    <ul className={s.container_cards_desk}>
      <li className={s.wrapper_with_border_cart}>
        <div className={s.border_cart}></div>
        <div className={s.item_cart}>
          <div className="w-full flex justify-center">
            <div className={s.number_wrapper}>
              <div className={s.number_border}></div>
              <p className={s.number_cart}>1</p>
            </div>
          </div>
          <div>
            <h3 className={s.header_cart}>
              {t("prestigeGroup.cards.cardOne.title")}
            </h3>
            <p className={s.text}>
              {t("prestigeGroup.cards.cardOne.subtitle")}
            </p>
          </div>
        </div>
      </li>
      <li className={s.wrapper_with_border_cart}>
        <div className={s.border_cart}></div>
        <div className={s.item_cart}>
          <div className="w-full flex justify-center">
            <div className={s.number_wrapper}>
              <div className={s.number_border}></div>
              <p className={s.number_cart}>2</p>
            </div>
          </div>
          <div>
            <h3 className={s.header_cart}>
              {t("prestigeGroup.cards.cardTwo.title")}
            </h3>
            <p className={s.text}>
              {t("prestigeGroup.cards.cardTwo.subtitle")}
            </p>
          </div>
        </div>
      </li>
      <li className={s.wrapper_with_border_cart}>
        <div className={s.border_cart}></div>
        <div className={s.item_cart}>
          <div className="w-full flex justify-center">
            <div className={s.number_wrapper}>
              <div className={s.number_border}></div>
              <p className={s.number_cart}>3</p>
            </div>
          </div>
          <div>
            <h3 className={s.header_cart}>
              {t("prestigeGroup.cards.cardThree.title")}
            </h3>
            <p className={s.text}>
              {t("prestigeGroup.cards.cardThree.subtitle")}
            </p>
          </div>
        </div>
      </li>
      <li className={s.wrapper_with_border_cart}>
        <div className={s.border_cart}></div>
        <div className={s.item_cart}>
          <div className="w-full flex justify-center">
            <div className={s.number_wrapper}>
              <div className={s.number_border}></div>
              <p className={s.number_cart}>4</p>
            </div>
          </div>
          <div>
            <h3 className={s.header_cart}>
              {t("prestigeGroup.cards.cardFour.title")}
            </h3>
            <p className={s.text}>
              {t("prestigeGroup.cards.cardFour.subtitle")}
            </p>
          </div>
        </div>
      </li>
    </ul>
  );
};
