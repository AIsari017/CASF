import React from 'react';

import Divider from './components/Divider';
import Hero from "./components/Hero";
import FeatureCard from "./components/FeatureCard";
import ProviderCard from "./components/ProviderCard";

// Directly use string paths since images are in public/
const providers = [
  { name: "Oshpaz", logo: '/oshopaz-logo.png' },
  { name: "Etles Uyghur", logo: '/etles-logo.png' },
  { name: "Bereket", logo: '/bereket-logo1.png' },
  { name: "Samarkand Palav", logo: '/samarkand-logo.jpg' },
  { name: "Yummies Bakehouse", logo: '/yummies-logo.jpg' }, // Fix: Added leading slash
];

export default function Home() {
  return (
    <div className="container">
      <Hero />

      <Divider text="Key Details" />

      <section className="features">
        <FeatureCard title="Date" content="Saturday, February 22nd" />
        <FeatureCard title="Time" content="11:00 - 16:00" />
        <FeatureCard title="Location" content="Gordon Square, UCL" />
      </section>

      <Divider text="Food Providers" />

      <section className="features">
        {providers.map((provider) => (
          <ProviderCard
            key={provider.name}
            name={provider.name}
            logo={provider.logo} 
          />
        ))}
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} CASF. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
