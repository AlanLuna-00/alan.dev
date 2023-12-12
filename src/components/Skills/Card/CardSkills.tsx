const CardSkills = ({ icon, title }: { icon: any; title: string }) => {
  return (
    <div className="card-skills bg-gray-200 m-1 p-1 rounded-lg flex items-center">
      <div className="mr-2 ml-1">{icon}</div>
      <span className="text-sm">{title}</span>
    </div>
  );
};

export default CardSkills;
