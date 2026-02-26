import { PricesCard } from "./PricesCard";

export const PricesList = ({ list }) => {
  return (
    <div>
      {list.map((item, index) => (
        <PricesCard key={index} card={item} />
      ))}
    </div>
  );
};
