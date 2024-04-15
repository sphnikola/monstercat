import apple from "@/public/streamIcons/apple.svg";
import bandcamp from "@/public/streamIcons/bandcamp.svg";
import soundcloud from "@/public/streamIcons/soundcloud.svg";
import spotify from "@/public/streamIcons/spotify.svg";
import youtube from "@/public/streamIcons/youtube.svg";
import { ImageType } from "./NavIcons";
import Image from "next/image";

const streamIcons: ImageType[] = [
  { name: "apple", src: apple, alt: "stream icons of apple" },
  { name: "bandcamp", src: bandcamp, alt: "stream icons of bandcamp" },
  { name: "soundcloud", src: soundcloud, alt: "stream icons of soundcloud" },
  { name: "spotify", src: spotify, alt: "stream icons of spotify" },
  { name: "youtube", src: youtube, alt: "stream icons of youtube" },
];
export default function Streams() {
  return (
    <section className="lg:ml-12">
      <h2>Stream it your way</h2>
      <ul className="inline-flex items-center gap-x-4">
        {streamIcons.map((images, index) => (
          <li key={index}>
            <a className="flex gap-x-3">
              {images.name === "bandcamp" && <a>next</a>}
              <Image src={images.src} alt={images.alt} width={24} height={24} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
