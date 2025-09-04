import { FC } from "react";
import s from "./sectionPrestigeGroup.module.scss";
import { CarouselComponent } from "../../../components/Carousel/Carousel";
import { CustomBtn } from "../../../components/CustomBtn/CustomBtn";
import { useViewportSize } from "../../../hooks/useViewport";
import { Cards } from "./Cards";
import { useTranslation } from "react-i18next";
import { ReactComponent as Arrow } from "../../../img/arrow.svg";

export const SectionPrestigeGroup: FC = () => {
  const { t } = useTranslation();

  const { width } = useViewportSize();

  return (
    <div className={s.wrapper}>
      <div className="container">
        <h2 className={s.title}>{t("prestigeGroup.title")}</h2>
      </div>
      {width <= 1060 ? (
        <div className={s.wrapper_carousel}>
          <CarouselComponent>
            <div className={s.wrapper_with_border_cart}>
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
            </div>
            <div className={s.wrapper_with_border_cart}>
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
            </div>
            <div className={s.wrapper_with_border_cart}>
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
            </div>
            <div className={s.wrapper_with_border_cart}>
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
            </div>
          </CarouselComponent>
        </div>
      ) : (
        <Cards />
      )}

      <div className={`container ${s.wrapper_btn}`}>
        <CustomBtn
          onClick={() => {}}
          variant="secondary"
          additionalClass={true}
          customClass={s.btn_secondary}
        >
          <span className="flex items-center justify-center">
            <span className="mr-[8px]">{t("buttons.btnMoreAboutUs")}</span>{" "}
            <Arrow className={s.arrow} />
          </span>
        </CustomBtn>
      </div>
    </div>
  );
};
