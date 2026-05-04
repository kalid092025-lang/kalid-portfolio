import Hero from "./components/Hero";
import About from "./components/About";
import Build from "./components/Build";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
import BackgroundParticles from "./components/BackgroundParticles";

import Stack from "./components/Stack";
import "./styles.css";

export default function App() {
  return (
    <>
      <Cursor />
      <BackgroundParticles />
     
      <main className="site-shell">
        <Hero />
        <About />
        <Build />
        <Stack />
        <Contact />
      </main>
    </>
  );
}
