import { AdvantageList } from "./AdvantageList";
import { AdvantageListData } from "@/data/advantageListData";

export const AdvantageSection = () => {
  return (
    <section className="mx-4">
      <h2 className=" mb-4 text-3xl font-medium">Наші переваги</h2>
      <AdvantageList advantageList={AdvantageListData} />
    </section>
  );
};
