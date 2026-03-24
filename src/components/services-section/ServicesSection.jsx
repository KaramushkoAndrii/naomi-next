import { ServicesList } from "./ServicesList";

export const ServicesSection = ({ data }) => {
  const { title, list } = data;
  return (
    <section className="my-4">
      <h2 className="text-sub-title py-4">{title}</h2>

      <ServicesList list={list} />
    </section>
  );
};
