import { LetterByLetter } from "../../components/LetterByLetter";

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


      <div className="max-w-[1400px] mb-25">
        <h1 className="text-[70px] md:text-[109.5px] text-center font-moche font-normal leading-[120%] tracking-[-2.8%] mt-12 mb-16">
          <LetterByLetter lines={["crafted to evoke wonder"]} align="center" />
        </h1>
        <div className="flex justify-between flex-col items-center md:flex-row gap-10">
          <div className="max-w-[590px]">
            <img
              src="/png/seafood.png"
              alt="seafood"
              className="w-full py-6"
            />
            <h1 className="heading">
              Sea Food
            </h1>
            <p className="base-text mt-4 max-w-[590px]">
              Seafood plays a central role in KAJA's culinary identity, inspiring dishes that balance Mediterranean tradition with contemporary technique. From delicate crudos and vibrant ceviches to carefully sourced fish and shellfish, each creation reflects our commitment to freshness, craftsmanship, and unforgettable flavour.
            </p>
          </div>
          <div>
            <img src="/png/ocean-plate.png" alt="nature" className="py-5" />
            <h1 className="heading">
              <LetterByLetter lines={["Ocean To Plate"]} align="center" />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
