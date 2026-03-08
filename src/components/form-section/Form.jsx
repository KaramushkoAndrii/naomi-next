"use client";

import { useForm } from "react-hook-form";
import { ErrorMessage } from "../UI/ErrorMessage";

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const telError = errors.tel?.message;
  const onSubmit = (data) => console.log("Отправлены данные:", data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-[80dvw] mx-auto md:flex-row md:items-start md:gap-6"
    >
      <div className="form-control w-full">
        <input
          type="tel"
          placeholder="Введіть свій номер телефону"
          className={`input input-bordered w-full ${errors.tel ? "input-error" : ""}`}
          autoComplete="tel"
          {...register("tel", {
            required: "Це поле є обов'язковим",
            pattern: {
              value:
                /^(?:\+?38)?0(50|63|66|67|68|73|89|91|92|93|94|95|96|97|98|99)\d{7}$/,
              message: "Введенний телефон не коректний",
            },
          })}
        />
        <ErrorMessage message={telError} />
      </div>

      <button
        type="submit"
        className="flex btn btn-primary mt-4 mx-auto w-[75%] md:mt-0 md:w-[30dvw]"
      >
        Відправити
      </button>
    </form>
  );
};
