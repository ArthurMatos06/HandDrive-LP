"use client";

import * as pixel from "@/lib/fpixel";

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
