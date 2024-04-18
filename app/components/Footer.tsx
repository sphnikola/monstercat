import twitch from "@/public/navIcons/twitch.svg";
import fb from "@/public/navIcons/facebook.svg";
import ig from "@/public/navIcons/instagram.svg";
import play from "@/public/navIcons/circle-play-solid.svg";
import tiktok from "@/public/tiktok-logo-24.png";
import discord from "@/public/navIcons/discord.svg";
import x from "@/public/navIcons/x-twitter.svg";
import Image from "next/image";
import apple from "@/public/streamIcons/apple.svg";
import bandcamp from "@/public/streamIcons/bandcamp.svg";
import soundcloud from "@/public/streamIcons/soundcloud.svg";
import spotify from "@/public/streamIcons/spotify.svg";
import youtube from "@/public/streamIcons/youtube.svg";
import { ImageType } from "./NavIcons";

const footerIcons: ImageType[] = [
  { name: "apple", src: apple, alt: "stream icons of apple" },
  { name: "bandcamp", src: bandcamp, alt: "stream icons of bandcamp" },
  { name: "soundcloud", src: soundcloud, alt: "stream icons of soundcloud" },
  { name: "spotify", src: spotify, alt: "stream icons of spotify" },
  { name: "youtube", src: youtube, alt: "stream icons of youtube" },
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
export default function Footer() {
  return (
    <div>
      <hr className="" />
      <nav className="grid lg:grid-cols-3 mt-10">
        <ul className="uppercase text-white">
          <li>about monstercat</li>
          <li>contact us</li>
          <li>careers</li>
          <li>news</li>
          <li>press</li>
        </ul>
        <ul className="uppercase text-white">
          <li>terms of privacy</li>
          <li>privacy policy</li>
        </ul>

        <div className="my-10 lg:mt-0 space-y-4">
          <h3 className="uppercase">monstercat news</h3>
          <p className="text-[14px] font-medium leading-[24.5px] tracking-[1.4px]  lg:max-w-xs lg:pr-3 ">
            Don't miss a thing, stay up to date with the latest news from us
          </p>
          <input
            type="text"
            placeholder="Enter email"
            className="border-b-solid border-b-[1px] h-[40px] px-1 bg-transparent outline-none"
          />
        </div>
      </nav>
      <hr className="mb-10" />
      <div className="grid lg:grid-cols-2 lg:justify-center">
        <p>2011 - 2024 © Monstercat, All Rights Reserved</p>
        <ul className="inline-flex items-center gap-x-4 lg:ml-auto">
          {footerIcons.map((images, index) => (
            <li key={index} className="">
              <a className="flex gap-x-3">
                <Image
                  src={images.src}
                  alt={images.alt}
                  width={18}
                  height={18}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-center text-xs mt-5">
        We acknowledge with gratitude the traditional, ancestral and unceded
        land of the Coast Salish peoples, including the territories of the
        Sḵwx̱wú7mesh (Squamish), Stó:lō and Səl̓ílwətaʔ/Selilwitulh
        (Tsleil-Waututh) and xʷməθkʷəy̓əm (Musqueam) Nations, on which
        Monstercat's Vancouver HQ stands.
      </p>
      <p className="text-center text-xs mt-5">
        We acknowledge the unceded and ancestral territories of the
        Gabrielino/Tongva peoples on which our LA team live and work.
      </p>
    </div>
  );
}
