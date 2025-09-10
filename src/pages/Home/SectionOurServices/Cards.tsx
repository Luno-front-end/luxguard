import { FC, JSX } from "react";
import s from "./sectionOurServices.module.scss";
import { ReactComponent as Person } from "../../../img/person.svg";
import { CustomBtn } from "../../../components/CustomBtn/CustomBtn";
import { useTranslation } from "react-i18next";
import { manifest } from "../../../data/manifest";

import { ReactComponent as PersonIcon } from "../../../img/person.svg";
import { ReactComponent as PitIcon } from "../../../img/PIT-all-serv-icon.svg";
import { ReactComponent as VavIcon } from "../../../img/VAV-all-serv-icon.svg";
import { ReactComponent as TuIcon } from "../../../img/TU-all-serv-icon.svg";
import { ReactComponent as SlvdIcon } from "../../../img/SLVD-all-serv-icon.svg";
import { ReactComponent as PcrIcon } from "../../../img/PCR-all-serv-icon.svg";
import { ReactComponent as EacIcon } from "../../../img/EAC-all-serv-icon.svg";
import { ReactComponent as RmIcon } from "../../../img/RM-all-serv-icon.svg";

interface ICardsProps {
  cards: {
    id: number;
    img: string;
    titleFirst: string;
    titleSecond: string;
    subtitle: string;
  }[];
}

const iconMap: { [key: string]: JSX.Element } = {
  personIcon: <PersonIcon className={s.icon}/>,
  pitIcon: <PitIcon className={s.icon}/>,
  vavIcon: <VavIcon className={s.icon}/>,
  tuIcon: <TuIcon className={s.icon}/>,
  slvdIcon: <SlvdIcon className={s.icon}/>,
  pcrIcon: <PcrIcon className={s.icon}/>,
  eacIcon: <EacIcon className={s.icon}/>,
  rmIcon: <RmIcon className={s.icon}/>,
};

export const Cards: FC<ICardsProps> = ({ cards }) => {
  const { t } = useTranslation();
  return (
    <ul className={s.list}>
      {cards.map((card, index) => (
        <li className={s.item_card} key={index}>
          <div className={s.icon_wrapper}>
            {iconMap[card.img]}
          </div>
          <div>
            <h3 className={s.header_card}>
              <span> {t(card.titleFirst)}</span>{" "}
              <span>{t(card.titleSecond)}</span>
            </h3>
            <p className={s.text_card}>{t(card.subtitle)}</p>
            <div className={s.wrapper_btn}>
              <CustomBtn
                onClick={() => {}}
                variant="secondary"
                additionalClass={true}
                customClass={s.btn}
                isLink={{
                  to: `${manifest.allServices.path}/${card.id}`,
                }}
              >
                {t("buttons.btnLearnMore")}
              </CustomBtn>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
