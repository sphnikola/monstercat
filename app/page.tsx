import Image from "next/image";
import Navbar from "./components/Navbar";
import albumCover from "../public/album cover.webp";
import Streams from "./components/Streams";
import TrackList from "./components/TrackList";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="sectionBg"></div>
      <div className="">
        <Navbar />
      </div>

      <div className=" absolute top-20 left-0 right-0  px-2 max-w-[500px]  mx-auto lg:max-w-[712px] xl:max-w-6xl xl:min-w-[1080px]">
        <div className="grid justify-center  relative   xl:grid-cols-2   xl:items-end  xl:justify-items-start mb-20 ">
          <div className="grid gap-y-5 lg:gap-y-0  ">
            <Image
              src={albumCover}
              alt="cover image for album"
              className="xl:max-w-[400px] xl:ml-12 "
            />
            <div className=" lg:transform lg:-rotate-90 lg:absolute  lg:-left-[95px] xl:-left-[10] lg:top-[459px] xl:top-[263px]   font-normal italic mb-5 lg:mb-0 lg:text-[18px  text-base">
              <span className=" text-[rgb(80,165,132)] italic font-semibold ] ">
                Instinct
              </span>{" "}
              — Released May 22, 2020{" "}
            </div>
          </div>

          <div className="space-y-10  mt-5 xl:mt-0 text-white ">
            <div className="space-y-3">
              <h3 className="uppercase text-[32px] font-semibold tracking-[3.2px] leading-[32px]">
                level days
              </h3>
              <h4 className="uppercase text-[28px] leading-[28px] font-semibold ">
                Conro
              </h4>
            </div>
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
        <TrackList />
        <Footer />
      </div>
    </>
  );
}
