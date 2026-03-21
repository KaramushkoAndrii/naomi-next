import { PricesList } from "./PricesList";
import { PricesData } from "@/data/pricesData";

export const PricesSection = () => {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-sub-title py-4">Наші ціни</h2>
      <PricesList list={PricesData} />
      <span className="text-sm">* - за попередньою домовленістю</span>
    </section>
  );
};
