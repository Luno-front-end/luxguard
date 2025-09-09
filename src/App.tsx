import { Route, Routes, useLocation } from "react-router-dom";
import { manifest } from "./data/manifest";
import { Home } from "./pages/Home/Home";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { useEffect } from "react";
import { useLang } from "./zustand/store";
import { useTranslation } from "react-i18next";
import { AllServices } from "./pages/AllServices/AllServices";
import { PersonalVipProtection } from "./pages/PersonalVipProtection/PersonalVipProtection";
import { Menu } from "./components/Menu/Menu";
import { Modal } from "./components/Modal/Modal";
import { AboutUs } from "./pages/AboutUs/AboutUs";
import { ScrollToTop } from "./hooks/useScrollToTop";
import { Policy } from "./pages/PolicyTerms/Policy";
import { Terms } from "./pages/PolicyTerms/Terms";
import { BtnUp } from "./components/BtnUp/BtnUp";

export const App = () => {
  const { lang, setLang } = useLang();
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <>
      <ScrollToTop />
      <Menu currentLang={lang} onLangChange={setLang} />
      <Header currentLang={lang} onLangChange={setLang} />
      <Routes>
        <Route path={manifest.home.path} element={<Home />} />
        <Route path={manifest.allServices.path} element={<AllServices />} />
        <Route
          path={`${manifest.allServices.path}/:id`}
          element={<PersonalVipProtection />}
        />
        <Route path={`${manifest.aboutUs.path}`} element={<AboutUs />} />
        <Route path={`${manifest.policy.path}`} element={<Policy />} />
        <Route path={`${manifest.terms.path}`} element={<Terms />} />
      </Routes>
      <Footer />
      <Modal />
    </>
  );
};
