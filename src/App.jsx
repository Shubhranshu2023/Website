import Nav from "./Components/Nav/Nav";
import Header from "./Components/Header/Header";
import "./App.css";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EducationSlider from "./Components/AboutMe/EducationSlider";


function App() {
  return (
    <>
        <Nav />
      <main>
        <Header />
        <EducationSlider />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
