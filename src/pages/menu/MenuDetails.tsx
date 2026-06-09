import { useParams } from "react-router-dom";
import { LetterByLetter } from "../../components/LetterByLetter";

type MenuItem = { name: string; price: string };
type MenuSection = { section: string; items: MenuItem[] };
type CategoryData = {
  title: string;
  titleLines: string[];
  subtitle: string;
  image: string;
  sectionTitle: string;
  leftText: string[];
  rightText: string[];
  sections: MenuSection[];
};

const MENU_DATA: Record<string, CategoryData> = {

  appetizers: {
    title: "Appetizers Menu",
    titleLines: ["Appetizers", "Menu"],
    subtitle: "Start with the finest",
    image: "/png/appetizer-menu.png",
    sectionTitle: "Designed to Awaken the Palate",
    leftText: ["Fresh ingredients, vibrant", "flavours, and thoughtful", "composition come together to", "create the perfect beginning."],
    rightText: ["Designed to be shared,", "explored, and enjoyed, each", "dish invites guests deeper", "into the KAJA experience."],
    sections: [
      {
        section: "Cold & Raw",
        items: [
          { name: "Tuna Crudo", price: "130" },
          { name: "Scallop Ceviche", price: "145" },
          { name: "Yellowtail Tiradito", price: "110" },
          { name: "Salmon Crudo", price: "125" },
          { name: "Beef Carpaccio", price: "195" },
          { name: "Beetroot Beef Tartare", price: "135" },
          { name: "Burrata", price: "175" },
          { name: "House Guacamole", price: "90" },
          { name: "Torched Tuna", price: "120" },
        ],
      },
      {
        section: "Hot Starters",
        items: [
          { name: "Sea Lollipop", price: "95" },
          { name: "Miso Aubergine", price: "110" },
          { name: "Truffle Arancini", price: "110" },
          { name: "Grilled Prawn", price: "170" },
          { name: "Yuzu Scallop", price: "190" },
          { name: "Slow Braised Oxtail", price: "195" },
        ],
      },
    ],
  },
  mains: {
    title: "Mains Menu",
    titleLines: ["Mains", "Menu"],
    subtitle: "The heart of the meal",
    image: "/png/mains-menu.png",
    sectionTitle: "The Heart of the Experience",
    leftText: ["Crafted from exceptional", "ingredients and guided by", "contemporary technique, our", "signature dishes celebrate", "flavour at its fullest."],
    rightText: ["Each plate reflects KAJA's", "passion for creativity,", "precision, and memorable", "dining experiences."],
    sections: [
      {
        section: "Robata",
        items: [
          { name: "Tomahawk 800 g", price: "895" },
          { name: "MB4 Wagyu Ribeye 300 g", price: "560" },
          { name: "Tenderloin 200 g", price: "330" },
          { name: "Yellowfin Tuna Loin 200 g", price: "220" },
        ],
      },
      {
        section: "Mains",
        items: [
          { name: "Black Cod", price: "190" },
          { name: "Pork Belly", price: "255" },
          { name: "Harissa Cauliflower", price: "145" },
          { name: "Miso Chicken", price: "195" },
          { name: "Grilled Octopus", price: "215" },
          { name: "KAJA Paccheri", price: "150" },
          { name: "Cacio e Pepe", price: "165" },
        ],
      },
    ],
  },
  pizzas: {
    title: "Pizza Menu",
    titleLines: ["Pizza", "Menu"],
    subtitle: "Wood-fired perfection",
    image: "/png/pizza-menu.png",
    sectionTitle: "Tradition Meets Creativity",
    leftText: ["Inspired by Italian tradition and", "elevated through premium", "ingredients, our pizzas balance", "simplicity with craftsmanship."],
    rightText: ["From carefully selected toppings to", "perfectly baked crusts, every detail", "is considered."],
    sections: [
      {
        section: "",
        items: [
          { name: "Scarpetta", price: "210" },
          { name: "Prosciutto e Funghi", price: "140" },
          { name: "Margherita Sbagliata", price: "195" },
          { name: "Tonno e Cipolla", price: "160" },
          { name: "Nerano", price: "160" },
          { name: "Parmigiana", price: "150" },
          { name: "Margherita", price: "120" },
          { name: "Marinara", price: "95" },
        ],
      },
    ],
  },
  desserts: {
    title: "Dessert Menu",
    titleLines: ["Dessert", "Menu"],
    subtitle: "Sweet finales",
    image: "/png/dessert-menu.png",
    sectionTitle: "A Sweet Ending to the Journey",
    leftText: ["Refined, indulgent, and", "beautifully balanced, our", "desserts are designed to leave a", "lasting impression."],
    rightText: ["A thoughtful finale that brings", "together creativity, texture, and", "flavour in every bite."],
    sections: [
      {
        section: "",
        items: [
          { name: "Burnt Cheesecake", price: "90" },
          { name: "Warm Chocolate Soufflé", price: "90" },
          { name: "Tiramisù", price: "95" },
          { name: "Carrot Cake", price: "90" },
          { name: "Lemon Meringue Tart", price: "90" },
        ],
      },
    ],
  },
  cocktails: {
    title: "Cocktail Menu",
    titleLines: ["Cocktail", "Menu"],
    subtitle: "Crafted to sip",
    image: "/png/cocktail-menu.png",
    sectionTitle: "Mixed with Creativity and Intention",
    leftText: ["Inspired by global influences", "and crafted with precision, each", "cocktail offers its own unique", "expression."],
    rightText: ["Designed to complement the", "atmosphere, cuisine, and energy of", "KAJA throughout the evening."],
    sections: [
      {
        section: "Signature Cocktails",
        items: [
          { name: "Azur", price: "155" },
          { name: "The Jungle", price: "135" },
          { name: "Passion Cloud", price: "135" },
          { name: "Spicy Senorita", price: "170" },
          { name: "Sinful", price: "200" },
          { name: "Cave Garden", price: "180" },
          { name: "Sunset in Ubud", price: "145" },
          { name: "Blush Edition", price: "125" },
          { name: "Havana", price: "155" },
          { name: "The Whisper", price: "155" },
          { name: "Sacred", price: "145" },
          { name: "Sol", price: "110" },
          { name: "Earthen", price: "190" },
          { name: "The Sting", price: "110" },
          { name: "Hush", price: "140" },
        ],
      },
      {
        section: "Classic Cocktails",
        items: [
          { name: "Margarita", price: "185" },
          { name: "Mojito", price: "185" },
          { name: "Negroni", price: "185" },
          { name: "Espresso Martini", price: "185" },
          { name: "Whisky Sour", price: "185" },
          { name: "Daiquiri", price: "185" },
          { name: "Lychee Martini", price: "185" },
          { name: "Dry Martini", price: "185" },
          { name: "Old Fashioned", price: "185" },
          { name: "Piña Colada", price: "185" },
          { name: "Cosmopolitan", price: "195" },
          { name: "Bloody Mary", price: "185" },
          { name: "Amaretto Sour", price: "185" },
          { name: "Long Island Iced Tea", price: "185" },
        ],
      },
    ],
  },
  "shot-pods": {
    title: "Shot Pods",
    titleLines: ["Shot", "Pods"],
    subtitle: "A ritual worth sharing",
    image: "/png/shotpod-menu.png",
    sectionTitle: "A Ritual Worth Sharing",
    leftText: ["Playful, unexpected, and made", "for sharing, Shot Pods bring a", "distinctive sense of occasion to", "every gathering."],
    rightText: ["More than a drink, they are a", "moment of connection designed to", "spark conversation and celebration."],
    sections: [
      {
        section: "Cocktail Pods",
        items: [
          { name: "Margarita", price: "80" },
          { name: "Mojito", price: "80" },
          { name: "Espresso Martini", price: "80" },
          { name: "Daiquiri", price: "80" },
          { name: "Lychee Martini", price: "80" },
          { name: "Cosmopolitan", price: "80" },
        ],
      },
      {
        section: "Mocktail Pods",
        items: [
          { name: "Trilogy", price: "35" },
          { name: "First Light", price: "35" },
        ],
      },
    ],
  },
};

const MenuDetailPage = () => {
  const { category } = useParams<{ category: string }>();
  const data = MENU_DATA[category ?? "appetizers"] ?? MENU_DATA["appetizers"];

  return (
    <div className="min-h-screen">
      <div className="w-full pb-0 pt-24 text-center">
        <h1 className="heading mx-auto mb-4 max-w-[378px] text-center">
          <LetterByLetter lines={data.titleLines} align="center" />
        </h1>

        <div className="mx-auto mb-0 grid w-full max-w-[1400px] grid-cols-1 items-start md:grid-cols-[1fr_auto_1fr] md:gap-4 md:pb-0">
          <p className="hidden md:block base-text mx-auto max-w-[303px] text-center md:mt-[35%] md:px-2">
            <LetterByLetter lines={data.leftText} align="center" />
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
            <LetterByLetter lines={data.rightText} align="center" />
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col items-center py-10">
        <h2 className="heading mb-16">
          <LetterByLetter lines={[data.sectionTitle]} align="center" />
        </h2>

        <div className="w-[85%] border-t border-[#FCF7F5] mb-10"></div>

        <div className="flex flex-col items-center w-full max-w-[680px] px-6">
          {data.sections.map((sec) => (
            <div key={sec.section} className="w-full mb-10">
              {sec.section ? (
                <h3
                  className="text-center mb-2"
                  style={{
                    fontFamily: "Moche, sans-serif",
                    fontWeight: 300,
                    fontSize: "24px",
                    lineHeight: "100%",
                    color: "var(--text)",
                    opacity: 0.85,
                  }}
                >
                  {sec.section}
                </h3>
              ) : null}
              <ul className="flex flex-col w-full">
                {sec.items.map((item, idx) => (
                  <li
                    key={item.name}
                    className="flex justify-between"
                    style={{
                      fontFamily: "Moche, sans-serif",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "300%",
                      color: "var(--text)",
                    }}
                  >
                    <span className="flex-1">
                      <LetterByLetter text={item.name} align="left" stagger={0.03} delayChildren={idx * 0.06} />
                    </span>
                    <span className="flex-shrink-0">
                      <LetterByLetter text={item.price} align="right" stagger={0.03} delayChildren={idx * 0.06 + 0.1} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuDetailPage;
