import Drawer from "./Drawer";
import Image from "next/image";
import logo from "@/public/monstercat-logo.webp";
import NavIcons from "./NavIcons";
export default function Navbar() {
  return (
    <header className="  ">
      <div className=" ">
        <nav className=" flex flex-row justify-between items-center xxl:items-start w-full fixed top-0 px-5 bg-[rgba(0,0,0,0.7)] xxl:bg-[rgba(0,0,0,0)] z-10 ">
          <Image
            src={logo}
            alt="monstercat logo"
            width={50}
            height={50}
            className=" object-contain"
          />
          <div className="hidden md:flex xxl:hidden">
            <NavIcons />
          </div>
          <div className="">
            <Drawer />
            <div className="hidden xxl:flex">
              <NavIcons />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
