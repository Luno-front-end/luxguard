// components/CustomSelect.tsx
import React, { Dispatch, SetStateAction, useState } from "react";
import s from "./customSelect.module.scss";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { ReactComponent as Arrow } from "../../img/arrow-select.svg";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  placeholder?: string;
  label?: string; // Для напису "REQUIRED"
  onChange?: (value: string) => void;
  setIsOpenCustom?: Dispatch<SetStateAction<boolean>>;
  isOpenCustom?: boolean;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  placeholder = "Select an option",
  label,
  onChange,
  setIsOpenCustom,
  isOpenCustom,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleToggle = () =>
    setIsOpenCustom ? setIsOpenCustom(!isOpenCustom) : setIsOpen(!isOpen);

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);

    if (setIsOpenCustom) {
      setIsOpenCustom(false);
    } else {
      setIsOpen(false);
    }
    onChange?.(option.value);
  };

  // Використовуємо хук, щоб закривати селект при кліку ззовні
  const selectRef = useOutsideClick(() =>
    setIsOpenCustom ? setIsOpenCustom(false) : setIsOpen(false)
  );

  return (
    <div className={s.wrapper} ref={selectRef}>
      <div className={s.header} onClick={handleToggle}>
        <div className={s.headerText}>
          {label && <span className={s.topLabel}>{label}</span>}
          <span className={s.placeholder}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </div>
        {/* <div className={`${s.arrow} ${isOpen ? s.open : ""}`} /> */}
        <Arrow
          className={`${s.arrow} ${
            isOpenCustom ? (isOpenCustom ? s.open : "") : isOpen ? s.open : ""
          }`}
        />
      </div>

      {(isOpenCustom ? isOpenCustom : isOpen) && (
        <ul className={s.optionsList}>
          {options.map((option) => (
            <li
              key={option.value}
              className={s.option}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
