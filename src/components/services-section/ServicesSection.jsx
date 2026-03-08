import { ServicesList } from "./ServicesList";
import { ServicesListData } from "@/data/servicesListData";

export const ServicesSection = () => {
  return (
    <section className="my-4">
      <h2 className="text-sub-title">Наші послуги</h2>

      <ServicesList list={ServicesListData} />
    </section>
  );
};
