import { NavigationData } from "@/data/navigationData";
import { NavigationServicesData } from "@/data/navigationData";
import { ContactData } from "@/data/contactData";
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
          {ContactData.map(({ type, id, src, icon: Icon, colorClass }) => {
            if (type === "link") {
              return (
                <li
                  key={id}
                  className={`${colorClass} transition-transform duration-300 hover:scale-110`}
                >
                  <Link href={src} target="__blank">
                    <Icon size={40} />
                  </Link>
                </li>
              );
            }
          })}
        </ul>
      </nav>
    </footer>
  );
};
