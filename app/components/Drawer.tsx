import bars from "../../public/bars-solid.svg";
import Image from "next/image";
export default function Drawer() {
  type NavImage = {
    src: string;
    href: string;
    alt: string;
    width: number;
    height: number;
  };

  const navImages: NavImage[] = [
    {
      src: "/public/instagram-logo-24.png",
      href: "#",
      alt: "instagram icon",
      width: 24,
      height: 24,
    },
    {
      src: "/public/tiktok-logo-24.png",
      href: "#",
      alt: "tiktok icon",
      width: 24,
      height: 24,
    },
    {
      src: "/public/x-twitter.svg",
      href: "#",
      alt: "twitter icon",
      width: 24,
      height: 24,
    },
    {
      src: "/public/twitch.svg",
      href: "#",
      alt: "twitch icon",
      width: 24,
      height: 24,
    },
    {
      src: "/public/facebook.svg",
      href: "#",
      alt: "facebokk icon",
      width: 24,
      height: 24,
    },
    {
      src: "/public/discord-logo-24.png",
      href: "#",
      alt: "discord icon",
      width: 24,
      height: 24,
    },
    {
      src: "/public/play-circle-regular-24.png",
      href: "#",
      alt: "play icon",
      width: 24,
      height: 24,
    },
  ];

  return (
    <div className="flex flex-col gap-y-4">
      <div className="drawer drawer-end">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className=" ">
            <Image
              src={bars}
              alt="nav"
              width={30}
              height={20}
              className="hover:cursor-pointer drawer-button "
            />

            {/* Open drawer */}
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay "
          ></label>
          <ul className="menu p-4 w-[36rem] min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li className="flex flex-row justify-between">
              <h1>hello</h1>
              <label htmlFor="my-drawer" aria-label="close sidebar">
                x
              </label>
            </li>
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
