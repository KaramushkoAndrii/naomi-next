import { MdOutlineHealthAndSafety } from "react-icons/md";
import { BsLightningCharge } from "react-icons/bs";
import { IoDiamondOutline } from "react-icons/io5";
import { BiLeaf } from "react-icons/bi";
import { MdDoneOutline } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";

export const AdvantageListData = [
  {
    id: 1,
    text: "Безпечно",
    icon: <MdOutlineHealthAndSafety size={60} />,
  },
  {
    id: 2,
    text: "Оперативність",
    icon: <BsLightningCharge size={60} />,
  },
  {
    id: 3,
    text: "Ідеально чисто",
    icon: <IoDiamondOutline size={60} />,
  },
  {
    id: 4,
    text: "Екологічно",
    icon: <BiLeaf size={60} />,
  },
  {
    id: 5,
    text: "Досвідчені майстри",
    icon: <MdDoneOutline size={60} />,
  },
  {
    id: 6,
    text: "Гнучкий графік",
    icon: <FaRegClock size={60} />,
  },
];
