import CardSkills from "./Card/CardSkills";
import { FaNode } from "react-icons/fa";
import { SiNestjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";

const BackSkill = () => {
  const backData = [
    { icon: <FaNode />, title: "Node.js" },
    { icon: <SiNestjs />, title: "Nest.js" },
    { icon: <SiExpress />, title: "Express.js" },
    { icon: <SiMongodb />, title: "MongoDB" },
    { icon: <SiMysql />, title: "MySQL" },
    { icon: <SiPostgresql />, title: "PostgreSQL" },
  ];

  return (
    <>
      <h3 className="md:pl-60 text-xl text-bold pt-4 text-left">
        Backend Skills
      </h3>
      <div className="flex flex-wrap justify-center">
        {backData.map((item, index) => (
          <CardSkills key={index} icon={item.icon} title={item.title} />
        ))}
      </div>
    </>
  );
};

export default BackSkill;
