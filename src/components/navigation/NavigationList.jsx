import Link from "next/link";

export const NavigationList = ({ list, classNames }) => {
  const dropDown = (item) => {
    const { text, services } = item;
    return (
      <details className="dropdown">
        <summary className="btn m-1">{text}</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm">
          {services.map((item, index) => (
            <li key={index}>
              <a href={item.src}>{item.text}</a>
            </li>
          ))}
        </ul>
      </details>
    );
  };
  return (
    <>
      <ul className={classNames}>
        {list.map((item, index) => (
          <li key={index}>
            {item.services?.length > 0 ? dropDown(item) : <a>{item.text}</a>}
          </li>
        ))}
      </ul>
    </>
  );
};
