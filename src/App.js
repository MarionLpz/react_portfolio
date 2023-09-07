import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
// import { Contact2 } from "./components/Contact2";
import { ContactUpdated } from "./components/ContactUpdated";
import { Footer } from "./components/Footer";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <ContactUpdated />
      <Footer />
    </div>
  );
}

export default App;
