import s from "./policyTerms.module.scss";
import { HeaderSection } from "../../components/HeaderSection/HeaderSection";
import { SectionGetInTouch } from "../Home/SectionGetInTouch/SectionGetInTouch";

export const Policy = () => {
  return (
    <div>
      <div className="container">
        <div className={s.wrapper}>
          <h1 className={s.header_g}>Privacy Policy</h1>
          <div className={s.wrapper_header}>
            <HeaderSection customWrapperClass={s.wrapper_header_policy}>
              Discretion is not a formality. It is our foundation
            </HeaderSection>
          </div>
          <div className={s.wrapper_all_content}>
            <div className={s.wrapper_content}>
              <h3 className={s.header}>At LUXGUARD PRESTIGE GROUP</h3>
              <p className={s.text}>
                We recognize that our clients entrust us not only with their
                safety — but with their privacy. This Policy reflects our
                commitment to maintaining the highest standard of
                confidentiality and integrity in all aspects of data handling.
              </p>
            </div>
            <div className={s.wrapper_content}>
              <h3 className={s.header}>We may collect:</h3>
              <div className={s.text_wrapper}>
                <p>
                  Your contact information (name, email, phone) only when you
                  provide it voluntarily
                </p>
                <p>
                  Essential technical data to ensure the security and
                  functionality of our website
                </p>
                <p>No sensitive data without your explicit consent</p>
              </div>
            </div>
            <div className={s.wrapper_content}>
              <h3 className={s.header}>How we use it:</h3>
              <div className={s.text_wrapper}>
                <p>
                  To respond to your inquiries with the attention they deserve
                </p>
                <p>
                  To coordinate service logistics with precision and discretion
                </p>
                <p>
                  To maintain secure internal operations, strictly within legal
                  frameworks
                </p>
                <p>
                  Your information is never shared, sold, or profiled. We
                  process all data in full compliance with the General Data
                  Protection Regulation (GDPR) and international best practices.
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
