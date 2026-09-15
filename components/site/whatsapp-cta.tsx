"use client";

import * as pixel from "@/lib/fpixel";
import { MessageCircle } from "lucide-react";

export function WhatsappCta() {
  return (
    <a
      className="flex h-16 w-full max-w-sm items-center justify-center rounded-full bg-card px-10 text-base font-semibold text-primary shadow-2xl transition-transform hover:scale-[1.03] md:text-lg"
      href="https://api.whatsapp.com/send/?phone=5511984353950&text=Quero+falar+com+um+especialista&type=phone_number&app_absent=0"
      onClick={(e) => {
        e.preventDefault();

        pixel.whatsappClick();

        setTimeout(() => {
          window.location.href =
            "https://api.whatsapp.com/send/?phone=5511984353950&text=Quero+falar+com+um+especialista&type=phone_number&app_absent=0";
        }, 200);
      }}
    >
      Quero falar com um especialista
    </a>
  );
}

export function WhatsappCtaHERO() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <a
        className="flex h-16 w-full max-w-sm items-center justify-center rounded-full bg-card px-10 text-base font-semibold text-primary shadow-2xl transition-transform hover:scale-[1.03] md:text-lg"
        href="https://api.whatsapp.com/send/?phone=5511984353950&text=Quero+falar+com+um+especialista&type=phone_number&app_absent=0"
        onClick={(e) => {
          e.preventDefault();

          pixel.whatsappClick();

          setTimeout(() => {
            window.location.href =
              "https://api.whatsapp.com/send/?phone=5511984353950&text=Quero+falar+com+um+especialista&type=phone_number&app_absent=0";
          }, 200);
        }}
      >
        Quero falar com um especialista
      </a>
      <a
        href="#quem-somos"
        className="flex h-14 items-center justify-center rounded-full bg-primary px-8 font-semibold text-primary-foreground shadow-md transition-opacity hover:opacity-90"
      >
        Conhecer a Hand Drive
      </a>
    </div>
  );
}
