import Image from "next/image";
import { FaApple } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { PiShoppingBagOpenLight } from "react-icons/pi";
import Navbar from "./components/Navbar";
import Productheader from "./components/Productheadline";
import Productcolorselector from "./components/Productcolorselector";
import Buynowbtn from "./components/Buynowbtn";

export default function Home() {
  return (
    <body>
      <header>
        <div className="header-bar">
          <div className="navbar-logo">
            <FaApple size={50} />
          </div>
          <Navbar />
          <div className="navbar-search-checkout">
            <IoIosSearch size={30} />
            <div class="vertical-line"></div>
            <PiShoppingBagOpenLight size={30} />
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
            <div className="choice-navigation">
              <a href="/">←</a>
              <a href="/">1</a>
              <a href="/">→</a>
            </div>
            <div>
              <div className="explore-watch-images">
                <div className="navy-background">
                  <Image
                    src="/navy.png"
                    width={150}
                    height={150}
                    alt="Apple watch in navy color"
                  />
                </div>
                <div className="mint-background">
                  <Image
                    src="/mint.png"
                    width={150}
                    height={150}
                    alt="Apple watch in mint color"
                  />
                </div>
                <div className="ocean-background">
                  <Image
                    src="/ocean.png"
                    width={150}
                    height={150}
                    alt="Apple watch in ocean pink color"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </body>
  );
}
