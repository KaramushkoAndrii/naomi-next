import { AdvantageList } from "./AdvantageList";
// import { AdvantageListData } from "@/data/advantageListData";

export const AdvantageSection = ({ data }) => {
  const { title, list } = data;
  return (
    <section id="advantage">
      <h2 className=" py-4 text-sub-title font-medium">{title}</h2>
      <AdvantageList advantageList={list} />
    </section>
  );
};
