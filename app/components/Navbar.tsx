import Drawer from "./Drawer";
import Image from "next/image";
import logo from "@/public/monstercat-logo.webp";
import NavIcons from "./NavIcons";
export default function Navbar() {
  return (
    <header className="bg-[rgba(0,0,0,0.7)] xl:bg-[rgba(0,0,0,0)] relative -top-[1080px] ">
      <div className="px-3 ">
        <nav className=" flex flex-row justify-between items-center xl:items-start ">
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
