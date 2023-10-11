import Switcher from "../switcher";
import Languages from "./Languages";

function Navbar() {
  return (
    <nav className="dark:bg-black bg-white p-4 flex items-center justify-between fixed top-0 right-0 w-[140px] rounded-bl-lg">
      <Switcher />
      <Languages />
    </nav>
  );
}

export default Navbar;
