import React from 'react';

import Divider from './components/Divider';
import Hero from "./components/Hero";
import FeatureCard from "./components/FeatureCard";
import ProviderCard from "./components/ProviderCard";
import ProviderCarousel from "./components/ProviderCarousel";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const providers = [
  { name: "Oshpaz", logo: '/oshopaz-logo.png' },
  { name: "Etles Uyghur", logo: '/etles-logo.png' },
  { name: "Bereket", logo: '/bereket-logo1.png' },
  { name: "Samarkand Palav", logo: '/samarkand-logo.jpg' },
  { name: "Yummies Bakehouse", logo: '/yummies-logo.jpg' }, 
];

export default function Home() {
  return (
    <div className="flex flex-col gap-0 p-0">
      <Hero />

      <Divider text="Key Details" />



      <section className="features flex flex-row justify-center items-center gap-8 py-8">
        <FeatureCard title="Date" content="Saturday, February 22nd" />
        <FeatureCard title="Time" content="11:00 - 16:00" />
        <FeatureCard title="Location" content="Gordon Square, UCL" />
      </section>

      <Divider text="Food Providers" />

      <section className="features features flex flex-row justify-center items-center gap-8 py-8">
        {providers.map((provider) => (
          <ProviderCard
            key={provider.name}
            name={provider.name}
            logo={provider.logo} 
          />
        ))}
      </section>

      <h1 className="text-center text-3xl my-8">Our Providers</h1>
      <ProviderCarousel providers={providers} />

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} CASF. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
