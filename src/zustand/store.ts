import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { ILang, IMenuActive, IModalActive } from "./interfaces";
import i18n from "../i18n";

// export const useUser = create<IGetUser>()(
//   persist(
//     (set) => ({
//       user: null,
//       setUser: (value) => set({ user: value }),
//     }),
//     {
//       name: "user-storage",
//       storage: createJSONStorage(() => localStorage),
//     }
//   )
// );

// export const useAuth = create<IAuth>()(
//   persist(
//     (set) => ({
//       token: null,
//       refreshToken: null,
//       isAuth: false,
//       isVerify: false,
//       setToken: (token) => set({ token }),
//       setIsAuth: (isAuth) => set({ isAuth }),
//       setIsVerify: (isVerify) => set({ isVerify }),
//       setRefreshToken: (refreshToken) => set({ refreshToken }),
//     }),
//     {
//       name: "auth-storage",
//       storage: createJSONStorage(() => localStorage),
//     }
//   )
// );

// export const useLang = create<ILang>()(
//   devtools((set) => ({
//     lang: i18n.language.split("-")[0],
//     setLang: (newLang) => {
//       // Спочатку даємо команду i18next змінити мову
//       i18n.changeLanguage(newLang);
//       // Потім оновлюємо наш стан в Zustand
//       set({ lang: newLang });
//     },
//   }))
// );

export const useLang = create<ILang>()((set) => ({
  lang: i18n.language.split("-")[0],
  setLang: (newLang) => {
    i18n.changeLanguage(newLang);
    set({ lang: newLang });
    document.documentElement.setAttribute("data-lang", newLang);
  },
}));
export const useMenuActive = create<IMenuActive>()(
  devtools((set) => ({
    isOpenMenu: false,
    setIsOpenMenu: (isOpenMenu) => set({ isOpenMenu }),
  }))
);

export const useModalActive = create<IModalActive>()(
  devtools((set) => ({
    isOpenModal: false,
    setIsOpenModal: (isOpenModal) => set({ isOpenModal }),
  }))
);
