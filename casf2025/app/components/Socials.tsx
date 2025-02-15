import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const Socials: React.FC = () => {
    return (
        <a
            href="https://www.instagram.com/casf.uk/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center mx-auto min-w-[200px] md:min-w-[250px] max-w-[350px] 
                                 p-8 md:p-10 duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] 
                                 bg-gradient-to-br from-yellow-50 to-pink-50 rounded-lg shadow-lg text-center 
                                 opacity-90 text-[#2c3e50] hover:-translate-y-1 hover:shadow-2xl
                                 "
        >
            <span
                className="mr-2 text-xl md:text-2xl"
                style={{ fontFamily: "'Playfair Display', serif" }}
            >
                Find more on our Instagram!
            </span>
            <FaInstagram size={20} />
        </a>
    );
};

export default Socials;

