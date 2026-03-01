import { NavigationData } from "@/data/navigationData";
import { NavigationServicesData } from "@/data/navigationData";
import { SocialData } from "@/data/socialData";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10">
      <nav>
        <h6 className="footer-title">Про компанію</h6>
        <ul className="grid gap-2">
          {NavigationData.map((item) => (
            <li key={item.id}>
              <Link className="link link-hover" href={item.src}>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav>
        <h6 className="footer-title">Наші послуги</h6>
        <ul className="grid gap-2">
          {NavigationServicesData.map((item) => (
            <li key={item.id}>
              <Link className="link link-hover" href={item.src}>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav>
        <h6 className="footer-title">Ми в соціальних мережах</h6>
        <ul className="flex gap-2">
          {SocialData.map((item) => (
            <li key={item.id}>
              <Link href={item.src} target="__blank">
                {item.icon}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};
