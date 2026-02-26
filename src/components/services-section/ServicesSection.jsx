import { ServicesList } from "./ServicesList";
import { ServicesListData } from "@/data/servicesListData";

export const ServicesSection = () => {
  return (
    <section className="m-4">
      <h2>Наші послуги</h2>

      <ServicesList list={ServicesListData} />
    </section>
  );
};
