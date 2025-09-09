import { FC, Fragment, useId } from "react";
import s from "./languageSwitcher.module.scss";

const option = [
  { value: "en", label: "EN" },
  { value: "uk", label: "UA" },
];

interface LanguageSwitcherProps {
  currentLang: string;
  onLangChange: (lang: string) => void;
  customClassContainer?: string;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({
  currentLang,
  onLangChange,
  customClassContainer,
}) => {
  const uniqueId = useId();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    console.log(value);
    onLangChange(value);
  };

  return (
    <div className={`${s.container_radio} ${customClassContainer}`}>
      {option.map((option) => (
        <Fragment key={option.value}>
          <input
            type="radio"
            id={`${uniqueId}-${option.value}`}
            name={"languageOptions"}
            value={option.value}
            checked={currentLang === option.value}
            onChange={handleChange}
            className={s.input_radio}
          />
          <label htmlFor={`${uniqueId}-${option.value}`} className={s.label}>
            {option.label}
          </label>
        </Fragment>
      ))}
    </div>
  );
};
