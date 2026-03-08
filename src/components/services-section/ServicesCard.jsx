import { ImgContainer } from "../UI/ImgContainer";

export const ServicesCard = ({ data }) => {
  const { title, description, img, alt, id } = data;
  const isEven = id % 2 === 0;
  const imgOrder = isEven ? "lg:order-2" : "";
  const textOrder = isEven ? "" : "lg:order-2";
  return (
    <section className={`grid justify-items-center lg:grid-cols-2 lg:gap-8`}>
      <ImgContainer src={img} alt={alt} classes={imgOrder} />
      <div className={textOrder}>
        <h3 className="text-section-title">{title}</h3>
        <p>{description}</p>
      </div>
    </section>
  );
};
