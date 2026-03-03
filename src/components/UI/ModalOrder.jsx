"use client";

import { useForm } from "react-hook-form";

export const ModalOrder = ({ modalId }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log("данніе: ", data);

    reset();

    if (modalId) {
      document.getElementById(modalId).close();
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <input
        type="tel"
        placeholder="Номер телефону"
        className={`input input-bordered ${errors.tel ? "input-error" : ""}`}
        {...register("tel", { required: true })}
      />
      <button type="submit" className="btn btn-primary mt-2">
        Відправити
      </button>
    </form>
  );
};
