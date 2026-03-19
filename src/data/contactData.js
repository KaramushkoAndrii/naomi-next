import { FaPhone } from "react-icons/fa";
import { MdLocalPostOffice } from "react-icons/md";
import { FaTelegram } from "react-icons/fa";
import { FaViber } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const ContactData = [
  {
    title: "0688282844",
    src: "0688282844",
    type: "tel",
    icon: FaPhone,
    colorClass: "text-primary-violet",
    id: 1,
  },
  {
    title: "naomycleaning911@gmail.com",
    src: "naomycleaning911@gmail.com",
    type: "message",
    icon: MdLocalPostOffice,
    colorClass: "text-primary-violet",
    id: 2,
  },
  {
    title: "telegram",
    src: "https://t.me/+380688282844",
    type: "link",
    icon: FaTelegram,
    colorClass: "text-[#24A1DE]",
    id: 3,
  },
  {
    title: "viber",
    src: "viber://chat?number=380688282844",
    type: "link",
    icon: FaViber,
    colorClass: "text-[#7360f2]",
    id: 4,
  },
  {
    title: "instagram",
    src: "https://daisyui.com/components/modal/#",
    type: "link",
    icon: FaInstagram,
    colorClass: "text-[#E1306C]",
    id: 5,
  },
];
