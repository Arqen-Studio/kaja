import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import { LetterByLetter } from "../../components/LetterByLetter";
import { motion } from "framer-motion";

const Stories = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="mx-auto w-full px-6 md:px-[3vw] py-10 md:py-16">
        <h1 className="heading mx-auto mb-4 max-w-[380px] text-center">
          <LetterByLetter
            lines={["Inside the", "World of KAJA"]}
            align="center"
          />
        </h1>

        <div className="mx-auto mb-0 grid w-full grid-cols-1 items-start md:grid-cols-[1fr_auto_1fr] md:gap-4 md:pb-0">
          <p
            className="hidden md:block base-text mx-auto max-w-[300px] text-center md:mt-[35%] mr-5 px-3
          "
          >
            <LetterByLetter
              lines={[
                "Discover the ideas, people, and",
                "inspirations that shape every ",
                "KAJA experience.",
              ]}
              align="center"
            />
          </p>

          <div className="flex justify-center leading-none md:justify-self-center">
            <img
              src="/png/stories.png"
              alt="chef"
              width={504}
              height={492}
              className="h-[492px] max-w-[504px] max-w-full object-cover object-[center_20]"
            />
          </div>

          <p className="md:block hidden base-text mx-auto max-w-[303px] text-center md:mt-[35%] ml-5 px-3">
            <LetterByLetter
              lines={[
                "From culinary craftsmanship,",
                "architecture to seasonal",
                "ingredients, every story reveals",
                "another layer of the journey.",
              ]}
              align="center"
            />
          </p>
        </div>
      </div>
      <div className="max-w-[938px] pb-10 px-6 ">
        <p className="heading ">
          Exploring the people, creativity, and inspiration behind the KAJA
          experience.
        </p>
      </div>

      <div className="flex w-full py-10 px-6 md:px-[3vw]">
        <div className="mx-auto max-w-6xl flex md:flex-row flex-col gap-10 justify-center items-start">
          <div className="flex-1">
            <img
              src="/png/seafood.png"
              alt="food"
              className="w-full object-cover"
              style={{ height: "420px", objectFit: "cover" }}
            />
            <div className="mt-6 flex flex-col items-start mb-4">
              <h3 className="heading font-extralight mb-3">
                <LetterByLetter lines={["Sea Food"]} align="left" />
              </h3>
              <p className="base-text max-w-[350px]">
                Seafood plays a central role in KAJA's culinary identity,
                inspiring dishes that balance Mediterranean tradition with
                contemporary technique. From delicate crudos and vibrant
                ceviches to carefully sourced fish and shellfish, each creation
                reflects our commitment to freshness, craftsmanship, and
                unforgettable flavour.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="/png/ocean-plate.png"
              alt="Ocean To Plate"
              className="w-full object-cover"
              style={{ height: "420px", objectFit: "cover" }}
            />
            <div className="mt-6 flex flex-col items-center md:items-start mb-4">
              <h3 className="heading font-extralight mb-3">
                Ocean To Plate
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mb-25">
        <h1 className="text-[70px] md:text-[109.5px] text-center font-moche font-extralight leading-[120%] tracking-[-2.8%] ">
          <LetterByLetter lines={["crafted to evoke wonder"]} align="center" />
        </h1>
        <div className="flex justify-between flex-col items-center md:flex-row gap-10">
          <div className="max-w-[590px]">
            <img
              src="/png/architecture.png"
              alt="architecture"
              className="w-full py-6"
            />
            <h1 className="heading">
              <LetterByLetter
                lines={["Architecture meets Atmosphere"]}
                align="center"
              />
            </h1>
          </div>
          <div>
            <img src="/png/ocean-plate.png" alt="nature" className="py-5" />
            <h1 className="heading">
              <LetterByLetter lines={["Ocean To Plate"]} align="center" />
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full items-center mt-20">
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
