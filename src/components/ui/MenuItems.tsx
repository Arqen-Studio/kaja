import React from "react";

interface Props {
  name: string;
  price: string;
}

const MenuItem: React.FC<Props> = ({ name, price }) => {
  return (
    <div className="menu-item">
      <span>{name}</span>
      <span>{price}</span>
    </div>
  );
};

export default MenuItem;
