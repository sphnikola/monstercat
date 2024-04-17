import play from "@/public/navIcons/circle-play-solid.svg";
import share from "@/public/streamIcons/bx-share-alt.svg";
import Image from "next/image";

interface trackDetailsProps {
  key: number;
  title: string;
  length: string;
}
const trackDetails: trackDetailsProps[] = [
  {
    key: 1,
    title: "The Small Things",
    length: "3:35",
  },
  {
    key: 2,
    title: "Without Your Love",
    length: "3:09",
  },
  {
    key: 3,
    title: "Therapy",
    length: "3:06",
  },
  {
    key: 4,
    title: "Fighters",
    length: "3:46",
  },
  {
    key: 5,
    title: "Way Up",
    length: "3:32",
  },
  {
    key: 6,
    title: "Waiting",
    length: "3:07",
  },
  {
    key: 7,
    title: "Dreaming",
    length: "2:57",
  },
  {
    key: 8,
    title: "Tatoo",
    length: "3:29",
  },
  {
    key: 9,
    title: "Out for the night",
    length: "3:05",
  },
  {
    key: 10,
    title: "Overdue",
    length: "2:49",
  },
  {
    key: 11,
    title: "Say it",
    length: "3:04",
  },
  {
    key: 12,
    title: "Here to Stay",
    length: "2:44",
  },
];
export default function TrackList() {
  return (
    <section className="lg:ml-12">
      <h2 className="font-semibold text-[2.5rem] my-10 text-white leading-[35px]">
        Track Lists
      </h2>
      <ol>
        {trackDetails.map((details, index) => (
          <li
            key={index}
            className="flex flex-row items-start justify-between text-white mb-4"
          >
            <span className="flex items-center gap-x-5">
              <p className="w-[20px]">{details.key}</p>
              <div className="flex gap-x-5 ">
                <Image src={play} alt="play button" width={20} height={20} />
                <div className="flex flex-col ">
                  <h3 className=" font-semibold text-[18px] - -mb-2">
                    {details.title}
                  </h3>
                  <p className="text-[14px] font-medium">Conro</p>
                </div>
              </div>
            </span>
            <div className="flex flex-row gap-x-5">
              <p>{details.length}</p>
              <Image src={share} alt="share button" />
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
