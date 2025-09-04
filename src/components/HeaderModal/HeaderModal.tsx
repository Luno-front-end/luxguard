import React, { FC } from "react";
import { CustomBtn } from "../CustomBtn/CustomBtn";
import s from "./headerModal.module.scss";
import { ReactComponent as Close } from "../../img/close.svg";
import { useMenuActive, useModalActive } from "../../zustand/store";

interface IHeaderModalProps {
  children: React.ReactNode;
  isMenu?: boolean;
  reverse?: boolean;
}

export const HeaderModal: FC<IHeaderModalProps> = ({
  children,
  isMenu = true,
  reverse = false,
}) => {
  const { setIsOpenMenu } = useMenuActive();
  const { setIsOpenModal } = useModalActive();

  return (
    <div
      className={
        reverse
          ? `${s.header_wrapper} ${s.header_wrapper_reverse}`
          : s.header_wrapper
      }
    >
      <CustomBtn
        customClass={
          reverse
            ? `${s.btn} ${s.btn_close} ${s.btn_close_reverse}`
            : `${s.btn} ${s.btn_close}`
        }
        onClick={() => (isMenu ? setIsOpenMenu(false) : setIsOpenModal(false))}
      >
        <Close />
      </CustomBtn>
      <h2 className={s.header}>{children}</h2>
    </div>
  );
};
