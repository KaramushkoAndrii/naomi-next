"use client";

import { useForm } from "react-hook-form";
import { ErrorMessage } from "./ErrorMessage";
import { ServicesListData } from "@/data/servicesListData";
import { useModalStore } from "@/libs/useModalStore";
import { useState } from "react";
import { ValidationRules } from "@/libs/validationRules";

export const ModalOrder = () => {
  const { openModal } = useModalStore();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      tel: "",
      service: ServicesListData[0]?.title || "",
      agreeForData: true,
    },
  });

  const { tel } = ValidationRules;

  const onSubmit = async (data) => {
    console.log("The submit data:", data);

    setLoading(true);

    try {
      const response = await fetch("/api/telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        reset();
        openModal("status", {
          title: "Заявку успішно надіслано",
          description: "Ваша заявку успішно надісллана",
          btn: "Закрити",
        });
      } else {
        throw new Error();
      }
    } catch (e) {
      openModal("status", {
        title: "Сталася помилка",
        description:
          "Вашу заявку не було передано. Спробуйте будь ласка пізніше",
        btn: "На головну",
      });
    } finally {
      setLoading(false);
    }
  };

  const telError = errors.tel?.message;
  const nameError = errors.name?.message;
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Введіть ваше ім'я"
        className={`input input-bordered ${errors.name ? "input-error" : ""} w-full`}
        autoComplete="name"
        {...register("name", {
          required: true,
          minLength: { value: 2, message: "Ім'я введено не коректно" },
        })}
      />

      <input
        type="tel"
        placeholder="Номер телефону"
        className={`input input-bordered ${errors.tel ? "input-error" : ""} w-full`}
        autoComplete="tel"
        {...register("tel", {
          required: true,
          pattern: {
            value: tel.pattern,
            message: tel.message,
          },
        })}
      />
      <label className="flex flex-col-reverse">
        <select
          className="select select-primary w-full"
          {...register("service")}
        >
          {ServicesListData.map((item) => (
            <option key={item.id} value={item.title} className="w-full">
              {item.title}
            </option>
          ))}
        </select>
        Оберіть тип прибирання
      </label>

      <label className="label">
        <input
          type="checkbox"
          defaultChecked
          className="checkbox"
          {...register("agreeForData", { required: true })}
        />
        Згоден(на) на обробку моїх персональних данних
      </label>

      <ErrorMessage message={nameError} />
      <ErrorMessage message={telError} />
      <button type="submit" className="btn btn-primary mt-2">
        {loading ? "Відправляємо заявку..." : "Відправити"}
      </button>
    </form>
  );
};
