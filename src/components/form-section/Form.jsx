"use client";

import { useState } from "react";
import { useModalStore } from "@/libs/useModalStore";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "../UI/ErrorMessage";
import { ValidationRules } from "@/libs/validationRules";

export const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const openModal = useModalStore((state) => state.openModal);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const telError = errors.tel?.message;
  const onSubmit = async (data) => {
    setIsLoading(true);

    try {
      const payLoad = {
        name: "Клієнт (Зворотний дзвінок)",
        tel: data.tel,
        service: "Консультація / Передзвонити",
      };

      const response = await fetch("/api/telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payLoad),
      });

      if (response.ok) {
        reset();
        openModal("status", {
          title: "Дякуємо!",
          description:
            "Ваша заявка прийнята ми зв'яжемось із вами найблдижчим часом",
          btn: "Закрити",
        });
      } else {
        throw new Error("Failed to send");
      }
    } catch (e) {
      openModal("status", {
        title: "Помилка",
        description: "Упс, сталася помилка. Спробуйте будь ласка пізніше",
        btn: "Назад",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const { tel, requared } = ValidationRules;

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
          disabled={isLoading}
          {...register("tel", {
            required: requared,
            pattern: {
              value: tel.pattern,
              message: tel.message,
            },
          })}
        />
        <ErrorMessage message={telError} />
      </div>

      <button
        type="submit"
        className="flex btn btn-primary mt-4 mx-auto w-[75%] md:mt-0 md:w-[30dvw]"
        disabled={isLoading}
      >
        {isLoading ? "Надсилаємо" : "Відправити"}
      </button>
    </form>
  );
};
