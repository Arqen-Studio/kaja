import { useParams } from "react-router-dom";
import IntroSection from "../home/IntroSection"
import { LetterByLetter } from "../../components/LetterByLetter";

type MenuItem = { name: string; price: string };
type CategoryData = {
  title: string;
  subtitle: string;
  image: string;
  sectionTitle: string;
  items: MenuItem[];
};

const MENU_DATA: Record<string, CategoryData> = {

  appetizers: {
    title: "Appetizers Menu",
    subtitle: "Start with the finest",
    image: "/png/appetizers-menu.png",
    sectionTitle: "Designed to Awaken the Palate",
    items: [
      { name: "Burrata & Tomato", price: "$ 18.00" },
      { name: "Tuna Tartare", price: "$ 22.00" },
      { name: "Truffle Crostini", price: "$ 16.00" },
      { name: "Prawn Cocktail", price: "$ 20.00" },
    ],
  },
  mains: {
    title: "Mains Menu",
    subtitle: "The heart of the meal",
    image: "/png/mains-menu.png",
    sectionTitle: "The Heart of the Experience",
    items: [
      { name: "Grilled Sea Bass", price: "$ 48.00" },
      { name: "Lamb Rack", price: "$ 52.00" },
      { name: "Duck Confit", price: "$ 44.00" },
      { name: "Vegetable Risotto", price: "$ 30.00" },
    ],
  },
  pizzas: {
    title: "Pizzas Menu",
    subtitle: "Wood-fired perfection",
    image: "/png/pizza-menu.png",
    sectionTitle: "Tradition Meets Creativity",
    items: [
      { name: "Margherita", price: "$ 22.00" },
      { name: "Truffle & Mushroom", price: "$ 28.00" },
      { name: "Prosciutto", price: "$ 26.00" },
      { name: "Burrata & Basil", price: "$ 25.00" },
    ],
  },
  desserts: {
    title: "Desserts Menu",
    subtitle: "Sweet finales",
    image: "/png/dessert-menu.png",
    sectionTitle: "A Sweet Ending to the Journey",
    items: [
      { name: "Tiramisu", price: "$ 14.00" },
      { name: "Panna Cotta", price: "$ 12.00" },
      { name: "Chocolate Fondant", price: "$ 16.00" },
      { name: "Gelato Selection", price: "$ 10.00" },
    ],
  },
  cocktails: {
    title: "Cocktails Menu",
    subtitle: "Crafted to sip",
    image: "/png/cocktail-menu.png",
    sectionTitle: "Mixed with Creativity and Intention",
    items: [
      { name: "KAJA Spritz", price: "$ 16.00" },
      { name: "Bali Sunset", price: "$ 18.00" },
      { name: "Lemongrass Gin", price: "$ 17.00" },
      { name: "Coconut Negroni", price: "$ 19.00" },
    ],
  },
  "shot-pods": {
    title: "Specials Menu",
    subtitle: "Chef's specials",
    image: "/png/shotpods-menu.png",
    sectionTitle: "A Ritual Worth Sharing",
    items: [
      { name: "Chef's Tasting Duo", price: "$ 35.00" },
      { name: "Seasonal Platter", price: "$ 30.00" },
      { name: "Sharing Board", price: "$ 28.00" },
      { name: "Daily Catch", price: "$ 40.00" },
    ],
  },
};

const MenuDetailPage = () => {
  const { category } = useParams<{ category: string }>();
  const data = MENU_DATA[category ?? "steaks"] ?? MENU_DATA["steaks"];

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-6xl px-4 pb-0 pt-14 md:py-20">
        <h1 className="heading mx-auto mb-4 max-w-[378px] text-center">
          <LetterByLetter lines={[data.title]} align="center" />
        </h1>

        <div className="mx-auto mb-0 grid w-full grid-cols-1 items-start md:grid-cols-[1fr_auto_1fr] md:gap-4 md:pb-0">
          <p className="hidden md:block base-text mx-auto max-w-[230px] text-center md:mt-[35%] md:px-2">
            <LetterByLetter
              lines={[
                "KAJA was created with a",
                "clear intention: to surprise,",
                "engage, and leave a",
                "lasting impression.",
              ]}
              align="center"
            />
          </p>

          <div className="flex justify-center leading-none md:justify-self-center">
            <img
              src={data.image}
              alt={data.title}
              width={504}
              height={492}
              className="h-[492px] max-w-[504px] max-w-full object-cover object-[center_20]"
            />
          </div>

          <p className="md:block hidden base-text mx-auto max-w-[303px] text-center md:mt-[35%]">
            <LetterByLetter
              lines={[
                "It is not simply a restaurant,",
                "but a complete evening experience",
                "where iconic architecture,",
                "contemporary cuisine, and",
                "entertainment come together as one.",
              ]}
              align="center"
            />
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col items-center py-10">
        <h2 className="heading mb-6">
          <LetterByLetter lines={[data.sectionTitle]} align="center" />
        </h2>

        <div className="w-[60%] border-t border-[#e6d3a3]/30 mb-6"></div>

        <ul className="flex flex-col gap-0 w-full max-w-[600px] px-10">
          {data.items.map((item) => (
            <li key={item.name} className="flex justify-between py-4 md:py-5">
              <span className="base-text">{item.name}</span>
              <span className="base-text">{item.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuDetailPage;
