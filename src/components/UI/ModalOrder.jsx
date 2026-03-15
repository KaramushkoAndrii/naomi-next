"use client";

import { useForm } from "react-hook-form";
import { ErrorMessage } from "./ErrorMessage";
import { ServicesListData } from "@/data/servicesListData";
import { useModalStore } from "@/libs/useModalStore";
import { useState } from "react";

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

  const onSubmit = async (data) => {
    console.log("The submit data:", data);

    setLoading(true);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/postssss",
        {
          method: "POST",
          body: JSON.stringify(data),
        },
      );
      if (!response.ok) throw new Error();

      reset();

      openModal("status", { title: "Заявку успішно надіслано" });
    } catch (e) {
      openModal("status", { title: "Сталася помилка" });
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
            value:
              /^(?:\+?38)?0(50|63|66|67|68|73|89|91|92|93|94|95|96|97|98|99)\d{7}$/,
            message: "Введенний телефон не коректний",
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
