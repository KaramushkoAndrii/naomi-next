"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h2 className="text-sub-title font-bold text-primary-violet mb-4">
        404 — Ой! Чистота не знайдена
      </h2>
      <p className="text-gray-600 mb-8">
        Ця сторінка зникла швидше, ніж пил після візиту Naomy.
      </p>
      <Link href="/" className="btn btn-primary">
        Повернутися на головну
      </Link>
    </div>
  );
}
