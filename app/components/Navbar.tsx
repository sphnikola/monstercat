import Drawer from "./Drawer";
import Image from "next/image";
import logo from "@/public/monstercat-logo.webp";
export default function Navbar() {
  return (
    <header className="mt-5 ">
      <nav className="flex justify-between items-center">
        {/* <h2>Hello Friend!</h2> */}
        {/* <h3>mine</h3> */}
        <Image
          src={logo}
          alt="monstercat logo"
          width={50}
          height={50}
          className=" object-contain"
        />
        <Drawer />
      </nav>
    </header>
  );
}
