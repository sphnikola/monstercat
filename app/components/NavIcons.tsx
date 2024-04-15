import x from "../../public/bxl-twitter.svg";
import twitch from "../../public/bxl-twitch.svg";
import fb from "../../public/bxl-facebook-circle.svg";
import ig from "../../public/bxl-instagram.svg";
import play from "../../public/bx-play-circle.svg";
import tiktok from "../../public/tiktok-logo-24.png";
import discord from "../../public/bxl-discord.svg";

import Image from "next/image";
interface Image {
  name: string;
  src: string;
  alt: string;
}

const images: Image[] = [
  { name: "x", src: x, alt: "navigation icons of twitter" },
  { name: "twitch", src: twitch, alt: "navigation icons of twitch" },
  {
    name: "fb",
    src: fb,
    alt: "navigation icons of facebook",
  },
  {
    name: "ig",
    src: ig,
    alt: "navigation icons of instagram",
  },
  {
    name: "play",
    src: play,
    alt: "navigation icons of play",
  },
  {
    name: "tiktok",
    src: tiktok,
    alt: "navigation icons of tiktok",
  },
  {
    name: "discord",
    src: discord,
    alt: "navigation icons of discord",
  },
];
export default function NavIcons() {
  return (
    <div className="xxl:mt-10">
      <ul className="flex flex-row  gap-x-3 xxl:flex-col xxl:gap-y-5">
        {images.map((img, index) => (
          <li key={index}>
            <Image src={img.src} alt={img.alt} width={24} height={24} />
          </li>
        ))}
      </ul>
    </div>
  );
}
// export default NavIcons;
