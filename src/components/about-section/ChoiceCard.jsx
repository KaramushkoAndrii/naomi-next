// import { GiEcology } from "react-icons/gi";
import { ImgContainer } from "../UI/ImgContainer";

export const ChoiceCard = ({ data }) => {
  const { title, iconsList, imgData, description, colors } = data;

  const iconColor = colors.to;

  return (
    <li
      className={`flex flex-col gap-4 w-[90%] lg:w-[27dvw] p-4 rounded-main-radius`}
      style={{
        background: `linear-gradient(to bottom, ${colors.from} 50%, ${colors.to} 50%)`,
      }}
    >
      <ul className="flex gap-4 justify-around" style={{ color: iconColor }}>
        {iconsList.map((icon, index) => (
          <li key={index}>{icon}</li>
        ))}
      </ul>
      <h2>{title}</h2>
      <ImgContainer src={imgData.src} alt={imgData.alt} />
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
};
