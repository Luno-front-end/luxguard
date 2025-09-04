import { FC, useState } from "react";
// import s from "";
import s from "./sectionAskedQuestions.module.scss";
import { ReactComponent as Minus } from "../../../img/minus.svg";
import { ReactComponent as Plus } from "../../../img/plus.svg";
import { ReactComponent as DecorativeLine } from "../../../img/decorative-line.svg";
import { CustomBtn } from "../../../components/CustomBtn/CustomBtn";
import { useTranslation } from "react-i18next";

export const SectionAskedQuestions: FC = () => {
  const { t } = useTranslation();

  const faqData = [
    {
      id: 1,
      title: t("askedQuestions.cards.cardOne.title"),
      content: t("askedQuestions.cards.cardOne.subtitle"),
    },
    {
      id: 2,
      title: t("askedQuestions.cards.cardTwo.title"),
      content: t("askedQuestions.cards.cardTwo.subtitle"),
    },
    {
      id: 3,
      title: t("askedQuestions.cards.cardThree.title"),
      content: t("askedQuestions.cards.cardThree.subtitle"),
    },
    {
      id: 4,
      title: t("askedQuestions.cards.cardFour.title"),
      content: t("askedQuestions.cards.cardFour.subtitle"),
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // <div className={s.wrapper}>
    //   <div className="container">
    //     <div className={s.header_wrapper}>
    //       <DecorativeLine className={s.decorative_line_left} />
    //       <h2 className={s.header}>{t("askedQuestions.title")}</h2>
    //       <DecorativeLine className={s.decorative_line_right} />
    //     </div>
    //   </div>
    //   <ul className={s.list}>
    //     {faqData.map((item, index) => {
    //       const isOpen = openIndex === index;

    //       return (
    //         <li key={item.id} className={`${s.item} ${isOpen ? s.open : ""}`}>
    //           <div
    //             className={s.header_wrapper}
    //             onClick={() => handleToggle(index)}
    //           >
    //             <h3 className={s.header_card}>{item.title}</h3>
    //             <button className={`${isOpen ? s.btn : s.btn_active}`}>
    //               {isOpen ? <Minus /> : <Plus />}
    //             </button>
    //           </div>
    //           <p className={s.text}>{item.content}</p>
    //         </li>
    //       );
    //     })}
    //   </ul>
    // </div>
    <></>
  );
};
