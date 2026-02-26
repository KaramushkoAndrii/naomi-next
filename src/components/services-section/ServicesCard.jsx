import { ImgContainer } from "../UI/ImgContainer";

export const ServicesCard = ({ data }) => {
  const { title, description, img, alt } = data;
  return (
    <section>
      <ImgContainer src={img} alt={alt} />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </section>
  );
};
