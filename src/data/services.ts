export const allServices = [
  {
    id: 1,
    titleFirst: "ourServices.additionalCards.cardOne.title_first",
    titleSecond: "ourServices.additionalCards.cardOne.title_second",
    subtitle: "ourServices.additionalCards.cardOne.subtitle",
  },
  {
    id: 2,
    titleFirst: "ourServices.additionalCards.cardTwo.title_first",
    titleSecond: "ourServices.additionalCards.cardTwo.title_second",
    subtitle: "ourServices.additionalCards.cardTwo.subtitle",
  },
  {
    id: 3,
    titleFirst: "ourServices.additionalCards.cardThree.title_first",
    titleSecond: "ourServices.additionalCards.cardThree.title_second",
    subtitle: "ourServices.additionalCards.cardThree.subtitle",
  },
  {
    id: 4,
    titleFirst: "ourServices.additionalCards.cardFour.title_first",
    titleSecond: "ourServices.additionalCards.cardFour.title_second",
    subtitle: "ourServices.additionalCards.cardFour.subtitle",
  },
  {
    id: 5,
    titleFirst: "ourServices.additionalCards.cardFive.title_first",
    titleSecond: "ourServices.additionalCards.cardFive.title_second",
    subtitle: "ourServices.additionalCards.cardFive.subtitle",
  },
  {
    id: 6,
    titleFirst: "ourServices.additionalCards.cardSix.title_first",
    titleSecond: "ourServices.additionalCards.cardSix.title_second",
    subtitle: "ourServices.additionalCards.cardSix.subtitle",
  },
  {
    id: 7,
    titleFirst: "ourServices.additionalCards.cardSeven.title_first",
    titleSecond: "ourServices.additionalCards.cardSeven.title_second",
    subtitle: "ourServices.additionalCards.cardSeven.subtitle",
  },
  {
    id: 8,
    titleFirst: "ourServices.additionalCards.cardEight.title_first",
    titleSecond: "ourServices.additionalCards.cardEight.title_second",
    subtitle: "ourServices.additionalCards.cardEight.subtitle",
  },
];

export interface IServiceListItem {
  title: string;
  subtitle?: string;
}

export interface IServiceBlock {
  title: string;
  list: IServiceListItem[];
  //   list: { [key: string]: IServiceListItem };
}

export interface IServiceInfo {
  title: string;
  text: string;
  one_block: IServiceBlock;
  two_block: IServiceBlock;
  title_second: string;
  text_second: string;
}

export interface IServiceCard {
  id: number;
  title_first: string;
  title_second: string;
  subtitle: string;
  info: IServiceInfo;
}

// export interface IAllServices {
//   additionalCards: IServiceCard[];
// }

// --- 2. Дані з ключами перекладів ---

export const allServicesData: IServiceCard[] = [
  {
    id: 1,
    title_first: "ourServices.additionalCards.cardOne.title_first",
    title_second: "ourServices.additionalCards.cardOne.title_second",
    subtitle: "ourServices.additionalCards.cardOne.subtitle",
    info: {
      title: "ourServices.additionalCards.cardOne.info.title",
      text: "ourServices.additionalCards.cardOne.info.text",
      one_block: {
        title: "ourServices.additionalCards.cardOne.info.one_block.title",
        list: [
          {
            title:
              "ourServices.additionalCards.cardOne.info.one_block.list.one.title",
            subtitle:
              "ourServices.additionalCards.cardOne.info.one_block.list.one.subtitle",
          },
          {
            title:
              "ourServices.additionalCards.cardOne.info.one_block.list.two.title",
            subtitle:
              "ourServices.additionalCards.cardOne.info.one_block.list.two.subtitle",
          },
          {
            title:
              "ourServices.additionalCards.cardOne.info.one_block.list.three.title",
            subtitle:
              "ourServices.additionalCards.cardOne.info.one_block.list.three.subtitle",
          },
          {
            title:
              "ourServices.additionalCards.cardOne.info.one_block.list.four.title",
            subtitle:
              "ourServices.additionalCards.cardOne.info.one_block.list.four.subtitle",
          },
          {
            title:
              "ourServices.additionalCards.cardOne.info.one_block.list.five.title",
            subtitle:
              "ourServices.additionalCards.cardOne.info.one_block.list.five.subtitle",
          },
          {
            title:
              "ourServices.additionalCards.cardOne.info.one_block.list.six.title",
            subtitle:
              "ourServices.additionalCards.cardOne.info.one_block.list.six.subtitle",
          },
        ],
      },
      two_block: {
        title: "ourServices.additionalCards.cardOne.info.two_block.title",
        list: [
          {
            title:
              "ourServices.additionalCards.cardOne.info.two_block.list.one.title",
          },
          {
            title:
              "ourServices.additionalCards.cardOne.info.two_block.list.two.title",
          },
          {
            title:
              "ourServices.additionalCards.cardOne.info.two_block.list.three.title",
          },
          {
            title:
              "ourServices.additionalCards.cardOne.info.two_block.list.four.title",
          },
          {
            title:
              "ourServices.additionalCards.cardOne.info.two_block.list.five.title",
          },
        ],
      },
      title_second: "ourServices.additionalCards.cardOne.info.title_second",
      text_second: "ourServices.additionalCards.cardOne.info.text_second",
    },
  },
  {
    id: 2,
    title_first: "ourServices.additionalCards.cardTwo.title_first",
    title_second: "ourServices.additionalCards.cardTwo.title_second",
    subtitle: "ourServices.additionalCards.cardTwo.subtitle",
    info: {
      title: "ourServices.additionalCards.cardTwo.info.title",
      text: "ourServices.additionalCards.cardTwo.info.text",
      one_block: {
        title: "ourServices.additionalCards.cardTwo.info.one_block.title",
        list: [
          {
            title:
              "ourServices.additionalCards.cardTwo.info.one_block.list.one.title",
            subtitle:
              "ourServices.additionalCards.cardTwo.info.one_block.list.one.subtitle",
          },
          {
            title:
              "ourServices.additionalCards.cardTwo.info.one_block.list.two.title",
            subtitle:
              "ourServices.additionalCards.cardTwo.info.one_block.list.two.subtitle",
          },
          {
            title:
              "ourServices.additionalCards.cardTwo.info.one_block.list.three.title",
            subtitle:
              "ourServices.additionalCards.cardTwo.info.one_block.list.three.subtitle",
          },
          {
            title:
              "ourServices.additionalCards.cardTwo.info.one_block.list.four.title",
            subtitle:
              "ourServices.additionalCards.cardTwo.info.one_block.list.four.subtitle",
          },
          {
            title:
              "ourServices.additionalCards.cardTwo.info.one_block.list.five.title",
            subtitle:
              "ourServices.additionalCards.cardTwo.info.one_block.list.five.subtitle",
          },
        ],
      },
      two_block: {
        title: "ourServices.additionalCards.cardTwo.info.two_block.title",
        list: [
          {
            title:
              "ourServices.additionalCards.cardTwo.info.two_block.list.one.title",
          },
          {
            title:
              "ourServices.additionalCards.cardTwo.info.two_block.list.two.title",
          },
          {
            title:
              "ourServices.additionalCards.cardTwo.info.two_block.list.three.title",
          },
          {
            title:
              "ourServices.additionalCards.cardTwo.info.two_block.list.four.title",
          },
        ],
      },
      title_second: "ourServices.additionalCards.cardTwo.info.title_second",
      text_second: "ourServices.additionalCards.cardTwo.info.text_second",
    },
  },
  {
    id: 3,
    title_first: "ourServices.additionalCards.cardThree.title_first",
    title_second: "ourServices.additionalCards.cardThree.title_second",
    subtitle: "ourServices.additionalCards.cardThree.subtitle",
    info: {
      title: "ourServices.additionalCards.cardThree.info.title",
      text: "ourServices.additionalCards.cardThree.info.text",
      one_block: {
        title: "ourServices.additionalCards.cardThree.info.one_block.title",
        list: [
          {
            title:
              "ourServices.additionalCards.cardThree.info.one_block.list.one.title",
            subtitle:
              "ourServices.additionalCards.cardThree.info.one_block.list.one.subtitle",
          },
          {
            title:
              "ourServices.additionalCards.cardThree.info.one_block.list.two.title",
            subtitle:
              "ourServices.additionalCards.cardThree.info.one_block.list.two.subtitle",
          },
          {
            title:
              "ourServices.additionalCards.cardThree.info.one_block.list.three.title",
            subtitle:
              "ourServices.additionalCards.cardThree.info.one_block.list.three.subtitle",
          },
          {
            title:
              "ourServices.additionalCards.cardThree.info.one_block.list.four.title",
            subtitle:
              "ourServices.additionalCards.cardThree.info.one_block.list.four.subtitle",
          },
          {
            title:
              "ourServices.additionalCards.cardThree.info.one_block.list.five.title",
            subtitle:
              "ourServices.additionalCards.cardThree.info.one_block.list.five.subtitle",
          },
          {
            title:
              "ourServices.additionalCards.cardThree.info.one_block.list.six.title",
            subtitle:
              "ourServices.additionalCards.cardThree.info.one_block.list.six.subtitle",
          },
        ],
      },
      two_block: {
        title: "ourServices.additionalCards.cardThree.info.two_block.title",
        list: [
          {
            title:
              "ourServices.additionalCards.cardThree.info.two_block.list.one.title",
          },
          {
            title:
              "ourServices.additionalCards.cardThree.info.two_block.list.two.title",
          },
          {
            title:
              "ourServices.additionalCards.cardThree.info.two_block.list.three.title",
          },
          {
            title:
              "ourServices.additionalCards.cardThree.info.two_block.list.four.title",
          },
          {
            title:
              "ourServices.additionalCards.cardThree.info.two_block.list.five.title",
          },
        ],
      },
      title_second: "ourServices.additionalCards.cardThree.info.title_second",
      text_second: "ourServices.additionalCards.cardThree.info.text_second",
    },
  },
  {
    id: 4,
    title_first: "ourServices.additionalCards.cardFour.title_first",
    title_second: "ourServices.additionalCards.cardFour.title_second",
    subtitle: "ourServices.additionalCards.cardFour.subtitle",
    info: {
      title: "ourServices.additionalCards.cardFour.info.title",
      text: "ourServices.additionalCards.cardFour.info.text",
      one_block: {
        title: "ourServices.additionalCards.cardFour.info.one_block.title",
        list: [
          {
            title:
              "ourServices.additionalCards.cardFour.info.one_block.list.one.title",
            subtitle:
              "ourServices.additionalCards.cardFour.info.one_block.list.one.subtitle",
          },
          {
            title:
              "ourServices.additionalCards.cardFour.info.one_block.list.two.title",
            subtitle:
              "ourServices.additionalCards.cardFour.info.one_block.list.two.subtitle",
          },
          {
            title:
              "ourServices.additionalCards.cardFour.info.one_block.list.three.title",
            subtitle:
              "ourServices.additionalCards.cardFour.info.one_block.list.three.subtitle",
          },
        ],
      },
      two_block: {
        title: "ourServices.additionalCards.cardFour.info.two_block.title",
        list: [
          {
            title:
              "ourServices.additionalCards.cardFour.info.two_block.list.one.title",
          },
          {
            title:
              "ourServices.additionalCards.cardFour.info.two_block.list.two.title",
          },
          {
            title:
              "ourServices.additionalCards.cardFour.info.two_block.list.three.title",
          },
          {
            title:
              "ourServices.additionalCards.cardFour.info.two_block.list.four.title",
          },
          {
            title:
              "ourServices.additionalCards.cardFour.info.two_block.list.five.title",
          },
        ],
      },
      title_second: "ourServices.additionalCards.cardFour.info.title_second",
      text_second: "ourServices.additionalCards.cardFour.info.text_second",
    },
  },
  {
    id: 5,
    title_first: "ourServices.additionalCards.cardFive.title_first",
    title_second: "ourServices.additionalCards.cardFive.title_second",
    subtitle: "ourServices.additionalCards.cardFive.subtitle",
    info: {
      title: "ourServices.additionalCards.cardFive.info.title",
      text: "ourServices.additionalCards.cardFive.info.text",
      one_block: {
        title: "ourServices.additionalCards.cardFive.info.one_block.title",
        list: [
          {
            title:
              "ourServices.additionalCards.cardFive.info.one_block.list.one.title",
            subtitle:
              "ourServices.additionalCards.cardFive.info.one_block.list.one.subtitle",
          },
          {
            title:
              "ourServices.additionalCards.cardFive.info.one_block.list.two.title",
            subtitle:
              "ourServices.additionalCards.cardFive.info.one_block.list.two.subtitle",
          },
          {
            title:
              "ourServices.additionalCards.cardFive.info.one_block.list.three.title",
            subtitle:
              "ourServices.additionalCards.cardFive.info.one_block.list.three.subtitle",
          },
          {
            title:
              "ourServices.additionalCards.cardFive.info.one_block.list.four.title",
            subtitle:
              "ourServices.additionalCards.cardFive.info.one_block.list.four.subtitle",
          },
          {
            title:
              "ourServices.additionalCards.cardFive.info.one_block.list.five.title",
            subtitle:
              "ourServices.additionalCards.cardFive.info.one_block.list.five.subtitle",
          },
          {
            title:
              "ourServices.additionalCards.cardFive.info.one_block.list.six.title",
            subtitle:
              "ourServices.additionalCards.cardFive.info.one_block.list.six.subtitle",
          },
        ],
      },
      two_block: {
        title: "ourServices.additionalCards.cardFive.info.two_block.title",
        list: [
          {
            title:
              "ourServices.additionalCards.cardFive.info.two_block.list.one.title",
          },
          {
            title:
              "ourServices.additionalCards.cardFive.info.two_block.list.two.title",
          },
          {
            title:
              "ourServices.additionalCards.cardFive.info.two_block.list.three.title",
          },
        ],
      },
      title_second: "ourServices.additionalCards.cardFive.info.title_second",
      text_second: "ourServices.additionalCards.cardFive.info.text_second",
    },
  },
  {
    id: 6,
    title_first: "ourServices.additionalCards.cardSix.title_first",
    title_second: "ourServices.additionalCards.cardSix.title_second",
    subtitle: "ourServices.additionalCards.cardSix.subtitle",
    info: {
      title: "ourServices.additionalCards.cardSix.info.title",
      text: "ourServices.additionalCards.cardSix.info.text",
      one_block: {
        title: "ourServices.additionalCards.cardSix.info.one_block.title",
        list: [
          {
            title:
              "ourServices.additionalCards.cardSix.info.one_block.list.one.title",
            subtitle:
              "ourServices.additionalCards.cardSix.info.one_block.list.one.subtitle",
          },
          {
            title:
              "ourServices.additionalCards.cardSix.info.one_block.list.two.title",
            subtitle:
              "ourServices.additionalCards.cardSix.info.one_block.list.two.subtitle",
          },
          {
            title:
              "ourServices.additionalCards.cardSix.info.one_block.list.three.title",
            subtitle:
              "ourServices.additionalCards.cardSix.info.one_block.list.three.subtitle",
          },
          {
            title:
              "ourServices.additionalCards.cardSix.info.one_block.list.four.title",
            subtitle:
              "ourServices.additionalCards.cardSix.info.one_block.list.four.subtitle",
          },
          {
            title:
              "ourServices.additionalCards.cardSix.info.one_block.list.five.title",
            subtitle:
              "ourServices.additionalCards.cardSix.info.one_block.list.five.subtitle",
          },
          {
            title:
              "ourServices.additionalCards.cardSix.info.one_block.list.six.title",
            subtitle:
              "ourServices.additionalCards.cardSix.info.one_block.list.six.subtitle",
          },
        ],
      },
      two_block: {
        title: "ourServices.additionalCards.cardSix.info.two_block.title",
        list: [
          {
            title:
              "ourServices.additionalCards.cardSix.info.two_block.list.one.title",
          },
          {
            title:
              "ourServices.additionalCards.cardSix.info.two_block.list.two.title",
          },
          {
            title:
              "ourServices.additionalCards.cardSix.info.two_block.list.three.title",
          },
          {
            title:
              "ourServices.additionalCards.cardSix.info.two_block.list.four.title",
          },
          {
            title:
              "ourServices.additionalCards.cardSix.info.two_block.list.five.title",
          },
        ],
      },
      title_second: "ourServices.additionalCards.cardSix.info.title_second",
      text_second: "ourServices.additionalCards.cardSix.info.text_second",
    },
  },
  {
    id: 7,
    title_first: "ourServices.additionalCards.cardSeven.title_first",
    title_second: "ourServices.additionalCards.cardSeven.title_second",
    subtitle: "ourServices.additionalCards.cardSeven.subtitle",
    info: {
      title: "ourServices.additionalCards.cardSeven.info.title",
      text: "ourServices.additionalCards.cardSeven.info.text",
      one_block: {
        title: "ourServices.additionalCards.cardSeven.info.one_block.title",
        list: [
          {
            title:
              "ourServices.additionalCards.cardSeven.info.one_block.list.one.title",
            subtitle:
              "ourServices.additionalCards.cardSeven.info.one_block.list.one.subtitle",
          },
          {
            title:
              "ourServices.additionalCards.cardSeven.info.one_block.list.two.title",
            subtitle:
              "ourServices.additionalCards.cardSeven.info.one_block.list.two.subtitle",
          },
          {
            title:
              "ourServices.additionalCards.cardSeven.info.one_block.list.three.title",
            subtitle:
              "ourServices.additionalCards.cardSeven.info.one_block.list.three.subtitle",
          },
          {
            title:
              "ourServices.additionalCards.cardSeven.info.one_block.list.four.title",
            subtitle:
              "ourServices.additionalCards.cardSeven.info.one_block.list.four.subtitle",
          },
          {
            title:
              "ourServices.additionalCards.cardSeven.info.one_block.list.five.title",
            subtitle:
              "ourServices.additionalCards.cardSeven.info.one_block.list.five.subtitle",
          },
          {
            title:
              "ourServices.additionalCards.cardSeven.info.one_block.list.six.title",
            subtitle:
              "ourServices.additionalCards.cardSeven.info.one_block.list.six.subtitle",
          },
        ],
      },
      two_block: {
        title: "ourServices.additionalCards.cardSeven.info.two_block.title",
        list: [
          {
            title:
              "ourServices.additionalCards.cardSeven.info.two_block.list.one.title",
          },
          {
            title:
              "ourServices.additionalCards.cardSeven.info.two_block.list.two.title",
          },
          {
            title:
              "ourServices.additionalCards.cardSeven.info.two_block.list.three.title",
          },
        ],
      },
      title_second: "ourServices.additionalCards.cardSeven.info.title_second",
      text_second: "ourServices.additionalCards.cardSeven.info.text_second",
    },
  },
  {
    id: 8,
    title_first: "ourServices.additionalCards.cardEight.title_first",
    title_second: "ourServices.additionalCards.cardEight.title_second",
    subtitle: "ourServices.additionalCards.cardEight.subtitle",
    info: {
      title: "ourServices.additionalCards.cardEight.info.title",
      text: "ourServices.additionalCards.cardEight.info.text",
      one_block: {
        title: "ourServices.additionalCards.cardEight.info.one_block.title",
        list: [
          {
            title:
              "ourServices.additionalCards.cardEight.info.one_block.list.one.title",
            subtitle:
              "ourServices.additionalCards.cardEight.info.one_block.list.one.subtitle",
          },
          {
            title:
              "ourServices.additionalCards.cardEight.info.one_block.list.two.title",
            subtitle:
              "ourServices.additionalCards.cardEight.info.one_block.list.two.subtitle",
          },
          {
            title:
              "ourServices.additionalCards.cardEight.info.one_block.list.three.title",
            subtitle:
              "ourServices.additionalCards.cardEight.info.one_block.list.three.subtitle",
          },
          {
            title:
              "ourServices.additionalCards.cardEight.info.one_block.list.four.title",
            subtitle:
              "ourServices.additionalCards.cardEight.info.one_block.list.four.subtitle",
          },
          {
            title:
              "ourServices.additionalCards.cardEight.info.one_block.list.five.title",
            subtitle:
              "ourServices.additionalCards.cardEight.info.one_block.list.five.subtitle",
          },
        ],
      },
      two_block: {
        title: "ourServices.additionalCards.cardEight.info.two_block.title",
        list: [
          {
            title:
              "ourServices.additionalCards.cardEight.info.two_block.list.one.title",
          },
          {
            title:
              "ourServices.additionalCards.cardEight.info.two_block.list.two.title",
          },
          {
            title:
              "ourServices.additionalCards.cardEight.info.two_block.list.three.title",
          },
          {
            title:
              "ourServices.additionalCards.cardEight.info.two_block.list.four.title",
          },
        ],
      },
      title_second: "ourServices.additionalCards.cardEight.info.title_second",
      text_second: "ourServices.additionalCards.cardEight.info.text_second",
    },
  },
];
