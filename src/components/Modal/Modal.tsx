import React, { useState } from "react";
import s from "./modal.module.scss";
import { HeaderModal } from "../HeaderModal/HeaderModal";
import { CustomRadioBtn } from "../CustomRadioBtn/CustomRadioBtn";
import { useTranslation } from "react-i18next";
import { CustomForm } from "../CustomForm/CustomForm";
import { useModalActive } from "../../zustand/store";

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
        navigation menu
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
      <CustomForm isMini={true} />
    </div>
  );
};
