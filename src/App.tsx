import { useEffect } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";

function App() {
  useEffect(() => {
    document.title = "Greetings!";
  }, []);

  return (
    <div
      className="h-screen dark:bg-gradient-to-b dark:from-secondaryDark dark:to-black 
    bg-gradient-to-b from-secondaryLight to-white"
    >
      <Navbar />
      <AboutMe />
    </div>
  );
}

export default App;
