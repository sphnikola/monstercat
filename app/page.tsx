import Image from "next/image";
import Navbar from "./components/Navbar";
import albumCover from "../public/album cover.webp";
import Streams from "./components/Streams";

export default function Home() {
  return (
    <>
      <div className="sectionBg"></div>
      <div className="">
        <Navbar />
      </div>

      <div className=" absolute top-20 left-0 right-0  px-2 max-w-[500px]  mx-auto lg:max-w-[712px] xl:max-w-7xl">
        <div className="grid justify-center  relative   xl:grid-cols-2   xl:items-end xl:gap-x-6 xl:justify-items-start ">
          <div className="grid ">
            <Image
              src={albumCover}
              alt="cover image for album"
              className="xl:max-w-[400px] xl:ml-12 "
            />
            <p className=" lg:transform lg:-rotate-90 lg:absolute  lg:-left-20 lg:top-[465px] xl:top-[263px]">
              Instinct Released May 22, 2020{" "}
            </p>
          </div>
          {/* <span className="my-5 ">
          </span> */}
          <div className="space-y-4 ">
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

        <Streams />
      </div>
    </>
  );
}
