import { useTranslation } from "react-i18next";
import { CustomBtn } from "../../components/CustomBtn/CustomBtn";
import { HeaderSection } from "../../components/HeaderSection/HeaderSection";
import { SectionGetInTouch } from "../Home/SectionGetInTouch/SectionGetInTouch";
import { CardsAdditional } from "../PersonalVipProtection/CardsAdditional";
import { CardsProtection } from "../PersonalVipProtection/CardsProtection";
import s from "./aboutUs.module.scss";
import { useMenuActive, useModalActive } from "../../zustand/store";
import { useViewportSize } from "../../hooks/useViewport";

export const AboutUs = () => {
  const cards = [
    { title: "Security without improvisation", subtitle: "" },
    { title: "Template-free solutions", subtitle: "" },
    { title: "Full adaptation to changes", subtitle: "" },
  ];

  const { t } = useTranslation();
  const { setIsOpenModal } = useModalActive();
  const { setIsOpenMenu } = useMenuActive();

  const { width } = useViewportSize();

  return (
    <>
      <div className="container">
        <div className={s.wrapper}>
          <h1 className={s.header_top}>About US</h1>
          <div className={s.wrapper_one}>
            <HeaderSection>LUXGUARD PRESTIGE GROUP</HeaderSection>
            <p className={s.text}>
              <span className={s.subText}>
                is not just a security company. It is a strategic partner that
                provides personal safety, armored transportation, VIP support,
                crisis consulting and risk management for customers working in a
                dynamic and high-risk environment.
              </span>
              <span className={s.subText}>
                We speak the language of those responsible — leaders, diplomats,
                international delegations and private individuals who need not
                symbolic protection, but proven solutions based on experience,
                threat prevention and complete privacy.
              </span>
              <span className={s.subText}>
                Our team — is officers from special forces, state structures and
                diplomatic missions, used to acting under the pressure of time,
                in the war zone and emergency situations.
              </span>
              <span className={s.subText}>
                We work at the intersection of security, mobility and
                operational analysis, providing an accurate result where there
                is no right to error.
              </span>
              <span className={s.subText}>
                LUXGUARD operates in Ukraine, the EU and border regions —
                wherever reliability, experience and strategic thinking are
                needed.
              </span>
            </p>
          </div>
          <div className={s.wrapper_two}>
            <HeaderSection>How we work</HeaderSection>
            <h3 className={s.header_wrapper_two}>
              Clarity. Transparency. The result.
            </h3>
            <p className={s.text}>
              Each request — is unique. But the principles remain the same:
              strategic planning, full coordination and control at every stage.
              LUXGUARD PRESTIGE GROUP acts as a single management center for
              your security, mobility, and privacy.
            </p>
          </div>
          <div className={s.wrapper_three}>
            <HeaderSection>Our approach — 5 key stages</HeaderSection>
            <ul className={s.list}>
              <li className={s.item}>
                <h3 className={s.headerList}>Task analysis</h3>
                <p className={s.textList}>
                  We study the request, event format, risk level, publicity,
                  special needs of the client.
                </p>
              </li>
              <li className={s.item}>
                <h3 className={s.headerList}>Decision formation</h3>
                <p className={s.textList}>
                  We select the optimal team, vehicle, means of communication,
                  support and technical resources.
                </p>
              </li>
              <li className={s.item}>
                <h3 className={s.headerList}>Approval and planning</h3>
                <p className={s.textList}>
                  We work out the route, briefing, backup scenarios. All — with
                  customer approval.
                </p>
              </li>
              <li className={s.item}>
                <h3 className={s.headerList}>Implementation and support</h3>
                <p className={s.textList}>
                  We implement the solution: the LPG — team is involved, guards,
                  drivers, coordinators, dispatch center. Control 24/7.
                </p>
              </li>
              <li className={s.item}>
                <h3 className={s.headerList}>Reporting and analysis</h3>
                <p className={s.textList}>
                  After completing —, a detailed report, performance evaluation
                  and recommendations for the future.
                </p>
              </li>
            </ul>
          </div>
          <div className={s.wrapper_four}>
            <HeaderSection>We guarantee</HeaderSection>
            <div className={s.wrapper_four_card}>
              <CardsProtection cards={cards} isOneColumn={width >= 1280} />
            </div>
            <div className="flex justify-center">
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
          </div>
        </div>
      </div>
      <div className={s.wrapper_getInTouch}>
        <SectionGetInTouch />
      </div>
    </>
  );
};
