import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import { LetterByLetter } from "../../components/LetterByLetter";
import { motion } from "framer-motion";

const Stories = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <div className="mx-auto w-full px-6 md:px-[3vw] py-10 md:py-20">
        <h1 className="heading mx-auto mb-4 max-w-[378px] text-center">
          <LetterByLetter lines={["Introducing our Chef"]} align="center" />
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
              src="/png/chef.png"
              alt="chef"
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
      <div className="max-w-[938px] pb-10 px-6 md:px-[3vw]">
        <p className="heading ">
          <LetterByLetter
            lines={[
              "Italian born Chef for a contemporary,",
              "high-level destination restaurant",
              "offering a fully immersive",
              "dining experience.",
            ]}
            align="center"
          />
        </p>
      </div>

      <div className="flex w-full py-10 px-6 md:px-[3vw]">
        <div className="mx-auto max-w-6xl flex md:flex-row flex-col gap-10 justify-center items-center ">
          <div>
            <div>
              <img
                src="/png/food.png"
                alt="food"
                className="w-full max-w-[520px] object-cover"
              />
            </div>

            <div className="mt-6 flex flex-col items-center  md:items-start mb-4">
              <h3 className="heading font-extralight mb-3">
                <LetterByLetter lines={["Sea Food"]} align="left" />
              </h3>
              <p className="base-text max-w-[375px]">
                <LetterByLetter
                  lines={[
                    "Takahiko ‘Taka’ Kondo began his culinary",
                    "journey in high school, cooking at home",
                    "and learning from food programs on television",
                    "before experimenting on his own. His interest",
                    "in art and fashion led him to Italy in 2000,",
                    "where a pivotal encounter with Massimo Bottura",
                    "revealed his blend of passion, precision,",
                    "and curiosity.",
                  ]}
                  align="left"
                />
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start text-center p-10 mt-6 mb-6 space-y-6">
            <Link
              to="/about#chef-introduction"
              className="relative block w-[200px] h-[200px] md:w-[300px] md:h-[300px] overflow-hidden"
            >
              <img
                src="/png/plate.png"
                alt="Plate"
                className="absolute inset-0 m-auto w-[60%] h-[60%] object-contain"
              />

              <img
                src="/png/circular-text.png"
                alt="circular text"
                className="absolute inset-0 w-full h-full object-contain animate-spin-slow pointer-events-none"
              />
            </Link>

            <div className="max-w-[120px] py-10 mt-4">
              <h3 className="heading font-extralight text-center md:text-left">
                <LetterByLetter lines={["Best Food", "in Ubud"]} align="left" />
              </h3>
            </div>
          </div>{" "}
        </div>
      </div>

      <div className="max-w-[1400px] mb-10">
        <h1 className="text-[70px] md:text-[109.5px] text-center font-moche font-extralight leading-[120%] tracking-[-2.8%] ">
          <LetterByLetter lines={["crafted to evoke wonder"]} align="center" />
        </h1>
        <div className="flex justify-between flex-col items-center md:flex-row gap-10">
          <div className="max-w-[590px]">
            <img src="/png/seafood.png" alt="seafood" className="w-full py-6" />
            <h1 className="heading">
              <LetterByLetter lines={["Seafood"]} align="left" />
            </h1>
          </div>
          <div>
            <img src="/png/nature.png" alt="nature" className="py-5" />
            <h1 className="heading">
              <LetterByLetter lines={["Heart of Nature"]} align="left" />
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full items-center">
        <div className="border border-[#D6B283] border-[0.85px] w-full "></div>
        <Link to="/menu">
          <div className="flex justify-between items-center m-10 transition-transform duration-300 hover:translate-x-2">
            <h1 className="heading font-extralight">
              <motion.span
                animate={{ x: [0, 10, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="inline-block"
              >
                <LetterByLetter lines={["Discover Our Menu"]} align="left" />
              </motion.span>
            </h1>
            <motion.span
              animate={{ x: [0, 10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-block"
            >
              {" "}
              <MoveRight className="w-10 h-10" />
            </motion.span>
          </div>
        </Link>
        <div className="border border-[#D6B283] border-[0.85px] w-full  mb-10"></div>
      </div>
    </div>
  );
};

export default Stories;
