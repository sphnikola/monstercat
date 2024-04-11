import Image from "next/image";
import Navbar from "./components/Navbar";
import albumCover from "../public/album cover.webp";

export default function Home() {
  return (
    <>
      <div className="sectionBg"></div>
      <div className="">
        <Navbar />
      </div>
      <div className="flex flex-col items-center absolute top-20 w-full px-7 xl:items-start ">
        <div className="flex flex-col gap-y-16">
          <Image
            src={albumCover}
            alt="image of the album cover"
            className="max-w-[500px] lg:max-w-[712px] xl:max-w-[408px]"
          />
          <span>text here</span>
        </div>

        <div className="  self-start">
          <h3>Levels days</h3>
          <h4>Conra</h4>
          <div className="flex flex-row">
            <button>first button</button>
            <button>second button</button>
          </div>
        </div>
      </div>
    </>
  );
}
