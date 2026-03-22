import { MdOutlineMoreVert } from "react-icons/md";

export const Fab = ({ list }) => {
  const CONTACT_TYPE = {
    tel: { prefix: "tel:" },
    message: { prefix: "mailto:" },
    link: { prefix: "", target: "_blank", rel: "noopener noreferrer" },
  };
  return (
    <div className="fab bottom-0 md:bottom-4 lg:bottom-16 right-4">
      <div
        tabIndex={0}
        role="button"
        className={`btn btn-lg btn-circle bg-primary-violet text-white border-none shadow-none`}
      >
        <MdOutlineMoreVert />
      </div>

      {list.map(({ type, src, colorClass, id, icon: Icon }) => {
        const config = CONTACT_TYPE[type];

        if (!config) return null;

        return (
          <button key={id} className={`btn btn-lg btn-circle ${colorClass}`}>
            <a
              href={`${config.prefix}${src}`}
              target={config.target}
              rel={config.rel}
            >
              <Icon size={16} />
            </a>
          </button>
        );
      })}
    </div>
  );
};
