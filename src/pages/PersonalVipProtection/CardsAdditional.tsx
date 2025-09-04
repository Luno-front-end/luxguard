import { FC } from "react";
import s from "./personalVipProtection.module.scss";
import { useTranslation } from "react-i18next";

interface ICardsAdditionalProps {
  cards: {
    title: string;
  }[];
}

export const CardsAdditional: FC<ICardsAdditionalProps> = ({ cards }) => {
  const { t } = useTranslation();
  return (
    <ul className={s.list_additional}>
      {cards.map((card, index) => (
        <li className={s.item_additional}>
          <p className={s.text_additional}>{t(card.title)}</p>
        </li>
      ))}
    </ul>
  );
};
