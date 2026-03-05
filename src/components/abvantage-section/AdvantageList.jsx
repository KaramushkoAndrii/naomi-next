export const AdvantageList = ({ advantageList }) => {
  return (
    <ul className="flex flex-col justify-center items-center gap-4">
      {advantageList.map((advantageItem) => (
        <li
          key={advantageItem.id}
          className="flex flex-col justify-center items-center gap-2"
        >
          <i>{advantageItem.icon}</i>
          <p className="text-list-item">{advantageItem.text}</p>
        </li>
      ))}
    </ul>
  );
};
