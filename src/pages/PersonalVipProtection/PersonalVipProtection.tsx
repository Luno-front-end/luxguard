import React from "react";
import { SectionGetInTouch } from "../Home/SectionGetInTouch/SectionGetInTouch";
import { Cards } from "../Home/SectionOurServices/Cards";
import { useTranslation } from "react-i18next";
import { SectionsHero } from "../Home/SectionsHero/SectionsHero";
import { HeaderSection } from "../../components/HeaderSection/HeaderSection";
import { ReactComponent as CheckMark } from "../../img/check-mark.svg";
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

  //   "ourServices": {
  //   "title": "our Services",
  //   "titlePage": "all our Services",

  //   "additionalCards": {
  //     "cardOne": {
  //       "title_first": "personal",
  //       "title_second": "VIP protection",
  //       "subtitle": "In the modern rhythm of life, security must be discreet yet absolute. LUXGUARD PRESTIGE GROUP provides personal protection for VIPs in Ukraine and abroad—creating conditions where you can fully concentrate on negotiations, decision-making, or public events. We operate in a 'silent presence' format, which does not attract attention but keeps the situation completely under control. This is not just security. This is personalized risk management in real time.",
  //       "info": {
  //         "title": "Clean, control and quality",
  //         "text": "In the modern rhythm of life, security should be invisible, but absolute. LUXGUARD PRESTIGE GROUP provides personal protection to VIPs in Ukraine and abroad — creating conditions in which you can fully focus on negotiations, decision-making or public events. We act in the «format of a quiet presence» that does not attract attention, but completely keeps the situation under control. It's — not just security. This is personalized risk management in real time.",
  //         "one_block": {
  //           "title": "LUXGUARD provides",
  //           "list": {
  //             "one": {
  //               "title": "Personal Security Officer (CPO) with combat,",
  //               "subtitle": "government or diplomatic experience"
  //             },
  //             "two": {
  //               "title": "Premium cars with a driver-guard",
  //               "subtitle": "(Mercedes-Benz V-Class)"
  //             },
  //             "three": {
  //               "title": "Armored vehicles (protection level B6/B7) —",
  //               "subtitle": "on individual request"
  //             },
  //             "four": {
  //               "title": "Route planning, risk assessment and control",
  //               "subtitle": "of key points"
  //             },
  //             "five": {
  //               "title": "Real-time Global Positioning System (GPS)",
  //               "subtitle": "monitoring"
  //             },
  //             "six": {
  //               "title": "Compliance with complete confidentiality",
  //               "subtitle": "and discretion at all stages of interaction"
  //             }
  //           }
  //         },
  //         "two_block": {
  //           "title": "Who is this service for",
  //           "list": {
  //             "one": {
  //               "title": "High-ranking officials and government representatives"
  //             },
  //             "two": {
  //               "title": "Business leaders, investors, top management"
  //             },
  //             "three": {
  //               "title": "Public figures, artists, diplomats"
  //             },
  //             "four": {
  //               "title": "Foreign delegations and strategic visits"
  //             },
  //             "five": {
  //               "title": "VIP guests of conferences, events, and international summits"
  //             }
  //           }
  //         },
  //         "title_second": "Security is not a demonstration of force. It is the space to focus on what matters.",
  //         "text_second": "LUXGUARD PRESTIGE GROUP creates not only safe routes but also an atmosphere of complete confidence, where every step is controlled, discreet, and well-thought-out."
  //       }
  //     },

  //   }
  // },

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
          // subtitle: t(service.info.text),
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
            get in touch
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
