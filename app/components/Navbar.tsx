import Drawer from "./Drawer";
import Image from "next/image";
import logo from "@/public/monstercat-logo.webp";
import NavIcons from "./NavIcons";
export default function Navbar() {
  return (
    <header className="  ">
      <div className=" ">
        <nav className=" flex flex-row justify-between items-center xl:items-start w-full fixed top-0 px-5 bg-[rgba(0,0,0,0.7)] xl:bg-[rgba(0,0,0,0)]">
          <Image
            src={logo}
            alt="monstercat logo"
            width={50}
            height={50}
            className=" object-contain"
          />
          <div className="hidden md:flex xl:hidden">
            <NavIcons />
          </div>
          <div className="">
            <Drawer />
            <div className="hidden xl:flex">
              <NavIcons />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
