import React from 'react';

type DividerProps = {
  text: string;
};

export const Divider: React.FC<DividerProps> = ({ text }) => {
  return (
    <div className="flex items-center my-8">
      <div className="flex-grow border-t border-gray-300"></div>
      <span className="mx-4 text-gray-600 font-serif text-xl tracking-wide">
        {text}
      </span>
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
  );
};

export default Divider;
