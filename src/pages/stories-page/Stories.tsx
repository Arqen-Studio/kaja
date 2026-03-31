import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

const Stories = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-20">
        <h1 className="heading mx-auto mb-4 max-w-[378px] text-center">
          Introducing our Chef
        </h1>

        <div className="mx-auto mb-0 grid w-full grid-cols-1 items-start md:grid-cols-[1fr_auto_1fr] md:gap-4 md:pb-0">
          <p className="hidden md:block base-text mx-auto max-w-[230px] text-center md:mt-[35%] md:px-2">
            KAJA was created with a clear intention: to surprise, engage, and
            leave a lasting impression.
          </p>

          <div className="flex justify-center leading-none md:justify-self-center">
            <img
              src="/png/chef.png"
              alt="chef"
              width={504}
              height={492}
              className="h-[492px] max-w-[504px] max-w-full object-cover object-[center_20]"
            />
          </div>

          <p className="md:block hidden base-text mx-auto max-w-[303px] text-center md:mt-[35%]">
            It is not simply a restaurant, but a complete evening experience
            where iconic architecture, contemporary cuisine, and entertainment
            come together as one.
          </p>
        </div>
      </div>
      <div className="max-w-[938px] pb-10 px-4 ">
        <p className="heading ">
          Italian born Chef for a contemporary, high-level destination
          restaurant offering a fully immersive dining experience.
        </p>
      </div>

      <div className="max-w-7xl flex md:flex-row-reverse flex-col border border-[#32341D] dark:border-[#D6B283] mt-10 mb-20">
        <img
          src="/png/chef.png"
          alt="chef"
          className="max-full object-cover "
        />
        <div className="flex flex-col md:items-start items-center  min-w-[100px] px-4 py-6 ml-4">
          <div className="py-4 flex flex-col items-center md:items-start ">
            <h1 className="heading ">Takahiko </h1>
            <h1 className="heading ">Kondo</h1>
          </div>
          <p className="base-text text-center md:text-start leading-[120%] ">
            Takahiko ‘Taka’ Kondo began his culinary journey in high school,
            cooking at home and learning from food programs on television before
            experimenting on his own. His interest in art and fashion led him to
            Italy in 2000, where a pivotal encounter with Massimo Bottura
            revealed his blend of passion, precision, and curiosity. Taka went
            on to spend seventeen years at Bottura’s three-Michelin-star Osteria
            Francescana in Modena, becoming sous-chef in 2014. In 2022, he
            became Executive Chef of the Michelin-starred Gucci Osteria
            Florence. In 2025, he assumed the role of Head Chef, leading the
            restaurant’s culinary vision into its next chapter.
          </p>
        </div>
      </div>
      <div className="w-full py-10">
        <h1 className="heading">crafted to evoke wonder</h1>
        <div className="flex justify-between flex-col md:flex-row gap-10">
          <div>
            <img src="/png/seafood.png" alt="seafood" className="py-6" />
            <h1 className="heading">Seafood</h1>
          </div>
          <div>
            <img src="/png/nature.png" alt="nature" className="py-5"/>
            <h1 className="heading">Heart of Nature</h1>
          </div>
        </div>
      </div>
      <div className="w-full  items-center">
        <div className="border border-[#D6B283] border-[0.85px] w-full "></div>
        <Link to="/menu">
          <div className="flex  items-center m-10 transition-transform duration-300 hover:translate-x-2">
            <h1 className="heading font-light">Discover Our Menu</h1>
            <MoveRight className="w-10 h-10" />
          </div>
        </Link>
        <div className="border border-[#D6B283] border-[0.85px] w-full  "></div>
      </div>
    </div>
  );
};

export default Stories;
