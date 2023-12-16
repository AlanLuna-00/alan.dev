import CardSkills from "./Card/CardSkills";
import { FaNode } from "react-icons/fa";
import { SiNestjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { FiType } from "react-icons/fi";
import { TbBrandCSharp } from "react-icons/tb";
import { DiMysql } from "react-icons/di";
import { SiMicrosoftsqlserver } from "react-icons/si";

const BackSkill = () => {
  const backData = [
    { icon: <FaNode />, title: "Node.js" },
    { icon: <SiNestjs />, title: "Nest.js" },
    { icon: <SiExpress />, title: "Express.js" },
    { icon: <SiMongodb />, title: "MongoDB" },
    { icon: <SiMysql />, title: "MySQL" },
    { icon: <SiPostgresql />, title: "PostgreSQL" },
    { icon: <FiType />, title: "TypeORM" },
    { icon: <TbBrandCSharp />, title: ".NET" },
    { icon: <DiMysql />, title: "MySql" },
    { icon: <SiMicrosoftsqlserver />, title: "SQL Server" },
  ];

  return (
    <>
      <h3 className="md:pl-56 text-xl text-bold pt-4 text-left">Backend</h3>
      <div className="flex flex-wrap justify-center max-w-3xl mx-auto">
        {backData.map((item, index) => (
          <CardSkills key={index} icon={item.icon} title={item.title} />
        ))}
      </div>
    </>
  );
};

export default BackSkill;
