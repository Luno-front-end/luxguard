import { useTranslation } from "react-i18next";
import { CustomBtn } from "../../components/CustomBtn/CustomBtn";
import { HeaderSection } from "../../components/HeaderSection/HeaderSection";
import { SectionGetInTouch } from "../Home/SectionGetInTouch/SectionGetInTouch";
import { CardsAdditional } from "../PersonalVipProtection/CardsAdditional";
import { CardsProtection } from "../PersonalVipProtection/CardsProtection";
import s from "./aboutUs.module.scss";
import { useMenuActive, useModalActive } from "../../zustand/store";
import { useViewportSize } from "../../hooks/useViewport";

export const AboutUs = () => {
  const { t } = useTranslation();

  const cards = [
    { title: t("aboutUs.secFour.cardOne.title"), subtitle: "" },
    { title: t("aboutUs.secFour.cardTwo.title"), subtitle: "" },
    { title: t("aboutUs.secFour.cardThree.title"), subtitle: "" },
  ];

  const { setIsOpenModal } = useModalActive();
  const { setIsOpenMenu } = useMenuActive();

  const { width } = useViewportSize();

  return (
    <>
      <div className="container">
        <div className={s.wrapper}>
          <h1 className={s.header_top}>{t("aboutUs.header")}</h1>
          <div className={s.wrapper_one}>
            <HeaderSection>{t("aboutUs.secOne.title")}</HeaderSection>
            <p className={s.text}>
              <span className={s.subText}>{t("aboutUs.secOne.infoOne")}</span>
              <span className={s.subText}>{t("aboutUs.secOne.infoTwo")}</span>
              <span className={s.subText}>{t("aboutUs.secOne.infoThree")}</span>
              <span className={s.subText}>{t("aboutUs.secOne.infoFour")}</span>
              <span className={s.subText}>{t("aboutUs.secOne.infoFive")}</span>
            </p>
          </div>
          <div className={s.wrapper_two}>
            <HeaderSection>{t("aboutUs.secTwo.title")}</HeaderSection>
            <h3 className={s.header_wrapper_two}>
              {t("aboutUs.secTwo.subtitle")}
            </h3>
            <p className={s.text}>{t("aboutUs.secTwo.text")}</p>
          </div>
          <div className={s.wrapper_three}>
            <HeaderSection>{t("aboutUs.secThree.title")}</HeaderSection>
            <ul className={s.list}>
              <li className={s.item}>
                <h3 className={s.headerList}>
                  {t("aboutUs.secThree.keys.keyOne.title")}
                </h3>
                <p className={s.textList}>
                  {t("aboutUs.secThree.keys.keyOne.subtitle")}
                </p>
              </li>
              <li className={s.item}>
                <h3 className={s.headerList}>
                  {t("aboutUs.secThree.keys.keyTwo.title")}
                </h3>
                <p className={s.textList}>
                  {t("aboutUs.secThree.keys.keyTwo.subtitle")}
                </p>
              </li>
              <li className={s.item}>
                <h3 className={s.headerList}>
                  {t("aboutUs.secThree.keys.keyThree.title")}
                </h3>
                <p className={s.textList}>
                  {t("aboutUs.secThree.keys.keyThree.subtitle")}
                </p>
              </li>
              <li className={s.item}>
                <h3 className={s.headerList}>
                  {" "}
                  {t("aboutUs.secThree.keys.keyFour.title")}
                </h3>
                <p className={s.textList}>
                  {t("aboutUs.secThree.keys.keyFour.subtitle")}
                </p>
              </li>
              <li className={s.item}>
                <h3 className={s.headerList}>
                  {t("aboutUs.secThree.keys.keyFive.title")}
                </h3>
                <p className={s.textList}>
                  {t("aboutUs.secThree.keys.keyFive.subtitle")}
                </p>
              </li>
            </ul>
          </div>
          <div className={s.wrapper_four}>
            <HeaderSection>{t("aboutUs.secFour.title")}</HeaderSection>
            <div className={s.wrapper_four_card}>
              <CardsProtection cards={cards} isOneColumn={width >= 1280} />
            </div>
            <div className="flex justify-center">
              <CustomBtn
                onClick={() => {
                  setIsOpenModal(true);
                  setIsOpenMenu(false);
                }}
                additionalClass={true}
                customClass={s.btn}
              >
                {t("buttons.btnGetInTouch")}
              </CustomBtn>
            </div>
          </div>
        </div>
      </div>
      <div className={s.wrapper_getInTouch}>
        <SectionGetInTouch />
      </div>
    </>
  );
};
