import React from 'react';
import Image from 'next/image';

interface ProviderCardProps {
  logo: string;
  name: string;
  
}

export const ProviderCard: React.FC<ProviderCardProps> = ({ logo, name }) => (
  <div
    className="flex-1 min-w-[150px] max-w-[250px] w-[80%] mx-auto mb-8 p-6 md:p-10 border border-[rgba(135,168,142,0.2)] bg-[#d7d7d7] shadow-md text-center opacity-80 transition-all transform hover:-translate-y-1 hover:shadow-xl hover:border-[#87A88E]"
  >
    <Image
      src={logo}
      alt={`${name} Logo`}
      className="w-full max-h-[100px] object-contain mb-4"
      width={200}
      height={100}
    />
    <h3
      className="text-2xl text-[#2c3e50] mt-4"
      style={{ fontFamily: "'Arial', sans-serif", lineHeight: 1.2 }}
    >
      {name}
    </h3>
  </div>
);

export default ProviderCard;
