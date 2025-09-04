import { FC } from "react";
import { ReactComponent as CheckMark } from "../../img/check-mark.svg";
import s from "./personalVipProtection.module.scss";
import { useTranslation } from "react-i18next";

interface ICardsProtectionProps {
  cards: any[];
  isOneColumn?: boolean;
}

export const CardsProtection: FC<ICardsProtectionProps> = ({
  cards,
  isOneColumn,
}) => {
  const { t } = useTranslation();
  return (
    <ul
      className={
        isOneColumn
          ? `${s.list_protection} ${s.list_protection_oneColumn}`
          : s.list_protection
      }
    >
      {cards.map((card, index) => (
        <li className={s.item} key={index}>
          <CheckMark className={s.icon} />
          <p className={s.text_item}>
            <span className={s.text_item_first}>{t(card.title)}</span>{" "}
            <span className={s.text_item_second}>{t(card.subtitle)}</span>
          </p>
        </li>
      ))}
    </ul>
  );
};
