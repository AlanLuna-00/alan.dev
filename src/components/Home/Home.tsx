import AbouteMe from "./AbouteMe/AboutMe";
import AboutText from "./AboutText/AboutText";
const Information = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto bg-white mt-10 rounded-lg shadow-2xl">
        <AbouteMe />
      </div>
      <div className="max-w-6xl mx-auto bg-white mt-10 rounded-lg shadow-2xl">
        <AboutText />
      </div>
    </>
  );
};

export default Information;
