import CardSkills from "./Card/CardSkills";
import { FaReact } from "react-icons/fa";
import { RiJavascriptLine } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import { TbBrandNextjs } from "react-icons/tb";
import { SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";

const FrontSkill = () => {
  const frontData = [
    { icon: <RiJavascriptLine />, title: "JavaScript" },
    { icon: <TbBrandTypescript />, title: "TypeScript" },
    { icon: <FaReact />, title: "React" },
    { icon: <TbBrandNextjs />, title: "Next.js" },
    { icon: <SiRedux />, title: "Redux" },
    { icon: <SiTailwindcss />, title: "TailwindCSS" },
    { icon: <FaCss3Alt />, title: "CSS" },
  ];

  return (
    <>
      <h3 className="text-left md:pl-60 text-xl text-bold pt-4">
        Frontend Skills
      </h3>
      <div className="flex flex-wrap justify-center">
        {frontData.map((item, index) => (
          <CardSkills key={index} icon={item.icon} title={item.title} />
        ))}
      </div>
    </>
  );
};

export default FrontSkill;
