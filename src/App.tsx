import { useEffect } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import TechnologiesSlider from "./components/TechnologiesSlider";

function App() {
  useEffect(() => {
    document.title = "Greetings!";
  }, []);

  return (
    <div
      className="dark:bg-gradient-to-b dark:from-secondaryDark dark:to-black 
    bg-gradient-to-b from-secondaryLight to-white"
    >
      <Navbar />
      <AboutMe />
      <div className="text-5xl container">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        omnis modi asperiores? Laboriosam in minima minus ullam exercitationem
        debitis. Amet natus recusandae quam, rem veritatis mollitia perferendis
        facere. Neque, alias. Pariatur iusto porro dolorem doloremque mollitia?
        Expedita ratione quibusdam fuga? Ipsum explicabo nihil porro maxime
        blanditiis delectus temporibus, quisquam natus itaque velit, harum esse
        aut at quaerat. Doloribus, nesciunt non? Est dolorem tenetur debitis,
        culpa velit voluptates eligendi repudiandae, sunt possimus eius
        praesentium. Velit, cum delectus? Fugit labore esse placeat soluta
        suscipit itaque consequuntur? Quod, qui? Impedit temporibus esse earum.
        Ipsum iste ratione, laborum nostrum vitae ut sequi expedita hic
        architecto quo voluptas quasi, nulla autem at in et blanditiis! Officia
        consequatur dolore adipisci non praesentium dolor, quidem hic nulla!
        Dolor magni libero maiores impedit distinctio totam tenetur repudiandae
        animi labore aspernatur non esse quasi dicta harum id aliquam fugit, ea
        vitae magnam neque sed accusantium delectus? Repellat, animi labore?
        Libero repellat sapiente reiciendis alias impedit obcaecati facilis modi
        aliquid assumenda neque vero, corporis omnis officiis ratione sit at
        vitae quasi est. Soluta nam optio minima recusandae, quam sint corporis?
        Nesciunt facilis repudiandae, corporis accusamus aut perspiciatis velit
        magni asperiores eaque aperiam maiores rerum odio dolorum laboriosam
        magnam error itaque ex consequatur pariatur consectetur doloremque?
        Officiis ipsam minima excepturi nesciunt? Earum, hic incidunt, ullam ab
        praesentium mollitia id quia porro officia error debitis? Quidem
        adipisci ullam dolorum, praesentium labore qui debitis aspernatur earum
        deserunt reiciendis eius, itaque quos expedita dolorem. Sint ut animi
        iure quo, incidunt quam ipsa minus repellendus dolore saepe magni esse
        quia nobis sequi reprehenderit non. Saepe obcaecati, totam impedit non
        natus delectus vero est dicta magni! Atque maiores maxime eum magni
        magnam, nemo nulla laborum neque esse inventore provident sunt aperiam
        unde molestias voluptas. Fugiat atque nisi non voluptas quam praesentium
        eos necessitatibus libero quis at!
      </div>
    </div>
  );
}

export default App;
