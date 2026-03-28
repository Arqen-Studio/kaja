import React, { useState } from "react";

interface Props {
  title: string;
  image: string;
  onClick?: () => void;
}

const MenuCard: React.FC<Props> = ({ title, image, onClick }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative w-[420px] h-[643px] overflow-hidden cursor-pointer"
    >
      <img
        src={image}
        alt={title}
        className={`w-full h-full object-cover opacity-70 transition-transform duration-400 ease-in ${
          hover ? "scale-105" : "scale-100"
        }`}
      />

      <div className="absolute inset-0 flex flex-col justify-center items-center bg-[linear-gradient(to_bottom,rgba(0,0,0,0.25),rgba(0,0,0,0.65))]">
        <h2 className="!font-normal heading m-0 text-[#D6B283]">{title}</h2>

        <div className="absolute base-text text-[#D6B283] bottom-[70px] flex justify-center gap-[18px] ">
          <span>Explore more</span>
          <span>Explore more</span>
          <span>Explore more</span>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
