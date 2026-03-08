import { PricesList } from "./PricesList";
import { PricesData } from "@/data/pricesData";

export const PricesSection = () => {
  return (
    <section>
      <h2 className="text-sub-title">Наші ціни</h2>
      <PricesList list={PricesData} />
    </section>
  );
};
