import { FC, Fragment, useId } from "react";
import s from "./languageSwitcher.module.scss";
import { useLang } from "../../zustand/store";

// interface ILanguageSwitcherProps {
//   option: { value: string; label: string }[];
// }

const option = [
  { value: "en", label: "EN" },
  { value: "uk", label: "UA" },
];

interface LanguageSwitcherProps {
  currentLang: string;
  onLangChange: (lang: string) => void;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({
  currentLang,
  onLangChange,
}) => {
  //   const { lang, setLang } = useLang();

  const uniqueId = useId();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    console.log(value);
    onLangChange(value);
  };

  return (
    <div className={s.container_radio}>
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
