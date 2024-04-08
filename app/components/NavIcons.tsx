import x from "../../public/x-twitter.svg";
import twitch from "../../public/twitch.svg";
import fb from "../../public/facebook.svg";
import ig from "../../public/instagram-logo-24.png";
import play from "../../public/play-circle-regular-24.png";
import tiktok from "../../public/tiktok-logo-24.png";
import discord from "../../public/discord-logo-24.png";

import Image from "next/image";

export default function NavIcons() {
  return (
    <div className="mt-6">
      <ul className="inline-flex  md:flex-col md:gap-y-3">
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
