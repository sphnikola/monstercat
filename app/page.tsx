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
      <div className="flex flex-col items-center absolute top-20 w-full xl:items-start">
        <Image
          src={albumCover}
          alt="image of the album cover"
          width={400}
          height={400}
        />
      </div>
    </>
  );
}
