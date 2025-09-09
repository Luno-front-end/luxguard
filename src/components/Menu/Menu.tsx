import { useTranslation } from "react-i18next";
import { useMenuActive, useModalActive } from "../../zustand/store";
import { CustomBtn } from "../CustomBtn/CustomBtn";
import { HeaderModal } from "../HeaderModal/HeaderModal";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import s from "./menu.module.scss";
import { manifest } from "../../data/manifest";
import { useEffect, useRef, useState } from "react";
import { ReactComponent as Arrow } from "../../img/arrow-menu.svg";

export const Menu = ({ currentLang, onLangChange }: any) => {
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const { isOpenMenu, setIsOpenMenu } = useMenuActive();
  const { setIsOpenModal } = useModalActive();
  const { t } = useTranslation();

  const modalRef = useRef<HTMLDivElement | null>(null);

  const onClose = () => {
    setIsOpenMenu(false);
    setIsOpenModal(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpenMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpenMenu]);

  return (
    <div
      ref={modalRef}
      className={`${
        isOpenMenu
          ? `${s.wrapper_menu} ${s.wrapper_menu_active}`
          : `${s.wrapper_menu}`
      }`}
    >
      <HeaderModal>{t("popups.menu")}</HeaderModal>
      <ul className={s.wrapper_btns}>
        <li className={s.item}>
          <CustomBtn
            customClass={`${s.btn} ${s.btn_style}`}
            onClick={onClose}
            isLink={{ to: manifest.aboutUs.path }}
          >
            {t("links.aboutUs")}
          </CustomBtn>
        </li>
        <li className={s.item_nav}>
          <CustomBtn
            customClass={`${s.btn} ${s.btn_style} ${
              isOpenSelect && s.active_btn
            }`}
            onClick={() => setIsOpenSelect(!isOpenSelect)}
          >
            <p className={s.select_btn}>
              <span>{t("links.ourServices")}</span>
              <span>
                <Arrow className={s.arrow_icon} />
              </span>
            </p>
          </CustomBtn>
          <div
            className={
              isOpenSelect ? s.open_menu : `${s.open_menu} ${s.close_menu}`
            }
          >
            <div className={s.wrapper_solo_btn}>
              <CustomBtn onClick={() => {}} customClass={s.btn_open_nav}>
                personal VIP protection
              </CustomBtn>
            </div>
            <div className={s.wrapper_solo_btn}>
              <CustomBtn onClick={() => {}} customClass={s.btn_open_nav}>
                armored transportation
              </CustomBtn>
            </div>
            <div className={s.wrapper_solo_btn}>
              <CustomBtn onClick={() => {}} customClass={s.btn_open_nav}>
                special missions
              </CustomBtn>
            </div>
            <div className={s.wrapper_solo_btn}>
              <CustomBtn onClick={() => {}} customClass={s.btn_open_nav}>
                Armored car rental
              </CustomBtn>
            </div>
            <CustomBtn onClick={() => {}}>Book Consultation</CustomBtn>
          </div>
        </li>
        <li className={s.item}>
          <CustomBtn
            customClass={`${s.btn} ${s.btn_style}`}
            onClick={onClose}
            isLink={{ to: manifest.policy.path }}
          >
            {t("links.privacyPolicy")}
          </CustomBtn>
        </li>
        <li className={s.item}>
          <CustomBtn
            customClass={`${s.btn} ${s.btn_style}`}
            onClick={onClose}
            isLink={{ to: manifest.terms.path }}
          >
            {t("links.termsConditions")}
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
