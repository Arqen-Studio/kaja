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
      className="relative max-w-[420px] h-[643px] overflow-hidden cursor-pointer"
    >
      <img
        src={image}
        alt={title}
        className={`w-full h-full object-cover transition-transform duration-400 ease-in ${
          hover ? "scale-105" : "scale-100"
        }`}
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.25),rgba(0,0,0,0.65))]" />
    </div>
  );
};

export default MenuCard;
