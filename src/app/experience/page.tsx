import CardExperience from "../../components/Experience/ItemExperiencie";
import data from "@/data/experience.json";
export default function Experience() {
  return (
    <div className="max-w-6xl mx-auto bg-white mt-10 rounded-lg shadow-2xl">
      <h1 className="text-center text-4xl pt-4">Experience</h1>
      <div className="p-6 pt-2 grid grid-cols-1 md:grid-cols-3 md:gap-4">
        {data.map((experience) => (
          <CardExperience key={experience.title} experience={experience} />
        ))}
      </div>
      <div className="seeAll text-center pb-5">
        <a
          href="https://www.linkedin.com/in/alanluna00/"
          target="_blank"
          rel="noopener noreferrer"
          className=" p-2 bg-gray-800 hover:bg-blue-900 rounded-md text-white text-center"
        >
          See all in{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="inline-block h-6 w-6 fill-current text-white"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
