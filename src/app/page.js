"use client";
import { useState } from "react";
import { FaApple } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { PiShoppingBagOpenLight } from "react-icons/pi";
import Navbar from "./components/Navbar";
import Productheader from "./components/Productheadline";
import Productcolorselector from "./components/Productcolorselector";
import Buynowbtn from "./components/Buynowbtn";
import Arrownavigation from "./components/Arrownavigation";
import Exploreoptionswrapper from "./components/Exploreoptionswrapper";
import Focuswatchimage from "./components/Focuswatchimage";

export default function Home() {
  const [chosenColor, setChosenColor] =
    useState("navy");

  const handleColorChange = (color) => {
    setChosenColor(color);
  };

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
            <Focuswatchimage
              chosenColor={chosenColor}
            />
            <Productcolorselector
              colorChangeClick={handleColorChange}
            />
          </div>
          <div>
            <Buynowbtn />
          </div>
        </section>
        <section>
          <div className="explore-section">
            <Arrownavigation
              colorChangeClick={handleColorChange}
            />
            <div>
              <Exploreoptionswrapper
                colorChangeClick={
                  handleColorChange
                }
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
