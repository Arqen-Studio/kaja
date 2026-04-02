import IntroSection from "../home/IntroSection";
import { LetterByLetter } from "../../components/LetterByLetter";

const MenuDetailPage = () => {
  const items = [
    { name: "Smoked Beef Steak", price: "$ 60.00" },
    { name: "Grilled Ribeye", price: "$ 55.00" },
    { name: "Classic Sirloin", price: "$ 50.00" },
    { name: "Tenderloin Steak", price: "$ 65.00" },
  ];

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-6xl px-4 pb-0 pt-14 md:py-20">
        <h1 className="heading mx-auto mb-4 max-w-[378px] text-center">
          <LetterByLetter lines={["Steaks Menu"]} align="center" />
        </h1>

        <div className="mx-auto mb-0 grid w-full grid-cols-1 items-start md:grid-cols-[1fr_auto_1fr] md:gap-4 md:pb-0">
          <p className="hidden md:block base-text mx-auto max-w-[230px] text-center md:mt-[35%] md:px-2">
            <LetterByLetter lines={["KAJA was created with a", "clear intention: to surprise,", "engage, and leave a", "lasting impression."]} align="center" />
          </p>

          <div className="flex justify-center leading-none md:justify-self-center">
            <img
              src="/png/steaks.png"
              alt="Steaks"
              width={504}
              height={492}
              className="h-[492px] max-w-[504px] max-w-full object-cover object-[center_20]"
            />
          </div>

          <p className="md:block hidden base-text mx-auto max-w-[303px] text-center md:mt-[35%]">
            <LetterByLetter lines={["It is not simply a restaurant,", "but a complete evening experience", "where iconic architecture,", "contemporary cuisine, and", "entertainment come together as one."]} align="center" />
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col items-center py-10">
        <h2 className="heading mb-6"><LetterByLetter lines={["For meat lovers"]} align="center" /></h2>

        <div className="w-[60%] border-t border-[#e6d3a3]/30 mb-6"></div>

        <ul className="flex flex-col gap-0 w-full max-w-[600px] px-10">
          {items.map((item) => (
            <li key={item.name} className="flex justify-between py-4 md:py-5">
              <span className="base-text">{item.name}</span>
              <span className="base-text">{item.price}</span>
            </li>
          ))}
        </ul>
      </div>
      <IntroSection />
    </div>
  );
};

export default MenuDetailPage;
