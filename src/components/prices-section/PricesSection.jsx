import { PricesList } from "./PricesList";
import { PricesData } from "@/data/pricesData";

export const PricesSection = () => {
  return (
    <section className="mx-4">
      <h2>Наші ціни</h2>
      <PricesList list={PricesData} />
    </section>
  );
};
