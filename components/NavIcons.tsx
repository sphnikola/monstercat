import twitch from "@/public/navIcons/twitch.svg";
import fb from "@/public/navIcons/facebook.svg";
import ig from "@/public/navIcons/instagram.svg";
import play from "@/public/navIcons/circle-play-solid.svg";
import tiktok from "@/public/tiktok-logo-24.png";
import discord from "@/public/navIcons/discord.svg";
import x from "@/public/navIcons/x-twitter.svg";
import Image from "next/image";

export interface ImageType {
  name: string;
  src: string;
  alt: string;
}

const images: ImageType[] = [
  { name: "ig", src: ig, alt: "navigation icons of instagram" },
  { name: "tiktok", src: tiktok, alt: "navigation icons of tiktok" },
  {
    name: "x",
    src: x,
    alt: "navigation icons of x",
  },
  {
    name: "twitch",
    src: twitch,
    alt: "navigation icons of twitch",
  },
  {
    name: "facebook",
    src: fb,
    alt: "navigation icons of facebook",
  },
  {
    name: "discord",
    src: discord,
    alt: "navigation icons of discord",
  },
  {
    name: "play",
    src: play,
    alt: "navigation icons of play",
  },
];

export default function NavIcons() {
  return (
    <div className="xxl:mt-10">
      <ul className="flex flex-row  gap-x-5 xxl:flex-col xxl:gap-y-5">
        {images.map((img, index) => (
          <li key={index}>
            <Image src={img.src} alt={img.alt} width={24} height={24} />
          </li>
        ))}
      </ul>
    </div>
  );
}
