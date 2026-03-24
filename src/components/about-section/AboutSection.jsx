import { ImgContainer } from "../UI/ImgContainer";
import { ChoiceCard } from "./ChoiceCard";

export const AboutSection = ({ data }) => {
  const { title, description, img, alt, subTitle, list, footer } = data;
  return (
    <section className="my-4" id="about">
      <h2 className="text-sub-title font-medium py-4">{title}</h2>

      <div className="grid md:grid-cols-2 md:gap-6">
        <p className="text-main-text">{description}</p>
        <ImgContainer src={img} alt={alt} classes="mx-auto mt-4" />
      </div>

      <h2 className="text-sub-title font-medium my-4">{subTitle}</h2>
      <ul className="flex flex-col gap-8 justify-evenly items-center md:items-baseline text-main-text flex-wrap md:flex-row lg:flex-nowrap">
        {list.map((card) => (
          <ChoiceCard data={card} key={card.id} />
        ))}
      </ul>

      <p className="text-main-text mt-4">{footer}</p>
    </section>
  );
};
