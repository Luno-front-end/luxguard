import { FC } from "react";
import s from "./sectionOurServices.module.scss";
import { ReactComponent as Person } from "../../../img/person.svg";
import { CustomBtn } from "../../../components/CustomBtn/CustomBtn";
import { useTranslation } from "react-i18next";
import { manifest } from "../../../data/manifest";

interface ICardsProps {
  cards: {
    id: number;
    titleFirst: string;
    titleSecond: string;
    subtitle: string;
  }[];
}

export const Cards: FC<ICardsProps> = ({ cards }) => {
  const { t } = useTranslation();
  return (
    <ul className={s.list}>
      {cards.map((card, index) => (
        <li className={s.item_card} key={index}>
          <div className={s.icon_wrapper}>
            <Person />
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
