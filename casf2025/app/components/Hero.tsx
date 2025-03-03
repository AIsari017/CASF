"use client";

import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const title = "CASF";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, 300);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen">
      {/* Background with overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/backgroundOne.png')",
          backgroundSize: 'cover',
          backgroundPosition: isMobile ? 'left center' : 'center',
          backgroundAttachment: isMobile ? 'scroll' : 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40" />
      </div>

      <header className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="flex flex-col items-center">
          {/* Animated Logo */}
          <div
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
              transition-all duration-1000 ease
              ${isAnimating ? 'opacity-20 scale-125' : 'opacity-0 scale-75'}`}
          >
            <img
              src="/casfLogo.png"
              alt="CASF Logo"
              width={1000}
              height={1000}
              className="object-contain"
            />
          </div>

          {/* Animated Title */}
          <div className="flex justify-center items-center mb-4">
            {title.split('').map((letter, index) => (
              <span
                key={index}
                className={`inline-block mx-[0.1em] font-extrabold
                  transition-all duration-[800ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
                  ${isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}`}
                style={{
                  transitionDelay: `${index * 0.2}s`,
                  fontFamily: "'Playfair Display', serif"
                }}
              >
                <span className="text-[3.5rem] sm:text-[4.5rem] lg:text-[15rem] text-[#f8f0e9]">
                  {letter}
                </span>
              </span>
            ))}
          </div>

          {/* Subtitle */}
          <div
            className={`text-center transition-opacity duration-600 ease-in-out ${
              isAnimating ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <p
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="uppercase tracking-wider text-base sm:text-lg md:text-xl text-[#f8f0e9] max-w-xl leading-relaxed mb-2 mt-15"
            >
              Central Asian Spring Festival
            </p>
            <p
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="uppercase tracking-wider text-base sm:text-lg md:text-xl text-[#f8f0e9] max-w-xl leading-relaxed mb-2"
            >
              A celebration of culture, music, and art.
            </p>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Hero;
