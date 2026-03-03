import { ServicesCard } from "./ServicesCard";

export const ServicesList = ({ list }) => {
  return (
    <ul className="grid justify-center">
      {list?.map((item) => (
        <li key={item.id} id={item.href}>
          <ServicesCard data={item} />
        </li>
      ))}
    </ul>
  );
};
