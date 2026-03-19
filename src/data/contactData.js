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
    icon: <FaPhone size={16} />,
    id: 1,
  },
  {
    title: "naomycleaning911@gmail.com",
    src: "naomycleaning911@gmail.com",
    type: "message",
    icon: <MdLocalPostOffice size={16} />,
    id: 2,
  },
  {
    title: "telegram",
    src: "https://t.me/+380688282844",
    type: "link",
    icon: <FaTelegram size={16} />,
    id: 3,
  },
  {
    title: "viber",
    src: "viber://chat?number=%2B380688282844",
    type: "link",
    icon: <FaViber size={16} />,
    id: 4,
  },
  {
    title: "instagram",
    src: "https://daisyui.com/components/modal/#",
    type: "link",
    icon: <FaInstagram size={16} />,
    id: 5,
  },
];
