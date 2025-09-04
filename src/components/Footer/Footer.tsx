import s from "./footer.module.scss";
import { ReactComponent as Logo } from "../../img/logo.svg";
import { CustomBtn } from "../CustomBtn/CustomBtn";

export const Footer = () => {
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
          our Services
        </a>
        <span className={s.slash}>/</span>
        <a href="http://google.com" className={s.link}>
          About Us
        </a>
        <span className={s.slash}>/</span>
      </p>
      <p className={s.menu_footer}>
        <a href="http://google.com" className={s.link}>
          Privacy Policy
        </a>
        <span className={s.slash}>/</span>
        <a href="http://google.com" className={s.link}>
          Terms & Conditions
        </a>
      </p>
      <p className={s.menu_footer}>
        <span className={s.slash_last}>/</span>
        <a href="http://google.com" className={s.link}>
          Cookie Preferences
        </a>
      </p>

      <CustomBtn onClick={() => {}} additionalClass={true} customClass={s.btn}>
        Get in touch
      </CustomBtn>
    </div>
  );
};
