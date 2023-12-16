import CardSkills from "./Card/CardSkills";
import { SiAmazonaws } from "react-icons/si";
import { SiGooglecloud } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { SiKubernetes } from "react-icons/si";
import { SiAzuredevops } from "react-icons/si";
import { SiMicrosoftazure } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiGithubactions } from "react-icons/si";
import { SiBitbucket } from "react-icons/si";
import { SiGitlab } from "react-icons/si";
import { SiAmazonec2 } from "react-icons/si";
import { SiAmazons3 } from "react-icons/si";

const CloudSkill = () => {
  const cloudData = [
    { icon: <SiAmazonaws />, title: "AWS" },
    { icon: <SiGooglecloud />, title: "Google Cloud" },
    { icon: <SiDocker />, title: "Docker" },
    { icon: <SiKubernetes />, title: "Kubernetes" },
    { icon: <SiAzuredevops />, title: "Azure DevOps" },
    { icon: <SiMicrosoftazure />, title: "Azure" },
    { icon: <SiGit />, title: "Git" },
    { icon: <SiGithub />, title: "GitHub" },
    { icon: <SiGithubactions />, title: "GitHub Actions" },
    { icon: <SiBitbucket />, title: "Bitbucket" },
    { icon: <SiGitlab />, title: "GitLab" },
    { icon: <SiAmazonec2 />, title: "EC2" },
    { icon: <SiAmazons3 />, title: "S3" },
  ];

  return (
    <>
      <h3 className="text-left md:pl-56 text-xl text-bold pt-4">Cloud</h3>
      <div className="flex flex-wrap justify-center max-w-3xl mx-auto">
        {cloudData.map((item, index) => (
          <CardSkills key={index} icon={item.icon} title={item.title} />
        ))}
      </div>
    </>
  );
};

export default CloudSkill;
