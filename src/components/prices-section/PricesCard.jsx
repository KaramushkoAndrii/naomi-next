import { ModalOpenButton } from "../UI/ModalOpenButton";

export const PricesCard = ({ card }) => {
  const { title, price, services } = card;
  const agree = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-4 me-2 inline-block text-success"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 13l4 4L19 7"
        />
      </svg>
    );
  };
  return (
    <div className="card w-90 shadow-sm hover:shadow-2xl shadow-primary-blue/70 transition-shadow duration-300 bg-white">
      <div className="card-body justify-between dark:bg-black/70">
        <div className="flex flex-col gap-4 justify-between">
          <h2 className="text-3xl font-bold">{title}</h2>
          <span className="text-xl">Від {price} грн</span>
        </div>
        <ul className="mt-6 flex flex-col gap-2 text-xs">
          {services?.map((service, index) => (
            <li key={index}>
              {agree()}
              {service}
            </li>
          ))}
        </ul>
        <ModalOpenButton text="Замовити" type="order" />
      </div>
    </div>
  );
};
