export const ContactsList = ({ contactsList }) => {
  const CONTACT_TYPE = {
    tel: { prefix: "tel:" },
    message: { prefix: "mailto:" },
    link: { prefix: "", target: "_blank", rel: "noopener noreferrer" },
  };

  return (
    <details className="dropdown-end">
      <summary>Звязатись із нами</summary>
      <ul className="bg-base-100 rounded-box p-2 z-50 w-max shadow-xl right-0 left-auto mt-2">
        {contactsList.map(({ id, type, src, title }) => {
          const config = CONTACT_TYPE[type];

          if (!config) return null;

          return (
            <li key={id}>
              <a
                href={`${config.prefix}${src}`}
                target={config.target}
                rel={config.rel}
              >
                {title}
              </a>
            </li>
          );
        })}
      </ul>
    </details>
  );
};
