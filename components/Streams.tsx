"use client";
import apple from "@/public/streamIcons/apple.svg";
import bandcamp from "@/public/streamIcons/bandcamp.svg";
import soundcloud from "@/public/streamIcons/soundcloud.svg";
import spotify from "@/public/streamIcons/spotify.svg";
import youtube from "@/public/streamIcons/youtube.svg";
import { ImageType } from "./NavIcons";
import Image from "next/image";
import { useRef, useState } from "react";

const streamIcons: ImageType[] = [
  { name: "apple", src: apple, alt: "stream icons of apple" },
  { name: "bandcamp", src: bandcamp, alt: "stream icons of bandcamp" },
  { name: "soundcloud", src: soundcloud, alt: "stream icons of soundcloud" },
  { name: "spotify", src: spotify, alt: "stream icons of spotify" },
  { name: "youtube", src: youtube, alt: "stream icons of youtube" },
];
export default function Streams() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <section className="lg:ml-12  ">
      <h2 className="font-semibold text-[2.5rem] my-10 text-white leading-[35px] uppercase">
        Stream it your way
      </h2>
      <ul className="inline-flex items-center gap-x-4 border-[1px] broder-white border-solid px-3">
        {streamIcons.map((images, index) => (
          <li key={index} className="">
            <a className="flex gap-x-3">
              <Image src={images.src} alt={images.alt} width={24} height={24} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
