import { Dispatch, FC, Fragment, SetStateAction, useState } from "react";
import s from "./customRadioBtn.module.scss";

interface ICustomRadioBtnProps {
  options: {
    value: string;
    label: string;
  }[];
  name: string;
  selectedValue: string;
  setSelectedValue: Dispatch<SetStateAction<string>>;
  customClassContainer?: string;
  additionalClass?: string;
}

export const CustomRadioBtn: FC<ICustomRadioBtnProps> = ({
  options,
  name,
  selectedValue,
  setSelectedValue,
  customClassContainer,
  additionalClass,
}) => {
  //   const [selectedValue, setSelectedValue] = useState("form");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSelectedValue(value);
  };

  // s.container_radio

  return (
    <div className={s.wrapper_contact_options}>
      <div
        className={
          additionalClass
            ? `${s.container_radio} ${additionalClass}`
            : customClassContainer
            ? customClassContainer
            : s.container_radio
        }
      >
        {options.map((option) => (
          <Fragment key={option.value}>
            <input
              type="radio"
              id={option.value}
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={handleChange}
              className={s.input_radio}
            />
            <label htmlFor={option.value} className={s.label}>
              {option.label}
            </label>
          </Fragment>
        ))}
      </div>
    </div>
  );
};
