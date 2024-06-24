"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

import { Button } from "./ui/button";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

const AnimatedInfo = () => {
  const animation = useAnimation();
  const [showDiv, setShowDiv] = useState(true);
  const divRef = useRef(null);

  const handleButtonClick = () => {
    animation.start("exit");
    setShowDiv(false); // Oculta el div después de la animación
  };

  return (
    <>
      {showDiv && (
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
                delay: 0.8,
                duration: 1,
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
          ref={divRef.current}
          className="relative xl:absolute xl:bottom-16 xl:left-[-80px]"
        >
          {/* Contenido del div aquí */}
          <div className="z-20 w-[268px] md:w-[468px] xl:w-[268px] flex flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
            <div className="flex flex-col">
              <div className="flexBetween">
                <p className="regular-16 text-gray-20">Ubicación</p>
                {/* <Button onClick={handleButtonClick} variant="link">
                  <IoMdClose className="w-6 h-6 text-white hover:text-emerald-600" />
                </Button> */}
                <Link
                  href="https://istu.gob.sv/blog/2020/09/25/parque-natural-cerro-verde/"
                  target="_blank"
                >
                  <FiExternalLink className="w-6 h-6 text-white hover:text-emerald-600" />
                </Link>
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
        </motion.div>
      )}
    </>
  );
};

export default AnimatedInfo;
