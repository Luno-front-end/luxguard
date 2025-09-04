type TManifest = {
  path: string;
  title: string;
  // subTitle?: string;
  // titlePattern?: string;
  // backPath?: string;
  // replaceParam?: IReplace[];
  // replaceSearch?: ISReplace[];
  // addParamTitle?: boolean;
  // addParamSubTitle?: boolean;
  // description: string;
  // customEditTitle?: boolean;
  // newTabIconLink?: {
  //   target: "_blank" | "_self";
  //   icon: string;
  // };
};

export const manifest: Record<string, TManifest> = {
  home: {
    path: "/",
    title: "",
  },
  allServices: {
    path: "/all-services",
    title: "",
  },
  personalVipProtection: {
    path: "/personal-vip-protection",
    title: "",
  },
};
