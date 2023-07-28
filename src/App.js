import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact2 } from "./components/Contact2";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact2 />
      <Footer />
    </div>
  );
}

export default App;
