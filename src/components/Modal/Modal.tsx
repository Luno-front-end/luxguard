import React, { useState } from "react";
import s from "./modal.module.scss";
import { HeaderModal } from "../HeaderModal/HeaderModal";
import { CustomRadioBtn } from "../CustomRadioBtn/CustomRadioBtn";
import { useTranslation } from "react-i18next";
import { CustomForm } from "../CustomForm/CustomForm";
import { useModalActive } from "../../zustand/store";
import { ContactTab } from "../ContactTab/ContactTab";

export const Modal = () => {
  const [selectedValue, setSelectedValue] = useState("formModal");

  const { isOpenModal } = useModalActive();

  const { t } = useTranslation();

  const contactOptions = [
    { value: "formModal", label: t("buttons.btnCallMeBack") },
    { value: "callModal", label: t("buttons.btnIllCallYou") },
  ];
  return (
    <div
      className={
        isOpenModal
          ? `${s.wrapper_modal} ${s.wrapper_modal_active}`
          : s.wrapper_modal
      }
    >
      <HeaderModal reverse={true} isMenu={false}>
        {t("popups.modal")}
      </HeaderModal>
      <div>
        <CustomRadioBtn
          options={contactOptions}
          name="contactOptionsModal"
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
          additionalClass={s.container_radio_modal}
        />
      </div>
      <p className={s.text}>
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
      </p>
      {selectedValue === "formModal" ? (
        <CustomForm isMini={true} />
      ) : (
        <ContactTab />
      )}
    </div>
  );
};
