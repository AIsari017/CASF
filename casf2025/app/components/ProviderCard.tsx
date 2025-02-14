import React from "react";
import Image from "next/image";

interface ProviderCardProps {
  logo: string;
  name: string;
}

export const ProviderCard: React.FC<ProviderCardProps> = ({ logo, name }) => (
  <div
    className="w-[250px] h-[220px] flex flex-col items-center justify-center mx-4 p-6 md:p-8  bg-gradient-to-br from-yellow-50 to-pink-50 rounded-lg shadow-lg text-center transition-all transform hover:-translate-y-1 hover:shadow-2xl hover:border-pink-300"
  >
    <div className="w-[100px] h-[70px] flex items-center justify-center">
      <Image
        src={logo}
        alt={`${name} Logo`}
        className="object-contain"
        width={150}
        height={100}
      />
    </div>
    <h3
      className="text-xl md:text-2xl text-[#2c3e50] mt-4"
      style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.2 }}
    >
      {name}
    </h3>
  </div>
);

export default ProviderCard;


