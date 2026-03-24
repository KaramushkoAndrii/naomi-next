import { PricesList } from "./PricesList";

export const PricesSection = ({ data }) => {
  const { title, list, tooltip } = data;
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-sub-title py-4">{title}</h2>
      <PricesList list={list} />
      <span className="text-sm">{tooltip}</span>
    </section>
  );
};
