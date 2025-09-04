import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ContactTab } from "../../../components/ContactTab/ContactTab";
import { CustomForm } from "../../../components/CustomForm/CustomForm";
import { CustomRadioBtn } from "../../../components/CustomRadioBtn/CustomRadioBtn";
import { ReactComponent as Logo } from "../../../img/logo.svg";
import s from "./sectionGetInTouch.module.scss";

export const SectionGetInTouch = () => {
  const [selectedValue, setSelectedValue] = useState("form");

  const { t } = useTranslation();

  const contactOptions = [
    { value: "form", label: t("buttons.btnCallMeBack") },
    { value: "call", label: t("buttons.btnIllCallYou") },
  ];

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value } = event.target;
  //   setSelectedValue(value);
  // };

  //   getInTouch
  // callYou
  // first
  // second
  // third

  return (
    <div className={`container ${s.wrapper}`}>
      <div className={s.wrapper_logo}>
        <Logo className={s.logo} />
      </div>
      <h2 className={s.header}>{t("getInTouch.title")}</h2>

      <CustomRadioBtn
        options={contactOptions}
        name="contactOptions"
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
      />
      {/* <p className={s.text}>
        {" "}
        {selectedValue === "form" ? (
          t("getInTouch.subtitle")
        ) : (
          <>
            <span className={s.callYou_wrapper}>
              <span className={s.callYou_first}>
                {t("getInTouch.callYou.first")}
              </span>{" "}
              <span className={s.callYou_wrapper_second}>
                {" "}
                <span className={s.callYou_second}>
                  {t("getInTouch.callYou.second")}
                </span>{" "}
                <span className={s.callYou_third}>
                  {t("getInTouch.callYou.third")}
                </span>
              </span>
            </span>
          </>
        )}
      </p> */}
      {selectedValue === "form" ? <CustomForm /> : <ContactTab />}
    </div>
  );
};
