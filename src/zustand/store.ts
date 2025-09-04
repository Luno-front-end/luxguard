import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { ILang, IMenuActive, IModalActive } from "./interfaces";

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

export const useLang = create<ILang>()(
  devtools((set) => ({
    lang: "en",
    setLang: (lang) => set({ lang }),
  }))
);

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
