import Image from "next/image";
import React from "react";

const NavigationBar = () => {
  return (
    <nav className="h-[90px] max-w-screen-2xl m-auto sm:w-[99vw] md:w-[81vw] sm:flex sm:justify-between">
      <div className="w-screen max-h-[90px] grid place-content-center sm:w-fit">
        <Image
          className="size-44 object-contain sm:mx-4"
          src={"/img/logo_png.png"}
          alt="estudio juridico logo"
          width={500}
          height={500}
        />
      </div>
      <ul className="hidden sm:px-12 sm:flex sm:gap-5 sm:items-center md:gap-10 lg:gap-16">
        <li>
          <a
            className="font-medium decoration-gray-500 underline-offset-4 hover:underline"
            href="#"
          >
            ESTUDIO
          </a>
        </li>
        <li>
          <a
            className="font-medium decoration-gray-500 underline-offset-4 hover:underline"
            href="#"
          >
            EQUIPO
          </a>
        </li>
        <li>
          <a
            className="font-medium decoration-gray-500 underline-offset-4 hover:underline lg:hidden"
            href="#"
          >
            CONTACTO
          </a>
        </li>
      </ul>
      <div className="grid place-content-center">
        <a
          className="hidden lg:block px-3 py-1 font-bold rounded-lg hover:bg-gray-800 duration-150 hover:text-[var(--background)]"
          href="#"
        >
          CONTACTO
        </a>
      </div>
    </nav>
  );
};

export default NavigationBar;
