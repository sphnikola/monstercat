import x from "../../public/bxl-twitter.svg";
import twitch from "../../public/bxl-twitch.svg";
import fb from "../../public/bxl-facebook-circle.svg";
import ig from "../../public/bxl-instagram.svg";
import play from "../../public/bx-play-circle.svg";
import tiktok from "../../public/tiktok-logo-24.png";
import discord from "../../public/bxl-discord.svg";

import Image from "next/image";

export default function NavIcons() {
  return (
    <div className="xl:mt-10">
      <ul className="flex flex-row  gap-x-3 xl:flex-col xl:gap-x-5">
        <li>
          <Image
            src={ig}
            alt="instagram logo"
            // width={24}
            // height={24}
            className=" text-white"
          />
        </li>
        <li>
          <Image src={twitch} alt="twitch logo" width={24} height={24} />
        </li>
        <li>
          <Image src={x} alt="twitter logo" width={24} height={24} />
        </li>
        <li>
          <Image src={discord} alt="discord logo" width={24} height={24} />
        </li>
        <li>
          <Image
            src={fb}
            alt="facebook logo"
            width={24}
            height={24}
            className=""
          />
        </li>
        <li>
          <Image src={tiktok} alt="instagram logo" width={24} height={24} />
        </li>
        <li>
          <Image src={play} alt="instagram logo" width={24} height={24} />
        </li>
      </ul>
    </div>
  );
}
