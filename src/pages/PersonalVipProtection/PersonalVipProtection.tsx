import React from "react";
import { SectionGetInTouch } from "../Home/SectionGetInTouch/SectionGetInTouch";
import { Cards } from "../Home/SectionOurServices/Cards";
import { useTranslation } from "react-i18next";
import { SectionsHero } from "../Home/SectionsHero/SectionsHero";
import { HeaderSection } from "../../components/HeaderSection/HeaderSection";
import s from "./personalVipProtection.module.scss";
import { CardsProtection } from "./CardsProtection";
import { CustomBtn } from "../../components/CustomBtn/CustomBtn";
import { Link, useParams } from "react-router-dom";
import { allServicesData } from "../../data/services";
import { CardsAdditional } from "./CardsAdditional";

export const PersonalVipProtection = () => {
  const { t } = useTranslation();

  const cardsOurServices = [
    {
      id: 1,
      img: "personIcon",
      titleFirst: t("ourServices.cards.cardOne.title_first"),
      titleSecond: t("ourServices.cards.cardOne.title_second"),
      subtitle: t("ourServices.cards.cardOne.subtitle"),
    },
    {
      id: 2,
      img: "pitIcon",
      titleFirst: t("ourServices.cards.cardTwo.title_first"),
      titleSecond: t("ourServices.cards.cardTwo.title_second"),
      subtitle: t("ourServices.cards.cardTwo.subtitle"),
    },
    {
      id: 3,
      img: "vavIcon",
      titleFirst: t("ourServices.cards.cardThree.title_first"),
      titleSecond: t("ourServices.cards.cardThree.title_second"),
      subtitle: t("ourServices.cards.cardThree.subtitle"),
    },
  ];

  const { id } = useParams<{ id: string }>();

  const service = allServicesData.find((s) => s.id === Number(id));

  console.log(service);
  if (!service) {
    return (
      <div>
        <h2>Послугу не знайдено</h2>
        <Link to="/services">Повернутися до списку послуг</Link>
      </div>
    );
  }

  return (
    <div>
      <SectionsHero
        isPersonalVipProtection={{
          title: t(service.info.title),
          subtitle: `${t(service.title_first)} ${t(service.title_second)}`,
        }}
      />
      <div className={`container ${s.wrapper_section_one}`}>
        <HeaderSection>{t(service.info.title)}</HeaderSection>
        <p className={s.text}>{t(service.info.text)}</p>
      </div>
      <div className={`container ${s.wrapper_section_two}`}>
        <HeaderSection>{t(service.info.one_block.title)}</HeaderSection>
        <CardsProtection cards={service.info.one_block.list} />
        <p className={s.text_last}>Your safety allways comes first.</p>
        <div className={s.wrapper_btn}>
          <CustomBtn
            additionalClass={true}
            customClass={s.btn}
            onClick={() => {}}
          >
            {t("buttons.btnGetInTouch")}
          </CustomBtn>
        </div>
      </div>
      <div className={`container ${s.wrapper_section_three}`}>
        <div className="w-[495px]">
          <HeaderSection>{t(service.info.two_block.title)}</HeaderSection>
          <CardsAdditional cards={service.info.two_block.list} />
        </div>
      </div>
      <div className={`container ${s.wrapper_section_four}`}>
        <div className="w-[576px]">
          <p className={s.header_paragraph}>{t(service.info.title_second)}</p>
          <p className={s.text_paragraph}>{t(service.info.text_second)}</p>
        </div>
      </div>
      <div className={`container ${s.wrapper}`}>
        <HeaderSection>{t("ourServices.titlePage")}</HeaderSection>
        <Cards cards={cardsOurServices} />
      </div>
      <SectionGetInTouch />
    </div>
  );
};
