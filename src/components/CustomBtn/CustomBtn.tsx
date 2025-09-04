import React, { FC } from "react";
import s from "./customBtn.module.scss";
import { Link } from "react-router-dom";

interface ICustomBtnProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: "primary" | "secondary";
  additionalClass?: boolean;
  customClass?: string;
  noClass?: string;
  type?: "submit" | "button";
  isLink?: {
    to: string;
  };
}

export const CustomBtn: FC<ICustomBtnProps> = ({
  children,
  customClass,
  type = "button",
  onClick,
  variant = "primary",
  additionalClass,
  isLink,
  noClass,
}) => {
  return isLink ? (
    <Link
      to={isLink.to}
      className={
        additionalClass
          ? `${customClass} ${variant === "primary" ? s.primary : s.secondary}`
          : customClass
          ? customClass
          : variant === "primary"
          ? s.primary
          : s.secondary
      }
      type={type}
      onClick={onClick}
    >
      {children}
    </Link>
  ) : (
    <button
      className={
        additionalClass
          ? `${customClass} ${variant === "primary" ? s.primary : s.secondary}`
          : customClass
          ? customClass
          : variant === "primary"
          ? s.primary
          : s.secondary
      }
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
