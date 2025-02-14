"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Restaurant = {
  name: string;
  image: string;
  description: string;
};

const restaurants: Restaurant[] = [
  {
    name: "Oshpaz",
    image: "/oshopaz-logo.png",
    description: "Sample description about Oshpaz.",
  },
  {
    name: "Eles Uyghur",
    image: "/etles-logo.png",
    description: "Sample description about Eles Uyghur.",
  },
  {
    name: "Bereket",
    image: "/bereket-logo1.png",
    description: "Sample description about Bereket.",
  },
  {
    name: "Samarkand Palaw",
    image: "/samarkand-logo.jpg",
    description: "Sample description about Samarkand Palaw.",
  },
  {
    name: "Yummies Bakehouse",
    image: "/yummies-logo.jpg",
    description: "Sample description about Yummies Bakehouse.",
  },
];

const CulinaryJourney: React.FC = () => {
  return (
    <section
      className="
        relative
        min-h-screen
        text-white
        py-12 px-4
      "
    >
      <div 
        className="
          absolute inset-0 
          bg-[url('/backgroundTwo.png')] 
          bg-cover bg-center bg-fixed 
          after:content-[''] 
          after:absolute 
          after:inset-0 
          after:bg-black 
          after:opacity-50 
          -z-10
        "
      />

      

      

    </section>
  );
};

export default CulinaryJourney;


