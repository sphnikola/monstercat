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

      <div className=" absolute top-20 left-0 right-0 w-full px-2">
        <div className="grid justify-center max-w-[500px] relative mx-auto lg:max-w-[712px]">
          <div className="grid lg:grid-cols-[auto,auto]">
            <Image src={albumCover} alt="cover image for album" className="" />
            <p className=" lg:transform lg:-rotate-90 lg:absolute  -left-20 bottom-[228px]">
              Instinct Released May 22, 2020{" "}
            </p>
          </div>
          {/* <span className="my-5 ">
          </span> */}
          <div className="space-y-4">
            <h3>level days</h3>
            <h4 className="">Conro</h4>
            <div className="space-x-1 ">
              <button className="bg-green-400 py-2  w-[183px]">
                Listen Now
              </button>
              <button className=" bg-transparent py-2 w-[131px] border-white border-solid border-[1px]">
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
