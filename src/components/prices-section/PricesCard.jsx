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
    <div className="card w-90 bg-base-100 shadow-sm">
      <div className="card-body">
        <div className="flex flex-col gap-4 justify-between">
          <h2 className="text-3xl font-bold">{title}</h2>
          <span className="text-xl">{price}</span>
        </div>
        <ul className="mt-6 flex flex-col gap-2 text-xs">
          {services?.map((service, index) => (
            <li key={index}>
              {agree()}
              {service}
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <button className="btn btn-primary btn-block">Замовити</button>
        </div>
      </div>
    </div>
  );
};
