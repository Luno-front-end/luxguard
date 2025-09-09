import { HeaderSection } from "../../components/HeaderSection/HeaderSection";
import { SectionGetInTouch } from "../Home/SectionGetInTouch/SectionGetInTouch";
import s from "./policyTerms.module.scss";

export const Terms = () => {
  return (
    <div>
      <div className="container">
        <div className={s.wrapper}>
          <h1 className={s.header_g}>Terms & Conditions</h1>
          <div className={s.wrapper_header}>
            <HeaderSection customWrapperClass={s.wrapper_header_policy}>
              general
            </HeaderSection>
          </div>
          <div className={s.wrapper_all_content}>
            <div className={s.wrapper_content}>
              <h3 className={s.header}>general</h3>
              <div className={s.text_wrapper}>
                <p className={s.text}>
                  Welcome to the LUXGUARD Prestige Group. If you continue to
                  browse and use our site, you are agreeing to, complying with
                  and are bound to the following terms and conditions of use,
                  which govern LUXGUARD Prestige Group relationship with you
                  with regards to this website. If you don’t agree with any part
                  of these terms and conditions, please do not continue to use
                  our website. The term LUXGUARD Prestige Group, or ‘us’ or ‘we’
                  refers to the owner of this website whose registered office is
                  at 6th Floor, 100 Liverpool Street London EC2M 2AT United
                  Kingdom. Our company registration number is 11356534.The term
                  ‘you’ refers to the user or viewer of our website.
                </p>
                <p className={s.text}>
                  Welcome to the LUXGUARD Prestige Group. If you continue to
                  browse and use our site, you are agreeing to, complying with
                  and are bound to the following terms and conditions of use,
                  which govern LUXGUARD Prestige Group relationship with you
                  with regards to this website. If you don’t agree with any part
                  of these terms and conditions, please do not continue to use
                  our website. The term LUXGUARD Prestige Group, or ‘us’ or ‘we’
                  refers to the owner of this website whose registered office is
                  at 6th Floor, 100 Liverpool Street London EC2M 2AT United
                  Kingdom. Our company registration number is 11356534.The term
                  ‘you’ refers to the user or viewer of our website.
                </p>
              </div>
            </div>
            <div className={s.wrapper_content}>
              <h3 className={s.header}>Additional</h3>
              <div className={s.text_wrapper}>
                <p>
                  Welcome to the LUXGUARD Prestige Group. If you continue to
                  browse and use our site, you are agreeing to, complying with
                  and are bound to the following terms and conditions of use,
                  which govern LUXGUARD Prestige Group relationship with you
                  with regards to this website. If you don’t agree with any part
                  of these terms and conditions, please do not continue to use
                  our website. The term LUXGUARD Prestige Group, or ‘us’ or ‘we’
                  refers to the owner of this website whose registered office is
                  at 6th Floor, 100 Liverpool Street London EC2M 2AT United
                  Kingdom. Our company registration number is 11356534.The term
                  ‘you’ refers to the user or viewer of our website.
                </p>
                <p>
                  Welcome to the LUXGUARD Prestige Group. If you continue to
                  browse and use our site, you are agreeing to, complying with
                  and are bound to the following terms and conditions of use,
                  which govern LUXGUARD Prestige Group relationship with you
                  with regards to this website. If you don’t agree with any part
                  of these terms and conditions, please do not continue to use
                  our website. The term LUXGUARD Prestige Group, or ‘us’ or ‘we’
                  refers to the owner of this website whose registered office is
                  at 6th Floor, 100 Liverpool Street London EC2M 2AT United
                  Kingdom. Our company registration number is 11356534.The term
                  ‘you’ refers to the user or viewer of our website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={s.wrapper_get_in_touch}>
        <SectionGetInTouch />
      </div>
    </div>
  );
};
