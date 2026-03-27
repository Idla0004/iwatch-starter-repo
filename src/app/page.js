"use client";
import Image from "next/image";
import { useState } from "react";
import { FaApple } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { PiShoppingBagOpenLight } from "react-icons/pi";
import Navbar from "./components/Navbar";
import Productheader from "./components/Productheadline";
import Productcolorselector from "./components/Productcolorselector";
import Buynowbtn from "./components/Buynowbtn";
import Arrownavigation from "./components/Arrownavigation";
import ThumbnailImages from "./components/ThumbnailImages";

export default function Home() {
  const [activeWatchImage, setActiveWatchImage] =
    useState("/navy.png");
  // activeImage er en variabel, setActiveImage er en funktion, der kan opdatere min state.
  return (
    <>
      <header>
        <div className="header-bar">
          <div className="navbar-logo">
            <FaApple
              size={50}
              className="applelogoicon"
            />
          </div>
          <Navbar />
          <div className="navbar-search-checkout">
            <IoIosSearch
              size={30}
              className="searchicon"
            />
            <div className="vertical-line"></div>
            <PiShoppingBagOpenLight
              size={30}
              className="shoppingbagicon"
            />
          </div>
        </div>
      </header>
      <main>
        <section>
          <div className="product-wrapper">
            <div className="headline">
              <Productheader />
            </div>
            <Image
              src={activeWatchImage}
              alt="Apple iWatch"
              width={450}
              height={450}
            />
            <Productcolorselector />
          </div>
          <div>
            <Buynowbtn />
          </div>
        </section>
        <section>
          <div className="explore-section">
            <Arrownavigation />
            <div>
              <div className="explore-watch-images">
                <div className="navy-background">
                  <ThumbnailImages
                    setActiveWatchImage={
                      setActiveWatchImage
                    }
                    img={"/navy.png"}
                  />
                </div>
                <div className="mint-background">
                  <ThumbnailImages
                    setActiveWatchImage={
                      setActiveWatchImage
                    }
                    img={"/mint.png"}
                  />
                </div>
                <div className="ocean-background">
                  <ThumbnailImages
                    setActiveWatchImage={
                      setActiveWatchImage
                    }
                    img={"/ocean.png"}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
