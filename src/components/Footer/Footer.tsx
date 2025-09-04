import s from "./footer.module.scss";
import { ReactComponent as Logo } from "../../img/logo.svg";
import { CustomBtn } from "../CustomBtn/CustomBtn";
import { useTranslation } from "react-i18next";
import { manifest } from "../../data/manifest";
import { useMenuActive, useModalActive } from "../../zustand/store";

export const Footer = () => {
  const { t } = useTranslation();
  const { setIsOpenModal } = useModalActive();
  const { setIsOpenMenu } = useMenuActive();

  return (
    <div className={`container ${s.wrapper}`}>
      <CustomBtn
        onClick={() => {}}
        additionalClass={true}
        customClass={s.btn_logo}
        isLink={{ to: "/" }}
      >
        <Logo className={s.logo} />
      </CustomBtn>
      <p className={s.menu_footer}>
        <a href="http://google.com" className={s.link}>
          {t("links.ourServices")}
        </a>
        <span className={s.slash}>/</span>
        <a href="http://google.com" className={s.link}>
          {t("links.aboutUs")}
        </a>
        <span className={s.slash}>/</span>
      </p>
      <p className={s.menu_footer}>
        <a href="http://google.com" className={s.link}>
          {t("links.privacyPolicy")}
        </a>
        <span className={s.slash}>/</span>
        <a href="http://google.com" className={s.link}>
          {t("links.termsConditions")}
        </a>
      </p>
      <p className={s.menu_footer}>
        <span className={s.slash_last}>/</span>
        <a href="http://google.com" className={s.link}>
          {t("links.cookiePreferences")}
        </a>
      </p>

      <CustomBtn
        onClick={() => {
          setIsOpenModal(true);
          setIsOpenMenu(false);
        }}
        additionalClass={true}
        customClass={s.btn}
      >
        {t("buttons.btnGetInTouch")}
      </CustomBtn>
    </div>
  );
};
