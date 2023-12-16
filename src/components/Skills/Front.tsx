import CardSkills from "./Card/CardSkills";
import { FaReact } from "react-icons/fa";
import { RiJavascriptLine } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import { TbBrandNextjs } from "react-icons/tb";
import { SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { SiHtml5 } from "react-icons/si";
import { SiAngular } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";

const FrontSkill = () => {
  const frontData = [
    { icon: <RiJavascriptLine />, title: "JavaScript" },
    { icon: <TbBrandTypescript />, title: "TypeScript" },
    { icon: <FaReact />, title: "React" },
    { icon: <TbBrandNextjs />, title: "Next.js" },
    { icon: <SiRedux />, title: "Redux" },
    { icon: <SiTailwindcss />, title: "TailwindCSS" },
    { icon: <FaBootstrap />, title: "Bootstrap" },
    { icon: <FaCss3Alt />, title: "CSS" },
    { icon: <SiHtml5 />, title: "HTML" },
    { icon: <SiAngular />, title: "Angular" },
  ];

  return (
    <>
      <h3 className="text-left md:pl-56 text-xl text-bold pt-4 mb-1">
        Frontend
      </h3>
      <div className="flex flex-wrap justify-center max-w-3xl mx-auto">
        {frontData.map((item, index) => (
          <CardSkills key={index} icon={item.icon} title={item.title} />
        ))}
      </div>
    </>
  );
};

export default FrontSkill;
