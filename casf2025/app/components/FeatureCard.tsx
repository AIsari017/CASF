import React from "react";

export const FeatureCard = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => (
  <div
    className="flex-1 min-w-[200px] md:min-w-[250px] max-w-[350px] p-8 md:p-10 
               duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] bg-gradient-to-br from-yellow-50 to-pink-50 
               rounded-lg shadow-lg text-center opacity-90
               hover:-translate-y-1 hover:shadow-2xl hover:border-pink-300"
  >
    <h2
      className="text-[#2c3e50] mb-4 text-xl md:text-2xl"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      {title}
    </h2>
    <p className="text-[#4a6163] text-base leading-relaxed mb-0">
      {content}
    </p>
  </div>
);

export default FeatureCard;
