import Image from "next/image";
import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map"></div>
      {/* left */}
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:border-88">Cerro Verde</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Un volcán activo con senderos para caminatas que conducen a la cima
          para disfrutar de impresionantes vistas del cráter y el lago Ilopango.
          Se puede acampar en la cima o en las zonas de picnic designadas. Otras
          actividades incluyen observación de aves, ciclismo de montaña y paseos
          a caballo.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            20k{" "}
            <span className="regular-16 lg:regular-20 ml-1">
              Reseñas excelentes
            </span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button type="button" title="Descargar App" variant="btn_green" />
          <Button
            type="button"
            title="¿Cómo funciona?"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>
      </div>

      {/* right */}
      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 w-[268px] flex flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Ubicación</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">Apaneca</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distancia</p>
              <p className="bold-20 text-white">110 km</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevación</p>
              <p className="bold-20 text-white">2030 m</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;