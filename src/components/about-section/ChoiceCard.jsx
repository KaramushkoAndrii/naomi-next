import { ImgContainer } from "../UI/ImgContainer";

export const ChoiceCard = ({ data }) => {
  const { title, iconsList, imgData, description, colors } = data;

  return (
    <li
      className={`flex flex-col gap-4 w-[90%] md:h-[stretch] lg:w-[27dvw] max-w-100 p-4 rounded-main-radius bg-linear-to-b ${colors.from} from-50% ${colors.to} to-50%`}
    >
      <ul className={`flex gap-4 justify-around ${colors.icon}`}>
        {iconsList.map((icon, index) => (
          <li key={index}>{icon}</li>
        ))}
      </ul>
      <h2 className="text-main-text text-nowrap text-center">{title}</h2>
      <ImgContainer src={imgData.src} alt={imgData.alt} />
      <p className="text-main-text mb-0 mt-auto max-h-[50%]">{description}</p>
    </li>
  );
};
