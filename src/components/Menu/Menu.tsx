import React, { Fragment } from "react";
import s from "./menu.module.scss";
import { ReactComponent as Close } from "../../img/close.svg";
import { CustomBtn } from "../CustomBtn/CustomBtn";
import { useLang, useMenuActive } from "../../zustand/store";
import { HeaderModal } from "../HeaderModal/HeaderModal";
import { CustomRadioBtn } from "../CustomRadioBtn/CustomRadioBtn";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";

export const Menu = ({ currentLang, onLangChange }: any) => {
  const { isOpenMenu } = useMenuActive();
  const { t } = useTranslation();
  // const { lang, setLang } = useLang();

  const langOption = [
    { value: "en", label: "EN" },
    { value: "uk", label: "UA" },
  ];

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value } = event.target;
  //   setLang(value);
  // };

  return (
    <div
      className={`${
        isOpenMenu
          ? `${s.wrapper_menu} ${s.wrapper_menu_active}`
          : `${s.wrapper_menu}`
      }`}
    >
      {/* <div className={s.header_wrapper}>
        <CustomBtn
          customClass={`${s.btn} ${s.btn_close}`}
          onClick={() => setIsOpen(false)}
        >
          <Close />
        </CustomBtn>
        <h2 className={s.header}>navigation menu</h2>
      </div> */}

      <HeaderModal>{t("popups.menu")}</HeaderModal>
      <ul className={s.wrapper_btns}>
        <li className={s.item}>
          <CustomBtn customClass={`${s.btn} ${s.btn_style}`} onClick={() => {}}>
            {t("links.aboutUs")}
          </CustomBtn>
        </li>
        <li className={s.item}>
          <CustomBtn customClass={`${s.btn} ${s.btn_style}`} onClick={() => {}}>
            {t("links.privacyPolicy")}
          </CustomBtn>
        </li>
        <li className={s.item}>
          <CustomBtn customClass={`${s.btn} ${s.btn_style}`} onClick={() => {}}>
            {t("links.termsConditions")}
          </CustomBtn>
        </li>
        <li className={s.item}>
          <CustomBtn customClass={`${s.btn} ${s.btn_style}`} onClick={() => {}}>
            {t("links.cookiePreferences")}
          </CustomBtn>
        </li>
      </ul>

      <div className={s.wrapper_language}>
        <LanguageSwitcher
          currentLang={currentLang}
          onLangChange={onLangChange}
        />
      </div>
    </div>
  );
};
