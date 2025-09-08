import Header from "./components/layout/Header";

function App() {
  return (
    <div className="dark:bg-black">
      <Header />
      <div
        id="home"
        className=" flex dark:text-white h-screen justify-center items-center"
      >
        Home
      </div>
      <div
        id="about"
        className=" flex dark:text-white h-screen justify-center items-center"
      >
        About
      </div>
      <div
        id="skills"
        className=" flex dark:text-white h-screen justify-center items-center"
      >
        Skills
      </div>
      <div
        id="project"
        className=" flex dark:text-white h-screen justify-center items-center"
      >
        Project
      </div>
      <div
        id="contact"
        className=" flex dark:text-white h-screen justify-center items-center"
      >
        Contact
      </div>
    </div>
  );
}

export default App;
