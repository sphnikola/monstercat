import bars from "@/public/bars-solid.svg";
import white_logo from "@/public/monstercat-logo-white.svg";
import Image from "next/image";
export default function Drawer() {
  return (
    <div>
      <div className="drawer drawer-end ">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className=" ">
            <Image
              src={bars}
              alt="nav"
              width={30}
              height={20}
              className="hover:cursor-pointer drawer-button "
            />

            {/* Open drawer */}
          </label>
        </div>
        <div className="drawer-side ">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay "
          ></label>
          <ul className="menu p-4 w-80 min-h-full  bg-black text-3xl text-white font-bold">
            {/* Sidebar content here */}
            <li className="flex flex-row justify-between items-center">
              <Image src={white_logo} alt="logo inside drawer" width={200} />
              <label htmlFor="my-drawer" aria-label="close sidebar">
                x
              </label>
            </li>
            <li className="text-lg mt-5">
              <a>Music</a>
            </li>

            <li className="text-lg">
              <a>Artists</a>
            </li>
            <li className="text-lg">
              <a>About</a>
            </li>
            <li className="text-lg">
              <a>News</a>
            </li>
            <li className="text-lg">
              <a>Events</a>
            </li>
            <li className="text-lg">
              <a>Programming</a>
            </li>
            <li className="text-lg">
              <a>Gold</a>
            </li>
            <li className="text-lg">
              <a>Partners</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
