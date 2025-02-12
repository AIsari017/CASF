import React from 'react';

type DividerProps = {
    text: string;
};

export const Divider: React.FC<DividerProps> = ({ text }) => {
    return (
        <section className="px-4 py-0 bg-[#87A88E] text-white text-center">
            <div
                className="flex items-center justify-center m-0 font-medium tracking-[2px]"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem" }}
            >
                <p>{text}</p>
            </div>
        </section>
    );
};

export default Divider;