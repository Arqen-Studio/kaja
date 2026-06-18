import { useParams } from "react-router-dom";
import { LetterByLetter } from "../../components/LetterByLetter";

type MenuItem = { name: string; price: string; description?: string };
type MenuSection = { section: string; items: MenuItem[] };
type CategoryData = {
  title: string;
  titleLines: string[];
  subtitle: string;
  image: string;
  imageHeight?: number;
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
    image: "/png/menu/appetizer-menu.png",
    imageHeight: 756,
    sectionTitle: "Designed to Awaken the Palate",
    leftText: ["Fresh ingredients, vibrant", "flavours, and thoughtful", "composition come together to", "create the perfect beginning."],
    rightText: ["Designed to be shared,", "explored, and enjoyed, each", "dish invites guests deeper", "into the KAJA experience."],
    sections: [
      {
        section: "Cold & Raw",
        items: [
          { name: "Tuna Crudo", price: "130", description: "Watermelon gazpacho · pickled watermelon skin · mint" },
          { name: "Scallop Ceviche", price: "145", description: "Coconut yuzu tiger's milk · grilled peppers · cassava chips" },
          { name: "Yellowtail Tiradito", price: "110", description: "Sesame ponzu · fine cucumber brunoise" },
          { name: "Salmon Crudo", price: "125", description: "Truffle ponzu · orange segments · pickled red onion · sesame seeds" },
          { name: "Beef Carpaccio", price: "195", description: "Coconut yuzu tiger's milk · grilled peppers · cassava chips" },
          { name: "Beetroot Beef Tartare", price: "135", description: "Beetroot ravioli · horseradish cream · pickled mustard seeds" },
          { name: "Burrata", price: "175", description: "Sundried tomato · tomato water · basil pesto & oil · toasted almonds" },
          { name: "House Guacamole", price: "90", description: "Pomelo pearls · tomato jam · micro coriander · pink quinoa crackers" },
          { name: "Torched Tuna", price: "120", description: "Passionfruit sauce · nikkei aioli · pickled daikon & carrot" },
        ],
      },
      {
        section: "Hot Starters",
        items: [
          { name: "Sea Lollipop", price: "95", description: "Squid & prawn · okonomi sauce" },
          { name: "Miso Aubergine", price: "110", description: "Tomato sauce · fresh mozzarella · herb croutons · toasted walnuts" },
          { name: "Truffle Arancini", price: "110", description: "Fresh mozzarella · aji amarillo mayo · micro basil" },
          { name: "Grilled Prawn", price: "170", description: "Truffle cauliflower purée · tobiko · fried leeks" },
          { name: "Yuzu Scallop", price: "190", description: "Yuzu beurre blanc · salmon roe · fennel fronds" },
          { name: "Slow Braised Oxtail", price: "195", description: "Crispy plantain · red chilli relish · fresh coriander" },
        ],
      },
    ],
  },
  mains: {
    title: "Mains Menu",
    titleLines: ["Mains", "Menu"],
    subtitle: "The heart of the meal",
    image: "/png/menu/mains-menu.png",
    imageHeight: 756,
    sectionTitle: "The Heart of the Experience",
    leftText: ["Crafted from exceptional", "ingredients and guided by", "contemporary technique, our", "signature dishes celebrate", "flavour at its fullest."],
    rightText: ["Each plate reflects KAJA's", "passion for creativity,", "precision, and memorable", "dining experiences."],
    sections: [
      {
        section: "Robata",
        items: [
          { name: "Tomahawk 800 g", price: "895", description: "Australian grass fed beef · sea salt · your choice of sauce" },
          { name: "MB4 Wagyu Ribeye 300 g", price: "580", description: "Australian grass fed beef · sea salt · your choice of sauce" },
          { name: "Tenderloin 200 g", price: "330", description: "Australian grass fed beef · sea salt · your choice of sauce" },
          { name: "Yellowfin Tuna Loin 200 g", price: "220", description: "Cherry tomato · evoo · sea salt" },
        ],
      },
      {
        section: "Mains",
        items: [
          { name: "Black Cod", price: "190", description: "Parmesan mashed potato · sautéed beans · dill" },
          { name: "Pork Belly", price: "255", description: "Roasted apple & fennel · carrot and cumin purée" },
          { name: "Harissa Cauliflower", price: "145", description: "Yuzu coconut yoghurt · pomegranate · toasted almond flakes" },
          { name: "Miso Chicken", price: "195", description: "Miso mushroom sauce · grilled bok choi · chives" },
          { name: "Grilled Octopus", price: "215", description: "Ocopa sauce · red cabbage mayo · tobiko · edamame" },
          { name: "KAJA Paccheri", price: "150", description: "Triple tomato sauce · parmesan · basil" },
          { name: "Cacio e Pepe", price: "165", description: "Raw tuna · cracked black pepper · pecorino" },
        ],
      },
    ],
  },
  pizzas: {
    title: "Pizza Menu",
    titleLines: ["Pizza", "Menu"],
    subtitle: "Wood-fired perfection",
    image: "/png/menu/pizza-menu.png",
    imageHeight: 756,
    sectionTitle: "Tradition Meets Creativity",
    leftText: ["Inspired by Italian tradition and", "elevated through premium", "ingredients, our pizzas balance", "simplicity with craftsmanship."],
    rightText: ["From carefully selected toppings to", "perfectly baked crusts, every detail", "is considered."],
    sections: [
      {
        section: "",
        items: [
          { name: "Scarpetta", price: "210", description: "Scarpetta sauce · fior di latte · grana padano · pesto · evoo" },
          { name: "Prosciutto e Funghi", price: "140", description: "Tomato · fior di latte · sautéed mushrooms · ham · basil · evoo" },
          { name: "Margherita Sbagliata", price: "195", description: "Fior di latte · san marzano · grana padano · pesto · evoo" },
          { name: "Tonno e Cipolla", price: "160", description: "Four interpretations of onion · creamed · caramelized · fried · fermented · raw tuna · fior di latte · evoo" },
          { name: "Nerano", price: "160", description: "Zucchini cream · fior di latte · grana padano · pancetta · zucchini chips" },
          { name: "Parmigiana", price: "150", description: "Eggplant cream · fior di latte · roasted tomato · fried eggplant · parmigiano reggiano · basil · evoo" },
          { name: "Margherita", price: "120", description: "Tomato · fior di latte · grana padano · basil · evoo" },
          { name: "Marinara", price: "95", description: "Tomato · roasted cherry tomatoes · basil · oregano · evoo" },
        ],
      },
    ],
  },
  desserts: {
    title: "Dessert Menu",
    titleLines: ["Dessert", "Menu"],
    subtitle: "Sweet finales",
    image: "/png/menu/dessert-menu.png",
    imageHeight: 770,
    sectionTitle: "A Sweet Ending to the Journey",
    leftText: ["Refined, indulgent, and", "beautifully balanced, our", "desserts are designed to leave a", "lasting impression."],
    rightText: ["A thoughtful finale that brings", "together creativity, texture, and", "flavour in every bite."],
    sections: [
      {
        section: "",
        items: [
          { name: "Burnt Cheesecake", price: "90", description: "Dark Chocolate and Coffee Sauce" },
          { name: "Warm Chocolate Soufflé", price: "90", description: "Vanilla Ice Cream" },
          { name: "Tiramisù", price: "95", description: "Coconut Almond Sponge" },
          { name: "Carrot Cake", price: "90", description: "Spiced Carrot Cake · Citrus Cream Cheese · Candied Ginger · Salted Caramel" },
          { name: "Lemon Meringue Tart", price: "90", description: "Italian Meringue Dome · Cucumber Ice Cream" },
        ],
      },
    ],
  },
  cocktails: {
    title: "Cocktail Menu",
    titleLines: ["Cocktail", "Menu"],
    subtitle: "Crafted to sip",
    image: "/png/menu/cocktail-menu.png",
    imageHeight: 756,
    sectionTitle: "Mixed with Creativity and Intention",
    leftText: ["Inspired by global influences", "and crafted with precision, each", "cocktail offers its own unique", "expression."],
    rightText: ["Designed to complement the", "atmosphere, cuisine, and energy of", "KAJA throughout the evening."],
    sections: [
      {
        section: "Signature Cocktails",
        items: [
          { name: "Azur", price: "155", description: "Gin Infused Blue Pea Flower, Blueberry Shrubs, Lemon Juice, Albumen, Angostura Orange" },
          { name: "The Jungle", price: "195", description: "White Rum, Spiced Rum, Campari, Orange Juice, Apple Juice, Hibiscus Syrup, Orgeat Syrup" },
          { name: "Passion Cloud", price: "195", description: "Vodka Infused Vanilla, Passion Fruit Puree, Triple Sec, Orgeat Whipping Cream" },
          { name: "Spicy Senorita", price: "170", description: "Tequila Infused Vanilla, Ginger Juice, Lime Juice, Chili Honey Syrup" },
          { name: "Sinful", price: "200", description: "Tequila Infused Vanilla, Passion Fruit Puree, Lemon Juice, Vanilla Syrup, Albumen" },
          { name: "Cave Garden", price: "180", description: "Rum Infused Blue Pea Flower, Berry Liqueur, Orgeat Syrup, Lemon Juice, Vegan Foamer, Angostura Bitter" },
          { name: "Sunset In Ubud", price: "145", description: "Gin Infused Blue Pea Flower, Rosemary & Clove Syrup, Lemon Juice, Tonic Water" },
          { name: "Blush Edition", price: "125", description: "Vodka Infused Vanilla, Cherry Liqueur, Strawberry Puree, Ginger Syrup, Lemon Juice, Albumen" },
          { name: "Reverie", price: "165", description: "Dry Gin, Cranberry Shrubs, Triple Sec, Lemon Juice, Albumen, Orange Bitter" },
          { name: "The Whisper", price: "185", description: "Bourbon Whisky, Orange Marmalade, Peach Liqueur, Lemon Juice, Albumen, Orange Bitter" },
          { name: "Sacred", price: "145", description: "Bourbon Whisky, Berry Liqueur, Dragon Fruit Cordial, Lemon Juice, Albumen" },
          { name: "Still", price: "110", description: "Vodka Infused Cucumber, Clarified Tomato, Parsley, Lemon Juice, Simple Syrup, Tabasco" },
          { name: "Earthen", price: "190", description: "Bourbon Whisky, Triple Sec, Clarified Beetroot, Lemon Juice, Honey, Ginger" },
          { name: "The Sting", price: "110", description: "White Rum, Passion Fruit Puree, Chili Honey Syrup, Lemon Juice, Albumen" },
          { name: "Hush", price: "140", description: "Clarified Bourbon Whisky, Orgeat Syrup, Lemon Juice, Angostura Bitter" },
        ],
      },
      {
        section: "Classic Cocktails",
        items: [
          { name: "Margarita", price: "185", description: "Tequila, Triple Sec, Lime Juice, Salt Rim" },
          { name: "Mojito", price: "185", description: "White Rum, Lime Juice, Mint Leaf, Sugar Syrup, Soda Water" },
          { name: "Negroni", price: "185", description: "Gin, Campari, Sweet Vermouth" },
          { name: "Espresso Martini", price: "185", description: "Vodka, Coffee Liqueur, Espresso, Sugar Syrup" },
          { name: "Whisky Sour", price: "185", description: "Bourbon Whisky, Lemon Juice, Sugar Syrup, Albumen, Angostura Bitter" },
          { name: "Daiquiri", price: "185", description: "White Rum, Lime Juice, Sugar Syrup" },
          { name: "Lychee Martini", price: "185", description: "Vodka, Lychee Liqueur, Lychee Syrup, Lemon Juice" },
          { name: "Dry Martini", price: "185", description: "Gin, Dry Vermouth, Olive Brine or Lemon Twist" },
          { name: "Old Fashioned", price: "185", description: "Bourbon Whisky, Sugar, Angostura Bitter, Orange Peel" },
          { name: "Piña Colada", price: "185", description: "White Rum, Coconut Liqueur, Coconut Cream, Pineapple Juice" },
          { name: "Cosmopolitan", price: "185", description: "Vodka, Triple Sec, Cranberry Juice, Lime Juice" },
          { name: "Bloody Mary", price: "185", description: "Vodka, Tomato Juice, Lemon Juice, Worcestershire Sauce, Tabasco, Salt, Pepper" },
          { name: "Amaretto Sour", price: "185", description: "Amaretto Disaronno, Lemon Juice, Sugar Syrup, Albumen, Angostura Bitter" },
          { name: "Long Island Iced Tea", price: "185", description: "Vodka, Gin, White Rum, Tequila, Triple Sec, Lemon Juice, Sugar Syrup, Coke" },
        ],
      },
    ],
  },
  "shot-pods": {
    title: "Shot Pods",
    titleLines: ["Shot", "Pods"],
    subtitle: "A ritual worth sharing",
    image: "/png/menu/shotpod-menu.png",
    imageHeight: 675,
    sectionTitle: "A Ritual Worth Sharing",
    leftText: ["Playful, unexpected, and made", "for sharing, Shot Pods bring a", "distinctive sense of occasion to", "every gathering."],
    rightText: ["More than a drink, they are a", "moment of connection designed to", "spark conversation and celebration."],
    sections: [
      {
        section: "Cocktail Pods",
        items: [
          { name: "Margarita", price: "80", description: "Jose Cuervo Especial, Triple Sec, Lime Juice, Simple Syrup, Sodium Alginate, Calcium Lactate" },
          { name: "Mojito", price: "95", description: "Light Rum, Simple Syrup, Lime Juice, Sodium Alginate, Calcium Lactate" },
          { name: "Espresso Martini", price: "80", description: "Vodka, Coffee Liqueur, Espresso, Sodium Alginate, Calcium Lactate" },
          { name: "Daiquiri", price: "80", description: "Light Rum, Triple Sec, Lime Juice, Simple Syrup, Sodium Alginate, Calcium Lactate" },
          { name: "Lychee Martini", price: "80", description: "Vodka, Lychee Fruit, Lychee Liqueur, Lime Juice, Simple Syrup, Sodium Alginate, Calcium Lactate" },
          { name: "Cosmopolitan", price: "80", description: "Vodka, Triple Sec, Lime Juice, Simple Syrup, Cranberry Juice, Sodium Alginate, Calcium Lactate" },
        ],
      },
      {
        section: "Mocktail Pods",
        items: [
          { name: "Triloguy", price: "35", description: "Yuzu Jam, Calamansi Puree, Spiced Syrup, Lemon Juice, Sodium Alginate, Calcium Lactate" },
          { name: "First Light", price: "35", description: "Hibiscus Syrup, Lemon Juice, Peach Cordial, Sodium Alginate, Calcium Lactate" },
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

        <div className="mx-auto mb-0 grid w-full max-w-[1400px] grid-cols-1 items-start lg:grid-cols-[1fr_auto_1fr] lg:gap-4 lg:pb-0">
          <p className="hidden lg:block base-text mx-auto max-w-[303px] text-center lg:mt-[35%] lg:px-2">
            <LetterByLetter lines={data.leftText} align="center" />
          </p>

          <div className="flex justify-center leading-none md:justify-self-center">
            <img
              src={data.image}
              alt={data.title}
              width={504}
              height={492}
              className="max-w-[504px] max-w-full object-cover object-[center_20]"
              style={{ height: `${data.imageHeight ?? 492}px` }}
            />
          </div>

          <p className="lg:block hidden base-text mx-auto max-w-[303px] text-center lg:mt-[35%]">
            <LetterByLetter lines={data.rightText} align="center" />
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col items-center py-10">
        <h2 className="heading mb-16 px-6">
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
                  <li key={item.name} className="flex flex-col mb-3">
                    <div
                      className="flex justify-between"
                      style={{
                        fontFamily: "Moche, sans-serif",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "200%",
                        color: "var(--text)",
                      }}
                    >
                      <span className="flex-1">
                        <LetterByLetter text={item.name} align="left" stagger={0.03} delayChildren={idx * 0.06} />
                      </span>
                      <span className="flex-shrink-0">
                        <LetterByLetter text={item.price} align="right" stagger={0.03} delayChildren={idx * 0.06 + 0.1} />
                      </span>
                    </div>
                    {item.description && (
                      <span style={{
                        fontFamily: "Moche, sans-serif",
                        fontWeight: 300,
                        fontSize: "14px",
                        lineHeight: "140%",
                        color: "var(--text)",
                        // opacity: 0.65,
                        display: "block",
                        maxWidth: "75%",
                      }}>
                        {item.description}
                      </span>
                    )}
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
