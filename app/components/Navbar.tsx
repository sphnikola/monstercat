import Drawer from "./Drawer";
import Image from "next/image";
import logo from "@/public/monstercat-logo.webp";
import NavIcons from "./NavIcons";
export default function Navbar() {
  return (
    <header className="mt-5 sticky">
      {/* flex justify-between items-start */}
      <nav className="grid grid-cols-3 items-center">
        {/* <h2>Hello Friend!</h2> */}
        {/* <h3>mine</h3> */}
        <Image
          src={logo}
          alt="monstercat logo"
          width={50}
          height={50}
          className=" object-contain"
        />
        {/* className="flex flex-row-reverse md:flex-col md:gap-y-6" */}
        <div className=" md:row-start-2 md:col-start-3 md:ml-auto mb-[1rem] md:mb-0">
          <NavIcons />
        </div>
        <div className="ml-auto md:col-start-3">
          <Drawer />
        </div>
      </nav>
    </header>
  );
}
