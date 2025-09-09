import { CustomBtn } from "../CustomBtn/CustomBtn";
import s from "./btnUp.module.scss";
import { ReactComponent as Arrow } from "../../img/arrow-select.svg";

export const BtnUp = () => {
  return (
    <div className={s.wrapper}>
      <CustomBtn
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        variant="secondary"
        customClass={s.btn}
        additionalClass={true}
      >
        <Arrow className={s.arrow} />
      </CustomBtn>
    </div>
  );
};
