import Header from "./components/layout/Header";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Header />
      <Home />
      <About />
      <Skills />

      <section id="project" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Projects
            </h2>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-black"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Contact
          </h2>
        </div>
      </section>

      <footer className="py-8 bg-gray-900 dark:bg-black text-center">
        <p className="text-gray-400">Footer</p>
      </footer>
    </div>
  );
}

export default App;
