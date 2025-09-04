import { useTranslation } from "react-i18next";
import s from "./customForm.module.scss";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { FC, useState } from "react";
import { CustomCheckbox } from "../CustomCheckbox/CustomCheckbox";

interface ICustomFormProps {
  isMini?: boolean;
}

export const CustomForm: FC<ICustomFormProps> = ({ isMini = false }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const serviceOptions = [
    { value: "protection", label: "Personal VIP Protection" },
    {
      value: "transport",
      label: "premium level International transportation",
    },
    { value: "VIPtransfer", label: "VIP transfer by armored van" },
    { value: "transfersUkraine/EU", label: "Transfers Ukraine/EU" },
    { value: "logistics", label: "Safe logistics and VIP delivery" },
    { value: "premiumCarRental", label: "Premium car rental" },
    { value: "assessment", label: "Expert assessment and consulting" },
    { value: "risk", label: "Risk management" },
  ];

  return (
    <form action="">
      <div className={isMini ? "" : s.wrapper_content_desk}>
        {" "}
        <div className={isMini ? "" : s.wrapper_inputs_desk}>
          <div className={s.wrapper_input_form}>
            <p className={s.subHolder}>
              {t("getInTouch.inputs.inputName.req")}
            </p>
            <input
              type="text"
              placeholder={t("getInTouch.inputs.inputName.first")}
              className={`${s.input_form} ${s.withCustomPholder}`}
            />
          </div>
          <div className={s.wrapper_input_form}>
            <input
              type="text"
              placeholder={t("getInTouch.inputs.inputLastName.first")}
              className={s.input_form}
            />
          </div>
          <div className={s.wrapper_input_form}>
            <input
              type="text"
              placeholder={t("getInTouch.inputs.inputEmail.first")}
              className={`${s.input_form}`}
            />
          </div>
          <div className={s.wrapper_input_form}>
            <p className={s.subHolder}>
              {t("getInTouch.inputs.inputPhone.req")}
            </p>
            <input
              type="text"
              placeholder={t("getInTouch.inputs.inputPhone.first")}
              className={`${s.input_form}  ${s.withCustomPholder}`}
            />
          </div>
          <div
            className={
              isOpen
                ? `${s.wrapper_input_form} ${s.wrapper_input_form_noBorder}`
                : s.wrapper_input_form
            }
          >
            {/* <p className={s.subHolder}>
                {t("getInTouch.inputs.placeholder.req")}
              </p>
              <input
                type="text"
                placeholder={t("getInTouch.inputs.placeholder.first")}
                className={`${s.input_form} ${s.withCustomPholder}`}
              /> */}
            <CustomSelect
              label={t("getInTouch.inputs.placeholder.req")}
              placeholder={t("getInTouch.inputs.placeholder.first")}
              options={serviceOptions}
              onChange={(value) => console.log("Selected service:", value)}
              isOpenCustom={isOpen}
              setIsOpenCustom={setIsOpen}
            />
          </div>
        </div>
        <div className={isMini ? "" : s.wrapper_textarea_desk}>
          {" "}
          <div className={s.wrapper_textarea}>
            <textarea
              name=""
              id=""
              placeholder={t("getInTouch.inputs.message")}
              className={s.textarea_form}
            ></textarea>
          </div>
          <div className={s.wrapper_input_form_policy}>
            {/* <input type="checkbox" id="policy" className={s.input_checkbox} /> */}

            <div className={s.input_checkbox}>
              <CustomCheckbox />
            </div>

            <p className={s.label_form_policy}>
              {t("getInTouch.policy.textFirst")}{" "}
              <a href="https://google.com" className={s.link}>
                {t("getInTouch.policy.linkOne")}
              </a>{" "}
              {t("getInTouch.policy.textSecond")}{" "}
              <a href="https://google.com" className={s.link}>
                Terms & Conditions.
                {t("getInTouch.policy.linkTwo")}
              </a>
            </p>
          </div>
          <div className={isMini ? "" : s.wrapper_btn_desk}>
            <button className={s.btn_book}>
              {t("buttons.btnBookConsultation")}
            </button>
          </div>
          <div className={s.wrapper_info_text}>
            <p className={s.info_text}>{t("getInTouch.lastText")}</p>
          </div>
        </div>
      </div>
    </form>
  );
};
