import { FC } from "react";
import s from "./sectionOurServices.module.scss";
// import { ReactComponent as Person } from "../../../img/person.svg";
import { CustomBtn } from "../../../components/CustomBtn/CustomBtn";
import { useTranslation } from "react-i18next";
import { useViewportSize } from "../../../hooks/useViewport";
import { ReactComponent as Arrow } from "../../../img/arrow.svg";
import { Cards } from "./Cards";
import { manifest } from "../../../data/manifest";

export const SectionOurServices: FC = () => {
  const { t } = useTranslation();

  const cards = [
    {
      id: 1,
      titleFirst: t("ourServices.cards.cardOne.title_first"),
      titleSecond: t("ourServices.cards.cardOne.title_second"),
      subtitle: t("ourServices.cards.cardOne.subtitle"),
    },
    {
      id: 2,
      titleFirst: t("ourServices.cards.cardTwo.title_first"),
      titleSecond: t("ourServices.cards.cardTwo.title_second"),
      subtitle: t("ourServices.cards.cardTwo.subtitle"),
    },
    {
      id: 3,
      titleFirst: t("ourServices.cards.cardThree.title_first"),
      titleSecond: t("ourServices.cards.cardThree.title_second"),
      subtitle: t("ourServices.cards.cardThree.subtitle"),
    },
  ];

  const { width } = useViewportSize();

  return (
    <div className={`container ${s.wrapper}`}>
      <h2 className={s.header}>{t("ourServices.title")}</h2>
      <Cards cards={cards} />

      <div
        className={`${
          width <= 1280
            ? s.wrapper_btn
            : `${s.wrapper_btn} ${s.wrapper_btn_desk}`
        }`}
      >
        <CustomBtn
          onClick={() => {}}
          additionalClass={true}
          customClass={s.btn}
          isLink={{ to: manifest.allServices.path }}
        >
          <span>
            {t("buttons.btnAllServices")}
            <Arrow className={s.arrow} />
          </span>
        </CustomBtn>
      </div>
    </div>
  );
};
