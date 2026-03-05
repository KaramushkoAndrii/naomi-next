import { AdvantageList } from "./AdvantageList";
import { AdvantageListData } from "@/data/advantageListData";

export const AdvantageSection = () => {
  return (
    <section id="advantage">
      <h2 className=" mb-4 text-sub-title font-medium">Наші переваги</h2>
      <AdvantageList advantageList={AdvantageListData} />
    </section>
  );
};
