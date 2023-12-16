import CardSkills from "./Card/CardSkills";
import { FaUserTie } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa";
import { FaUserClock } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { FaUserNinja } from "react-icons/fa";
import { FaUserSecret } from "react-icons/fa";

const SoftSkill = () => {
  const softData = [
    { icon: <FaUserTie />, title: "Leadership" },
    { icon: <FaUserFriends />, title: "Teamwork" },
    { icon: <FaUserCog />, title: "Problem Solving" },
    { icon: <FaUserShield />, title: "Critical Thinking" },
    { icon: <FaUserClock />, title: "Time Management" },
    { icon: <FaUserEdit />, title: "Adaptability" },
    { icon: <FaUserPlus />, title: "Creativity" },
    { icon: <FaUserGraduate />, title: "Communication" },
    { icon: <FaUserNinja />, title: "Flexibility" },
    { icon: <FaUserSecret />, title: "Integrity" },
  ];

  return (
    <>
      <h3 className="text-left md:pl-56 text-xl text-bold pt-4">Soft Skills</h3>
      <div className="flex flex-wrap justify-center max-w-3xl mx-auto">
        {softData.map((item, index) => (
          <CardSkills key={index} icon={item.icon} title={item.title} />
        ))}
      </div>
    </>
  );
};

export default SoftSkill;
