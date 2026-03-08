export const AdvantageList = ({ advantageList }) => {
  return (
    <ul className="flex flex-col justify-center items-center gap-4 md:grid md:grid-cols-2 md:gap-8 md:justify-items-center lg:grid-cols-3 text-primary-violet">
      {advantageList.map((advantageItem) => (
        <li
          key={advantageItem.id}
          className="flex flex-col py-8 justify-center w-[40dvw] max-w-[320px] items-center gap-2 border border-solid border-primary-blue rounded-main-radius shadow-md hover:shadow-2xl shadow-primary-blue/70 transition-shadow duration-300 bg-white"
        >
          <i>{advantageItem.icon}</i>
          <p className="text-list-item text-black">{advantageItem.text}</p>
        </li>
      ))}
    </ul>
  );
};
