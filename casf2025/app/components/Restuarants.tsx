import React from 'react';

export default function CulinaryJourney() {
  return (
    <section
      className="relative min-h-screen flex items-center text-white"
      style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.2 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/backgroundTwo.png')] bg-cover bg-left  bg-fixed" />
      <div className="absolute inset-0 bg-black opacity-60" />

      <div className="relative z-10 container mx-auto py-16 px-6">
        {/* Title Section */}
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">A Culinary Journey...</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover the rich and diverse flavors of Central Asian cuisine
          </p>
        </div>

        {/* Restaurant Grid */}
        <div className="space-y-16">
          {/* ========== Restaurant 1 ========== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-center">
              <h2 className="text-4xl font-bold flex items-center justify-center">
                <img
                  src="/etles-logo.png"
                  alt="Etless Uyghur Logo"
                  className="w-10 h-10 mr-3"
                />
                Etless Uyghur
              </h2>
              <p className="text-xl">
                Indulge in the rich flavors of Authentic Uyghur Cuisine!
              </p>
            </div>
            <div className="flex justify-center">
            </div>
          </div>

          {/* ========== Restaurant 2 (Reversed) ========== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
            <div className="flex justify-center">
            </div>
            <div className="space-y-4 text-center">
              <h2 className="text-4xl font-bold flex items-center justify-center">
                <img
                  src="/oshpaz-logo.png"
                  alt="Oshpaz London Logo"
                  className="w-10 h-10 mr-3"
                />
                Oshpaz London
              </h2>
              <p className="text-xl">
                Experience the vibrant flavours of Uzbekistan!
              </p>
            </div>
          </div>

          {/* ========== Restaurant 3 ========== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-center">
              <h2 className="text-4xl font-bold flex items-center justify-center">
                <img
                  src="/bereket-logo1.png"
                  alt="Bereket Logo"
                  className="w-10 h-10 mr-3"
                />
                Bereket
              </h2>
              <p className="text-xl">
                Don't miss your chance to explore Turkemenistan's flavorful cuisine!
              </p>
            </div>
            <div className="flex justify-center">
              {/* Optional image or visual element */}
            </div>
          </div>

          {/* ========== Restaurant 4 (Reversed) ========== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
            <div className="flex justify-center">
            </div>
            <div className="space-y-4 text-center">
              <h2 className="text-4xl font-bold flex items-center justify-center">
                <img
                  src="/yummies-logo.png"
                  alt="Yummies Bakehouse Logo"
                  className="w-10 h-10 mr-3"
                />
                Yummies Bakehouse
              </h2>
              <p className="text-xl">
                Creator of World's first Multi-flavoured Oreshki!
              </p>
            </div>
          </div>

          {/* ========== Restaurant 5 ========== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-center">
              <h2 className="text-4xl font-bold flex items-center justify-center">
                <img
                  src="/samarkand-logo.png"
                  alt="Samarkand Palav Logo"
                  className="w-10 h-10 mr-3"
                />
                Samarkand Palav
              </h2>
              <p className="text-xl">
                Taste the signature Palav and other Tajik and Uzbek delights!
              </p>
            </div>
            <div className="flex justify-center">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
