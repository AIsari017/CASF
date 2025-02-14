import React from 'react';

export default function CulinaryJourney() {
  return (
    <section className="relative min-h-screen text-white">
      {/* Background Image */}
      <div
        className="
          absolute inset-0
          bg-[url('/backgroundTwo.png')]
          bg-cover bg-center bg-fixed
        "
      />
      <div className="absolute inset-0 bg-black opacity-60" />

      <div className="relative z-10 container mx-auto py-12 px-4 space-y-16">

        {/* ========== Row 1 ========== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold  text-center">
              A Culinary Journey...
            </h1>
            <h2 className="text-4xl font-bold flex items-center justify-center">
              <img 
                src="/oshpaz-logo.png" 
                className="w-8 h-8 mr-2" 
              />
              Etless Uyghur
            </h2>
            <p className="text-xl">
              Indulge in the rich flavors of Authentic Uyghur Cuisine
            </p>
          </div>
          <div className="space-y-4">
            {/* Additional content can go here */}
          </div>
        </div>

        {/* ========== Row 2 (Reversed) ========== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:flex-row-reverse text-center">
          <div className="space-y-4">
            {/* Additional content can go here */}
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl font-bold flex items-center justify-center">
              <img 
                src="/oshpaz-logo.png" 
                className="w-8 h-8 mr-2" 
              />
              Oshpaz London
            </h2>
            <p className="text-xl">
              Experience the vibrant flavours of Uzbekistan.
            </p>
          </div>
        </div>

        {/* ========== Row 3 ========== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold flex items-center justify-center">
              <img 
                src="/oshpaz-logo.png" 
                className="w-8 h-8 mr-2" 
              />
              Flavors of Italy
            </h2>
            <p className="text-xl">
              Savor classic Italian dishes with a modern twist.
            </p>
          </div>
          <div className="space-y-4">
            {/* Optional additional content */}
          </div>
        </div>

        {/* ========== Row 4 (Reversed) ========== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:flex-row-reverse text-center">
          <div className="space-y-4">
            {/* Optional additional content */}
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl font-bold flex items-center justify-center">
              <img 
                src="/oshpaz-logo.png" 
                className="w-8 h-8 mr-2" 
              />
              Spices of India
            </h2>
            <p className="text-xl">
              Dive into the aromatic depth of authentic Indian cuisine.
            </p>
          </div>
        </div>

        {/* ========== Row 5 ========== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold flex items-center justify-center">
              <img 
                src="/oshpaz-logo.png" 
                className="w-8 h-8 mr-2" 
              />
              Taste of Japan
            </h2>
            <p className="text-xl">
              Enjoy the delicate balance of flavors in traditional Japanese meals.
            </p>
          </div>
          <div className="space-y-4">
            {/* Optional additional content */}
          </div>
        </div>

      </div>
    </section>
  );
}

