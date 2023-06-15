import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="">
     <NavBar />
     <Home />
     <About />
     <Portfolio />
     <Experience />
     <Contact />
     <SocialLinks />
    </div>
  );
}

export default App;
