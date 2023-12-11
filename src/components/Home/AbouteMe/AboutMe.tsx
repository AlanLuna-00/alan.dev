import Image from "next/image";
import Alan from "@/assets/Alan.png";
import Contact from "./Contact/Contact";

const AbouteMe = () => {
  return (
    <div>
      <Image
        src={Alan}
        alt="Alan"
        width={220}
        height={220}
        priority={true}
        className="rounded-full shadow mx-auto"
      />
      <div className="text-center  text-gray-500 mt-2">
        <h2 className="text-2xl font-semibold text-black">
          Alan Julian Benito Luna
        </h2>
        <h3 className="text-xl ">Software Developer</h3>
        <h3 className="text-xl ">Backend Enthusiast</h3>
        <h3 className="text-xl ">Future Systems Analyst</h3>
      </div>
      <div className="text-center mt-4 mb-4 ">
        <Contact />
      </div>
    </div>
  );
};

export default AbouteMe;
