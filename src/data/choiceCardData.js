import { GiEcology } from "react-icons/gi";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { AiOutlineSafety } from "react-icons/ai";
import { HiOutlineCpuChip } from "react-icons/hi2";
import { MdOutlineAutoFixHigh } from "react-icons/md";
import { TbSettingsAutomation } from "react-icons/tb";
import { MdOutlineAccessTime } from "react-icons/md";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { RiUserSmileLine } from "react-icons/ri";

export const ChoiceCardsData = [
  {
    title: "Єкологія та безпека",
    iconsList: [
      <MdOutlineHealthAndSafety size={60} key={1} />,
      <GiEcology size={60} key={2} />,
      <AiOutlineSafety size={60} key={3} />,
    ],
    imgData: {
      src: "/eco.webp",
      alt: "eco clining Naomy",
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
      <HiOutlineCpuChip size={60} key={1} />,
      <MdOutlineAutoFixHigh size={60} key={2} />,
      <TbSettingsAutomation size={60} key={3} />,
    ],
    imgData: {
      src: "/techno.webp",
      alt: "profecional cliner",
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
      <MdOutlineAccessTime size={60} key={1} />,
      <HiOutlineRocketLaunch size={60} key={2} />,
      <RiUserSmileLine size={60} key={3} />,
    ],
    imgData: {
      src: "/time.webp",
      alt: "save your time with Naomy clining",
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
