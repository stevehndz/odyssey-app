"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// components
import { Button } from "@/components/ui/button";
import AnimatedInfo from "@/components/AnimatedInfo";

// icons
import { FaCirclePlay } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-12 py-10 pb-32 lg:py-20 xl:flex-row">
      <div className="hero-map"></div>
      {/* left */}
      <motion.div
        variants={{
          initial: {
            opacity: 0,
            y: 100,
          },
          animate: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1],
            },
          },
          exit: {
            opacity: 0,
            y: 100,
            transition: {
              duration: 0.5,
              ease: [0.4, 0, 0.2, 1],
            },
          },
        }}
        initial="initial"
        animate="animate"
        className="relative z-20 flex flex-1 flex-col xl:w-1/2"
      >
        <h1 className="bold-52 lg:bold-64 flex gap-3 items-center">
          Cerro Verde{" "}
          <Image
            src="/camp.svg"
            alt="camp"
            width={50}
            height={50}
            className="w-10 lg:w-[60px]"
          />
        </h1>
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
          <Link href="/">
            <Button
              variant="default"
              size="lg"
              className="rounded-full w-full sm:w-auto bold-20 font-semibold bg-emerald-600"
            >
              Descargar App
            </Button>
          </Link>
          <Link href="/">
            <Button
              variant="secondary"
              size="lg"
              className="rounded-full w-full sm:w-auto gap-2 regular-20"
            >
              <FaCirclePlay className="w-5 h-5 text-emerald-600" />
              ¿Cómo funciona?
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* right */}
      <div className="relative flex flex-1 items-start">
        <AnimatedInfo />
      </div>
    </section>
  );
};

export default Hero;
