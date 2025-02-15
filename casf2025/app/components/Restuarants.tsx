import React from 'react';
import Image from 'next/image';

export default function CulinaryJourney() {
  return (
    <section
      className="relative min-h-screen flex items-center text-white"
      style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.2 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/backgroundTwo.png"
          alt="Background"
          fill
          priority
          className="object-cover object-left-top md:object-center"
          sizes="100vw"
          style={{
            objectPosition: 'left 20%',
          }}
        />
        <div className="absolute inset-0 bg-black opacity-60" />
      </div>

      <div className="relative z-10 container mx-auto py-16 px-6">
        {/* Title Section */}
        <div className="text-center mb-24 text-[#f8f0e9]">
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
                <Image
                  src="/etles-logo.png"
                  alt="Etless Uyghur Logo"
                  className="mr-3"
                  width={40}
                  height={40}
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
                <Image
                  src="/oshpaz-logo.png"
                  alt="Oshpaz London Logo"
                  className="mr-3"
                  width={40}
                  height={40}
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
                <Image
                  src="/bereket-logo1.png"
                  alt="Bereket Logo"
                  className="mr-3"
                  width={40}
                  height={40}
                />
                Bereket
              </h2>
              <p className="text-xl">
                Don&apos;t miss your chance to explore Turkemenistan&apos;s flavorful cuisine!
              </p>
            </div>
            <div className="flex justify-center">
            </div>
          </div>

          {/* ========== Restaurant 4 (Reversed) ========== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
            <div className="flex justify-center">
            </div>
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold flex items-center justify-center">
                <Image
                  src="/yummies-logo.png"
                  alt="Yummies Bakehouse Logo"
                  className="mr-3"
                  width={40}
                  height={40}
                />
                Yummies Bakehouse
              </h2>
              <p className="text-xl">
                Creator of World&apos;s first Multi-flavoured Oreshki!
              </p>
            </div>
          </div>

          {/* ========== Restaurant 5 ========== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-center">
              <h2 className="text-4xl font-bold flex items-center justify-center">
                <Image
                  src="/samarkand-logo.png"
                  alt="Samarkand Palav Logo"
                  className="mr-3"
                  width={40}
                  height={40}
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