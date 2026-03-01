export const NavigationServices = ({ list }) => {
  return (
    <details className="dropdown-end">
      <summary>Наші послуги</summary>
      <ul className="bg-base-100 rounded-box p-2 z-50 w-52 shadow-xl right-0 left-auto mt-2">
        {list.map((item) => (
          <li key={item.id}>
            <a href={item.src}>{item.text}</a>
          </li>
        ))}
      </ul>
    </details>
  );
};
