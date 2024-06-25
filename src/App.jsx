import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import MobileNav from "./components/MobileNav";
import ProjectsHome from "./components/ProjectsHome";
import AboutHome from "./components/AboutHome";
import ServiceHome from "./components/ServiceHome";

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <NavBar openMenu={openMenu} toggleMenu={toggleMenu} />
      <MobileNav openMenu={openMenu} toggleMenu={toggleMenu} />
      <Hero />
      <ProjectsHome />
      <AboutHome />
      <ServiceHome />
    </>
  );
}

export default App;
