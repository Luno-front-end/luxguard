import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { useViewportSize } from "../../hooks/useViewport";
import { ReactComponent as Logo } from "../../img/logo.svg";
import { ReactComponent as Menu } from "../../img/menu.svg";
import { CustomBtn } from "../CustomBtn/CustomBtn";
import s from "./header.module.scss";
// import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLocation } from "react-router-dom";
import { useLang, useMenuActive, useModalActive } from "../../zustand/store";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";

const contactOptions = [
  { value: "en", label: "EN" },
  { value: "uk", label: "UA" },
];

export const Header = ({ currentLang, onLangChange }: any) => {
  const { t } = useTranslation();
  const location = useLocation();

  const currentPath = location.pathname;

  const isVipProtectionPage = currentPath === "/personal-vip-protection";

  const { setLang, lang } = useLang();

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value } = event.target;
  //   setLang(value);
  // };
  const { width } = useViewportSize();

  const { setIsOpenMenu } = useMenuActive();
  const { setIsOpenModal } = useModalActive();

  return (
    <div
      className={`${
        isVipProtectionPage ? `${s.wrapper} ${s.wrapper_fixed}` : s.wrapper
      } flex justify-between ${width >= 1280 ? "items-center" : ""}`}
    >
      <div>
        <CustomBtn
          customClass={s.btn}
          onClick={() => {
            setIsOpenMenu(true);
            setIsOpenModal(false);
          }}
        >
          <Menu className={`${width < 1280 ? "" : "w-[24px] h-[24px]"}`} />
        </CustomBtn>
      </div>

      {width < 1280 ? (
        <div className="flex">
          <CustomBtn
            onClick={() => {}}
            additionalClass={true}
            customClass={s.btn_logo}
            isLink={{ to: "/" }}
          >
            <Logo className={`"mr-[24px]`} />
          </CustomBtn>

          <CustomBtn
            onClick={() => {
              setIsOpenModal(true);
              setIsOpenMenu(false);
            }}
          >
            {t("buttons.btnGetInTouch")}
          </CustomBtn>
        </div>
      ) : (
        <>
          <CustomBtn
            onClick={() => {}}
            additionalClass={true}
            customClass={s.btn_logo}
            isLink={{ to: "/" }}
          >
            <Logo className={`w-[45.411px] h-[47.997px] ${s.logo}`} />
          </CustomBtn>
          <div className="flex">
            {/* <div className={s.container_radio}>
              {contactOptions.map((option) => (
                <Fragment key={option.value}>
                  <input
                    type="radio"
                    id={option.value}
                    name={"languageOptions"}
                    value={option.value}
                    checked={lang === option.value}
                    onChange={handleChange}
                    className={s.input_radio}
                  />
                  <label htmlFor={option.value} className={s.label}>
                    {option.label}
                  </label>
                </Fragment>
              ))}
            </div> */}

            <LanguageSwitcher
              currentLang={currentLang}
              onLangChange={onLangChange}
            />
            <CustomBtn
              onClick={() => {
                setIsOpenModal(true);
                setIsOpenMenu(false);
              }}
              customClass={s.btn_desk}
              additionalClass={true}
            >
              {t("buttons.btnGetInTouch")}
            </CustomBtn>
          </div>
        </>
      )}
    </div>
  );
};
