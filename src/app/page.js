import Image from "next/image";
import { FaApple } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { PiShoppingBagOpenLight } from "react-icons/pi";
import Navbar from "./components/Navbar";
import Productheader from "./components/Productheadline";
import Productcolorselector from "./components/Productcolorselector";
import Buynowbtn from "./components/Buynowbtn";
import Arrownavigation from "./components/Arrownavigation";
import Exploreoptionswrapper from "./components/Exploreoptionswrapper";

export default function Home() {
  return (
    <body>
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
            <div className="focus-watch-image">
              <Image
                src="/navy.png"
                width={450}
                height={450}
                alt="Apple watch in navy color"
              />
            </div>
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
              <Exploreoptionswrapper />
            </div>
          </div>
        </section>
      </main>
    </body>
  );
}
