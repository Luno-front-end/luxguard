import React, { FC } from "react";
import { Header } from "../../components/Header/Header";
import { SectionsHero } from "../Home/SectionsHero/SectionsHero";
import { Cards } from "../Home/SectionOurServices/Cards";
import { useTranslation } from "react-i18next";
import s from "./allServices.module.scss";
import { ReactComponent as DecorativeLine } from "../../img/decorative-line.svg";
import { SectionAskedQuestions } from "../Home/SectionAskedQuestions/SectionAskedQuestions";
import { SectionGetInTouch } from "../Home/SectionGetInTouch/SectionGetInTouch";
import { allServices } from "../../data/services";

interface IAllServicesProps {
  cards?: {
    id: number;
    titleFirst: string;
    titleSecond: string;
    subtitle: string;
  };
}

export const AllServices: FC<IAllServicesProps> = ({ cards }) => {
  const { t } = useTranslation();

  return (
    <div>
      {/* <Header /> */}
      {/* <h2 className=>all our Services</h2> */}
      <SectionsHero isAllServices={true} />
      <div className="container">
        <div className={s.wrapper}>
          <div className={s.header_wrapper}>
            <DecorativeLine className={s.decorative_line_left} />
            <h2 className={s.header}>{t("ourServices.titlePage")}</h2>
            <DecorativeLine className={s.decorative_line_right} />
          </div>
          <Cards cards={allServices} />
        </div>
      </div>
      <SectionAskedQuestions />
      <SectionGetInTouch />
    </div>
  );
};
