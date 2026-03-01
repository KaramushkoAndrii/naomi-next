import { PricesCard } from "./PricesCard";

export const PricesList = ({ list }) => {
  return (
    <div className="grid justify-center">
      {list.map((item, index) => (
        <PricesCard key={index} card={item} />
      ))}
    </div>
  );
};
