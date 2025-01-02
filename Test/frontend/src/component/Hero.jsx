import { FaYoutube } from "react-icons/fa6";
import logo from '../assets/nike-logo.png'
import { SingleImage } from "./SingleImage";

const brandsData = [
  {
    imageSrc:
    logo,
    lightImageSrc:
      "https://cdn.tailgrids.com/2.2/assets/images/brands/graygrids-white.svg",
    altText: "graygrids",
    link: "meety",
  },
  {
    imageSrc:
      "https://cdn.tailgrids.com/2.2/assets/images/brands/lineicons.svg",
    lightImageSrc:
      "https://cdn.tailgrids.com/2.2/assets/images/brands/lineIcons-white.svg",
    altText: "lineicons",
    link: "#",
  },
  {
    imageSrc: "https://cdn.tailgrids.com/2.2/assets/images/brands/uideck.svg",
    lightImageSrc:
      "https://cdn.tailgrids.com/2.2/assets/images/brands/uideck-white.svg",
    altText: "uideck",
    link: "#",
  },
  {
    imageSrc: "https://cdn.tailgrids.com/2.2/assets/images/brands/ayroui.svg",
    lightImageSrc:
      "https://cdn.tailgrids.com/2.2/assets/images/brands/ayroui-white.svg",
    altText: "ayroui",
    link: "#",
  },
];





const Hero = () => {
  return (
    <section className="relative bg-green h-[100vh] overflow-hidden">
      <div className="grid grid-cols-3 gap-2  text-center pt-[10vh] ">
        <div>
          <div className="relative">
            <img
              className="absolute w-52 -z-2 top-10 left-8"
              src="src/assets/e1.png"
              alt="nothing"
            />
            <div className="z-1 absolute">
              <img
                className="z-1"
                src="src/assets/AdobeStock_545875468@2x-1 (1).png"
                alt="red girl"
              />
            </div>
          </div>
        </div>
        <div>
          <strong className="text-xl relative uppercase text-ff inline">
            <span className="absolute bottom-[35%] left-[-15%] font-extrabold">
              _____
            </span>{" "}
            Independent institution with{" "}
            <span className="absolute bottom-[35%] right-[-15%] font-extrabold">
              _____
            </span>
          </strong>
          <h1 className="capitalize text-7xl font-bold text-ff  mt-16">
            Top Notch <br />
            Education & Research
          </h1>
          <p className="text-ff mt-10 font-semibold w-100">
            paragraph is defined as a group of sentences or a single sentence
            that forms a unit Length and appearance do not determine whether a
            section in a paper is a paragraph. For instance, in some styles of
            writing, particularly journalistic styles, a paragraph can be
          </p>
          <div className="px-4 mt-6 flex items-center justify-center">
            <button className="bg-[#8cff80] text-green px-5 py-4 flex items-center justify-center rounded-lg  gap-2 font-semibold">
              Try it now
            </button>
            <button className="bg-ff text-green px-5 py-2 ml-4 flex items-center justify-center rounded-lg font-semibold gap-2">
              <FaYoutube color={"#1b4530"} size={"40px"} /> Watch demo class
            </button>
          </div>
        </div>
        <div>
          <div className="relative">
            <img 
              className="absolute w-44 -z-2 top-4 right-4"
              src="src/assets/e2.png" 
              alt="boynotnhig" />
          <div className="z-1 absolute">
            <img
              src="src/assets/AdobeStock_587433154-1.png"
              alt="a boywith boook"
            />
            </div>
          </div>
        </div>
      </div>
      {/* <section className="bg-white py-20 lg:py-[120px] dark:bg-dark"> */}
      <div className="container mx-auto z-4 absolute bg-ff mt-4 w-100">
        <div className="-mx-4 flex ">
          <div className="w-full px-4">
            <div className="flex  items-center justify-center">
              {brandsData.map((brand, i) => (
                <SingleImage key={i} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    {/* </section> */}
      
    </section>
  );
};

export default Hero;




