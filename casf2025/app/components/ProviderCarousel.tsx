// app/components/ProviderCarousel.tsx
"use client"; // Mark this file as a client component

import React from "react";
import dynamic from "next/dynamic";
import ProviderCard from "./ProviderCard";

// Dynamically import react-slick with SSR disabled
const Slider = dynamic(() => import("react-slick"), { ssr: false });

interface Provider {
  logo: string;
  name: string;
}

interface ProviderCarouselProps {
  providers: Provider[];
}

const ProviderCarousel: React.FC<ProviderCarouselProps> = ({ providers }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-8">
      <Slider {...settings}>
        {providers.map((provider, index) => (
          <div key={index} className="px-2">
            <ProviderCard logo={provider.logo} name={provider.name} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProviderCarousel;

