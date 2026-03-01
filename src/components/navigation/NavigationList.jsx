import Link from "next/link";
import { NavigationServices } from "./NavigationServices";
import { NavigationServicesData } from "@/data/navigationData";

export const NavigationList = ({ list, classNames }) => {
  return (
    <ul className={classNames}>
      {list.map((navigationItem) => (
        <li key={navigationItem.id}>
          <Link href={navigationItem.src}>{navigationItem.text}</Link>
        </li>
      ))}
      <li>
        <NavigationServices list={NavigationServicesData} />
      </li>
    </ul>
  );
};
