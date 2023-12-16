import CardSkills from "./Card/CardSkills";
import { RiEnglishInput } from "react-icons/ri";
import { SiMacos } from "react-icons/si";
import { SiWindows } from "react-icons/si";
import { DiScrum } from "react-icons/di";
import { FaJira } from "react-icons/fa";
import { FaTrello } from "react-icons/fa";
import { FaSlack } from "react-icons/fa";

const OthersSkill = () => {
  const othersData = [
    { icon: <RiEnglishInput />, title: "English" },
    { icon: <SiMacos />, title: "MacOS" },
    { icon: <SiWindows />, title: "Windows" },
    { icon: <DiScrum />, title: "Scrum" },
    { icon: <FaJira />, title: "Jira" },
    { icon: <FaTrello />, title: "Trello" },
    { icon: <FaSlack />, title: "Slack" },
  ];

  return (
    <>
      <h3 className="text-left md:pl-56 text-xl text-bold pt-4">Others</h3>
      <div className="flex flex-wrap justify-center max-w-3xl mx-auto pb-3">
        {othersData.map((item, index) => (
          <CardSkills key={index} icon={item.icon} title={item.title} />
        ))}
      </div>
    </>
  );
};

export default OthersSkill;
