import Heropic from "../assets/hero.jpg";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <img
        src={Heropic}
        alt="Main-pictures"
        className="bg-cover bg-center min-h-screen"
      ></img>
      <div className="text-center m-4 ">
        <a
          href="#products"
          className="bg-amber-800 hover:bg-amber-600 text-white font-bold text-xl py-2 px-6  rounded  flex items-center justify-center gap-2  cursor-pointer    "
        >
          Order Now
          <FaArrowRight  className="ml-1 mt-1" /> 
        </a>
      </div>
    </section>
  );
};
export default Hero;
