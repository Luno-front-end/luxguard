import { Route, Routes } from "react-router-dom";
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

export const App = () => {
  const { lang } = useLang();
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <>
      <Menu />
      <Header />
      <Routes>
        <Route path={manifest.home.path} element={<Home />} />
        <Route path={manifest.allServices.path} element={<AllServices />} />
        <Route
          path={`${manifest.allServices.path}/:id`}
          element={<PersonalVipProtection />}
        />
        {/* <Route
          path={manifest.personalVipProtection.path}
          element={<PersonalVipProtection />}
        /> */}
      </Routes>
      <Footer />
      <Modal />
    </>
  );
};
