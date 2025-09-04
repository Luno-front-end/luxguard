import s from "./sectionGetInTouch.module.scss";
import { ReactComponent as Logo } from "../../../img/logo.svg";
import { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";
import { CustomCheckbox } from "../../../components/CustomCheckbox/CustomCheckbox";
import { CustomSelect } from "../../../components/CustomSelect/CustomSelect";
import { CustomRadioBtn } from "../../../components/CustomRadioBtn/CustomRadioBtn";
import { CustomForm } from "../../../components/CustomForm/CustomForm";

export const SectionGetInTouch = () => {
  const [selectedValue, setSelectedValue] = useState("form");
  const [isOpen, setIsOpen] = useState(false);

  const { t } = useTranslation();

  const contactOptions = [
    { value: "form", label: t("buttons.btnCallMeBack") },
    { value: "call", label: t("buttons.btnIllCallYou") },
  ];

  const serviceOptions = [
    { value: "protection", label: "Personal VIP Protection" },
    { value: "transport", label: "Armored Transport" },
    { value: "consulting", label: "Crisis Consulting" },
  ];

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value } = event.target;
  //   setSelectedValue(value);
  // };

  return (
    <div className={`container ${s.wrapper}`}>
      <div className={s.wrapper_logo}>
        <Logo className={s.logo} />
      </div>
      <h2 className={s.header}>{t("getInTouch.title")}</h2>
      {/* <div className={s.wrapper_contact_options}>
        <div className={s.container_radio}>
          {contactOptions.map((option) => (
            <Fragment key={option.value}>
              <input
                type="radio"
                id={option.value}
                name={"contactOptions"}
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
      </div> */}
      <CustomRadioBtn
        options={contactOptions}
        name="contactOptions"
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
      />
      <p className={s.text}>{t("getInTouch.subtitle")}</p>
      <CustomForm />
    </div>
  );
};
