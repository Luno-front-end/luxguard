// components/CustomCheckbox.tsx
import React, { useState } from "react";
import s from "./customCheckbox.module.scss";
import { ReactComponent as CheckIcon } from "../../img/check.svg"; // Імпортуємо нашу іконку

interface CustomCheckboxProps {
  label?: string; // Необов'язковий текст поруч з чекбоксом
  initialChecked?: boolean;
  onChange?: (checked: boolean) => void;
}

export const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  label,
  initialChecked = false,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(initialChecked);

  const handleToggle = () => {
    const newState = !isChecked;
    setIsChecked(newState);
    onChange?.(newState); // Викликаємо callback, якщо він є
  };

  return (
    <label className={s.wrapper}>
      {/* Прихований стандартний чекбокс */}
      <input
        type="checkbox"
        className={s.nativeCheckbox}
        checked={isChecked}
        onChange={handleToggle}
      />

      {/* Наш кастомний вигляд */}
      <span className={`${s.customCheckbox} ${isChecked ? s.checked : ""}`}>
        {isChecked && <CheckIcon />} {/* Показуємо галочку, якщо вибрано */}
      </span>

      {/* Текст поруч з чекбоксом, якщо він є */}
      {label && <span className={s.label}>{label}</span>}
    </label>
  );
};
