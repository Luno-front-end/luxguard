export interface ILang {
  lang: string;
  setLang: (value: any) => void;
}

export interface IMenuActive {
  isOpenMenu: boolean;
  setIsOpenMenu: (isOpenMenu: boolean) => void;
}

export interface IModalActive {
  isOpenModal: boolean;
  setIsOpenModal: (isOpenModal: boolean) => void;
}
