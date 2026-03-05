import { PricesCard } from "./PricesCard";

export const PricesList = ({ list }) => {
  return (
    <div className="flex flex-col flex-wrap justify-center items-center gap-8 md:flex-row md:items-stretch">
      {list.map((item, index) => (
        <PricesCard key={index} card={item} />
      ))}
    </div>
  );
};
