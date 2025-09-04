import React, { useState } from "react";
import s from "./contactTab.module.scss";
import { ReactComponent as CheckIcon } from "../../img/checked-icon.svg";
import { ReactComponent as CopyIcon } from "../../img/copy-icon.svg";
import { ReactComponent as CopyIconActive } from "../../img/copy-icon-active.svg";

const phoneNumbers = ["+38 (099) 999-55-55", "+38 (099) 888-44-44"]; // Ваші номери телефонів

export const ContactTab = () => {
  const [selectedNumber, setSelectedNumber] = useState(phoneNumbers[0]);

  const handleNumberClick = (number: string) => {
    setSelectedNumber(number);

    navigator.clipboard.writeText(number).catch((err) => {
      console.error("Не вдалося скопіювати текст: ", err);
    });
  };

  const formattedTelLink = `tel:${selectedNumber.replace(/[\s()-]/g, "")}`;

  return (
    <div className={` ${s.container_tab}`}>
      <div className={s.wrapper}>
        <div className={s.numbersContainer}>
          {phoneNumbers.map((number) => (
            <div
              key={number}
              className={`${s.numberRow} ${
                selectedNumber === number ? s.active : ""
              }`}
              onClick={() => handleNumberClick(number)}
            >
              <div className={s.checkbox}>
                {selectedNumber === number && <CheckIcon />}
              </div>
              <span
                className={
                  selectedNumber === number
                    ? `${s.numberText} ${s.numberTextActive}`
                    : s.numberText
                }
              >
                {number}
              </span>
              <div className={s.copyIcon}>
                {selectedNumber === number ? <CopyIconActive /> : <CopyIcon />}
              </div>
            </div>
          ))}
        </div>

        <a href={formattedTelLink} className={s.callButton}>
          Call for consultation
        </a>
      </div>
    </div>
  );
};
