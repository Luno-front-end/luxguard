import { CarouselComponent } from "../../../components/Carousel/Carousel";
import { CustomBtn } from "../../../components/CustomBtn/CustomBtn";
import s from "./sectionsHero.module.scss";
import { ReactComponent as Car } from "../../../img/car.svg";
import { ReactComponent as Logo } from "../../../img/logo.svg";
import { Cards } from "./Cards";
import { useViewportSize } from "../../../hooks/useViewport";
import { useTranslation } from "react-i18next";
import { FC } from "react";
import { manifest } from "../../../data/manifest";
import { useMenuActive, useModalActive } from "../../../zustand/store";

interface ISectionHeroProps {
  isAllServices?: boolean;
  isPersonalVipProtection?: {
    title: string;
    subtitle: string;
  };
}

export const SectionsHero: FC<ISectionHeroProps> = ({
  isAllServices,
  isPersonalVipProtection,
}) => {
  const { t } = useTranslation();
  const { width } = useViewportSize();
  const { setIsOpenModal } = useModalActive();
  const { setIsOpenMenu } = useMenuActive();

  const cards = [
    {
      title: t("hero.cards.cardOne.title"),
      subtitle: t("hero.cards.cardOne.subtitle"),
    },
    {
      title: t("hero.cards.cardTwo.title"),
      subtitle: t("hero.cards.cardTwo.subtitle"),
    },
    {
      title: t("hero.cards.cardThree.title"),
      subtitle: t("hero.cards.cardThree.subtitle"),
    },
  ];

  const headerTextPage = () => {
    if (isAllServices) {
      return t("hero.titleAllServices");
    }
    if (isPersonalVipProtection) {
      return isPersonalVipProtection.title;
    }
    return t("hero.title");
  };

  const classWrapper = () => {
    if (isAllServices) {
      return `${s.wrapper} ${s.wrapper_isAllServices}`;
    }
    if (isPersonalVipProtection) {
      return `${s.wrapper} ${s.wrapper_isVipProtection}`;
    }
    return s.wrapper;
  };

  return (
    <div className={classWrapper()}>
      <div>
        <Logo className={s.logo_absolute} />
      </div>
      <div className={`container ${s.wrapper_hero_desk}`}>
        <div className={s.wrapper_content_hero}>
          <div>
            <div className={isPersonalVipProtection ? s.wrapper_title_vip : ""}>
              <h1 className={s.title}>{headerTextPage()}</h1>
              <h2 className={s.subtitle}>
                {isPersonalVipProtection
                  ? isPersonalVipProtection.subtitle
                  : t("hero.subtitle")}
              </h2>
            </div>
            <div className={s.wrapper_btns_hero}>
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
              {!isAllServices && (
                <CustomBtn
                  onClick={() => {}}
                  variant="secondary"
                  additionalClass={true}
                  customClass={s.btn_secondary}
                  isLink={{ to: manifest.allServices.path }}
                >
                  {isPersonalVipProtection
                    ? t("buttons.btnOtherServices")
                    : t("buttons.btnOurServices")}
                </CustomBtn>
              )}
            </div>
          </div>
        </div>
      </div>

      {!isAllServices && !isPersonalVipProtection && (
        <>
          {width <= 828 ? (
            <div className={s.container_carousel}>
              <CarouselComponent>
                <div className={s.wrapper_with_border_cart}>
                  <div className={s.border_cart}></div>
                  <div className={s.wrapper_carousel}>
                    <div className={s.wrapper_carousel_icon}>
                      <Car />
                    </div>
                    <div className={s.wrapper_text}>
                      <p className={s.title_carousel}>
                        {t("hero.cards.cardOne.title")}
                      </p>
                      <p className={s.subtitle_carousel}>
                        {t("hero.cards.cardOne.subtitle")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className={s.wrapper_with_border_cart}>
                  <div className={s.border_cart}></div>
                  <div className={s.wrapper_carousel}>
                    <div className={s.wrapper_carousel_icon}>
                      <Car />
                    </div>
                    <div className={s.wrapper_text}>
                      <p className={s.title_carousel}>
                        {t("hero.cards.cardTwo.title")}
                      </p>
                      <p className={s.subtitle_carousel}>
                        {t("hero.cards.cardTwo.subtitle")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className={s.wrapper_with_border_cart}>
                  <div className={s.border_cart}></div>
                  <div className={s.wrapper_carousel}>
                    <div className={s.wrapper_carousel_icon}>
                      <Car />
                    </div>
                    <div className={s.wrapper_text}>
                      <p className={s.title_carousel}>
                        {t("hero.cards.cardThree.title")}
                      </p>
                      <p className={s.subtitle_carousel}>
                        {t("hero.cards.cardThree.subtitle")}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselComponent>
            </div>
          ) : (
            <div className={s.container_cards_desk}>
              <Cards cards={cards} />
            </div>
          )}
        </>
      )}
    </div>
  );
};
