// "use client";

export const Modal = ({ id, title, children }) => {
  return (
    <>
      <dialog id={id} className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {title && <h3 className="font-bold text-lg">{title}</h3>}

          {children}
        </div>

        {/* close modal if click not inside */}
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};
