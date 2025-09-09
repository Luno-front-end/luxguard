import { FC } from "react";
import { ReactComponent as DecorativeLine } from "../../img/decorative-line.svg";
import s from "./headerSection.module.scss";

interface IHeaderSectionProps {
  children: React.ReactNode;
  customWrapperClass?: string;
}

export const HeaderSection: FC<IHeaderSectionProps> = ({
  children,
  customWrapperClass,
}) => {
  return (
    <div className={`${s.header_wrapper} ${customWrapperClass}`}>
      <DecorativeLine className={s.decorative_line_left} />
      <h2 className={s.header}>{children}</h2>
      <DecorativeLine className={s.decorative_line_right} />
    </div>
  );
};
