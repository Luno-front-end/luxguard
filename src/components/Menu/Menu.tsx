import React from "react";
import s from "./menu.module.scss";
import { ReactComponent as Close } from "../../img/close.svg";
import { CustomBtn } from "../CustomBtn/CustomBtn";
import { useMenuActive } from "../../zustand/store";
import { HeaderModal } from "../HeaderModal/HeaderModal";

export const Menu = () => {
  const { isOpenMenu } = useMenuActive();

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

      <HeaderModal>navigation menu</HeaderModal>
      <ul className={s.wrapper_btns}>
        <li className={s.item}>
          <CustomBtn customClass={`${s.btn} ${s.btn_style}`} onClick={() => {}}>
            About Us
          </CustomBtn>
        </li>
        <li className={s.item}>
          <CustomBtn customClass={`${s.btn} ${s.btn_style}`} onClick={() => {}}>
            Privacy Policy
          </CustomBtn>
        </li>
        <li className={s.item}>
          <CustomBtn customClass={`${s.btn} ${s.btn_style}`} onClick={() => {}}>
            Terms & Conditions
          </CustomBtn>
        </li>
        <li className={s.item}>
          <CustomBtn customClass={`${s.btn} ${s.btn_style}`} onClick={() => {}}>
            Cookie Preferences
          </CustomBtn>
        </li>
        {/* <li className={s.item}></li> */}
      </ul>
    </div>
  );
};
