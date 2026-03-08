import { GiEcology } from "react-icons/gi";

export const ChoiceCardsData = [
  {
    title: "Єкологія та безпека",
    iconsList: [
      <GiEcology size={60} key={1} />,
      <GiEcology size={60} key={2} />,
      <GiEcology size={60} key={3} />,
    ],
    imgData: {
      src: "/about.webp",
      alt: "clininggggggg",
    },
    description:
      "Мы используем только сертифицированные гипоаллергенные средства, безопасные для детей и домашних животных",
    colors: {
      from: "from-card-eco-top",
      to: "to-card-eco-bottom",
      icon: "text-card-eco-bottom",
    },
    id: 1,
  },
  {
    title: "Технологічний підхід",
    iconsList: [
      <GiEcology size={60} key={1} />,
      <GiEcology size={60} key={2} />,
      <GiEcology size={60} key={3} />,
    ],
    imgData: {
      src: "/about.webp",
      alt: "clininggggggg2222222222",
    },
    description:
      "В нашем арсенале — профессиональное оборудование, которое позволяет добиваться результата",
    colors: {
      from: "from-card-tehno-top",
      to: "to-card-tehno-bottom",
      icon: "text-card-tehno-bottom",
    },
    id: 2,
  },
  {
    title: "Турбота про ваш час",
    iconsList: [
      <GiEcology size={60} key={1} />,
      <GiEcology size={60} key={2} />,
      <GiEcology size={60} key={3} />,
    ],
    imgData: {
      src: "/about.webp",
      alt: "clininggggggg2222222222",
    },
    description:
      "Пока мы доводим поверхности до блеска, вы можете посвятить время семье, хобби или отдыху. ",
    colors: {
      from: "from-card-care-top",
      to: "to-card-care-bottom",
      icon: "text-card-care-bottom",
    },
    id: 3,
  },
];
