import BackSkill from "@/components/Skills/Back";
import FrontSkill from "@/components/Skills/Front";
export default function SkillPage() {
  return (
    <div className="max-w-6xl mx-auto bg-white mt-10 rounded-lg shadow-2xl container">
      <h1 className="text-center text-4xl pt-4">My Skills</h1>
      <FrontSkill />
      <BackSkill />
    </div>
  );
}
