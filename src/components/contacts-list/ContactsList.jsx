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
        {contactsList.map(
          ({ id, type, src, title, icon: Icon, colorClass }) => {
            const config = CONTACT_TYPE[type];

            if (!config) return null;

            return (
              <li
                key={id}
                className={`flex justify-center hover:bg-primary-violet hover:text-white transition-all duration-300 hover:scale-105 ${colorClass}`}
              >
                <a
                  href={`${config.prefix}${src}`}
                  target={config.target}
                  rel={config.rel}
                >
                  <Icon size={16} />
                  {title}
                </a>
              </li>
            );
          },
        )}
      </ul>
    </details>
  );
};
