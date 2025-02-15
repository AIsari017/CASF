import React from 'react';

import Divider from './components/Divider';
import Hero from "./components/Hero";
import FeatureCard from "./components/FeatureCard";
import ProviderCard from "./components/ProviderCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CulinaryJourney from './components/Restuarants';


const sponsors = [
  { name: "KAZ Minerals", logo: '/SponsorsLogos/KAZMineralsLogo.png' },
  { name: "Kazakh Societies Guild", logo: '/SponsorsLogos/KazGuildLogo.png' },
  { name: "Kazakh Society UK", logo: '/SponsorsLogos/KazSocLogo.jpg' },
  { name: "smartroom", logo: '/SponsorsLogos/SmartRoomLogo.png' },
];

const exhibition = [
  { name: "KAZ Minerals", logo: '/SponsorsLogos/KAZMineralsLogo.png' },
  { name: "Kazakh Societies Guild", logo: '/SponsorsLogos/KazGuildLogo.png' },
  { name: "Kazakh Society UK", logo: '/SponsorsLogos/KazSocLogo.jpg' },
  { name: "smartroom", logo: '/SponsorsLogos/SmartRoomLogo.png' },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-0 p-0">
      <Hero />

      <section className='bg-[#f8f0e9]'>
      <Divider text="Key Details"/>
      </section>
    


      <section className="features grid grid-cols-1 md:flex md:flex-row justify-center items-center gap-8 py-8 px-4 bg-[#f8f0e9] ">
        <FeatureCard title="Date" content="Saturday, February 22nd" />
        <FeatureCard title="Time" content="11:00 - 16:00" />
        <FeatureCard title="Location" content="Gordon Square, UCL"/>
      </section>

      <section className='bg-[#f8f0e9]'>
      <Divider text="Organized By"/>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-center gap-4 py-8 bg-[#f8f0e9]">
        <ProviderCard
          name="UCL Kazakh Society"
          logo="/uclKazakhSociety.png"
        />
        <ProviderCard
          name="UCL Uzbek Society"
          logo="/uclUzbekSociety.png"
        />
      </section>

      <section className='bg-[#f8f0e9]'>
      <Divider text="Our Inredible Sponsors"/>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-center gap-4 py-8 bg-[#f8f0e9]">
      {sponsors.map((sponsors) => (
          <ProviderCard
            key={sponsors.name}
            name={sponsors.name}
            logo={sponsors.logo} 
          />
        ))}
      </section>
      <CulinaryJourney/>
      <footer className="bg-gray-100 mt-12 py-8 px-4">
        <div className="container mx-auto flex flex-col items-center">
          <div className="text-center mb-4">
        <h3 className="text-xl font-semibold mb-2">Central Asian Spring Festival 2025</h3>
          </div>
          <div className="text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} CASF. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
