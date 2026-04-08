"use client";
import Image from "next/image";
import { useState } from "react";
import { FaApple } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { PiShoppingBagOpenLight } from "react-icons/pi";
import Navbar from "./components/Navbar";
import Productheader from "./components/Productheadline";
import Buynowbtn from "./components/Buynowbtn";
import Arrownavigation from "./components/Arrownavigation";
import ThumbnailImages from "./components/ThumbnailImages";
import Dots from "./components/Dots";

export default function Home() {
  const [activeWatchImage, setActiveWatchImage] = useState("/navy.png");
  // activeImage er en variabel, setActiveImage er en funktion, der kan opdatere min state. /navy.png er default source.
  // useState returnere et array, kaldes en form for array destrukturering.
  return (
    <>
      <header>
        <div className="my-8 grid grid-cols-[1fr_auto_1fr] items-center">
          <div className="col-start-1">
            <FaApple size={50} className="cursor-pointer" />
          </div>
          <Navbar />
          <div className="col-start-4 flex gap-2">
            <IoIosSearch size={30} className="cursor-pointer" />
            <div className="h-[clamp(1.5rem, 1.2188rem + 1.125cqi, 2.0625rem)] float-left w-0 border-white outline"></div>
            <PiShoppingBagOpenLight size={30} className="cursor-pointer" />
          </div>
        </div>
      </header>
      <main>
        <section>
          <div className="grid auto-rows-auto grid-cols-[2fr_auto_auto] items-center gap-4 pbs-16">
            <div className="col-start-1">
              <Productheader />
            </div>
            <div className="col-start-2 place-self-center">
              <Image
                src={activeWatchImage}
                alt="Apple iWatch"
                width={450}
                height={450}
              />
            </div>
            <div className="my-1 grid auto-rows-auto gap-4">
              <Dots
                color="#58d7c4"
                relatedImage="/mint.png"
                activeWatchImage={activeWatchImage}
                setActiveWatchImage={setActiveWatchImage}
              />
              <Dots
                color="#404354"
                relatedImage="/navy.png"
                activeWatchImage={activeWatchImage}
                setActiveWatchImage={setActiveWatchImage}
              />
              <Dots
                color="#ddf3fd"
                relatedImage="/ocean.png"
                activeWatchImage={activeWatchImage}
                setActiveWatchImage={setActiveWatchImage}
              />
            </div>
          </div>

          <div>
            <Buynowbtn />
          </div>
        </section>
        <section>
          <div className="grid grid-cols-[1fr_1fr] grid-rows-3 items-center pbs-10">
            <div className="col-start-1 row-start-3">
              <Arrownavigation />
            </div>
            <div className="relative isolate col-start-2 grid grid-cols-3 items-center">
              <div className="absolute col-start-1 cursor-pointer pt-0 before:absolute before:inset-x-0 before:inset-y-18 before:z-[-1] before:h-20 before:max-h-full before:w-37.5 before:max-w-full before:rounded-xl before:bg-[#42445799] before:content-['']">
                <ThumbnailImages
                  setActiveWatchImage={setActiveWatchImage}
                  img={"/navy.png"}
                />
              </div>
              <div className="absolute col-start-2 cursor-pointer pt-0 before:absolute before:inset-x-0 before:inset-y-18 before:z-[-1] before:h-20 before:max-h-full before:w-37.5 before:max-w-full before:rounded-xl before:bg-[#69ddcc99] before:content-['']">
                <ThumbnailImages
                  setActiveWatchImage={setActiveWatchImage}
                  img={"/mint.png"}
                />
              </div>
              <div className="absolute col-start-3 cursor-pointer pt-0 before:absolute before:inset-x-0 before:inset-y-18 before:z-[-1] before:h-20 before:max-h-full before:w-37.5 before:max-w-full before:rounded-xl before:bg-[#ddf3fd99] before:content-['']">
                <ThumbnailImages
                  setActiveWatchImage={setActiveWatchImage}
                  img={"/ocean.png"}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
