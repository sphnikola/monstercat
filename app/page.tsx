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

      <div className="flex flex-col items-center absolute top-20 w-full xl:items-start ">
        {/* <div className="flex flex-col gap-y-16">
        </div> */}
        <div className=" self-start px-5 md:self-center xl:self-start">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <Image
                src={albumCover}
                alt="image of the album cover"
                className="max-w-[500px] lg:max-w-[712px] xl:max-w-[408px]"
              />
              <span>text here</span>
            </div>

            <div className="  ">
              <h3>Levels days</h3>
              <h4>Conra</h4>
              <div className="flex flex-row">
                <button>first button</button>
                <button>second button</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
