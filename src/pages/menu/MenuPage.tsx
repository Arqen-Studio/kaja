import React from "react";

import { useNavigate } from "react-router-dom";
import MenuCard from "../../components/MenuCard";

const MenuPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="menu-page pb-10">
      <div className="heading py-16">
        <h1>Explore our Menu</h1>
      </div>

      <div className="flex justify-center gap-12">
        <MenuCard
          title="Steaks"
          image="/png/steaks.png"
          onClick={() => navigate("/menu/steaks")}
        />
        <MenuCard title="Appetizers" image="/png/appetizers.png" />
        <MenuCard title="Desserts" image="/png/desserts.png" />
      </div>
    </div>
  );
};

export default MenuPage;
