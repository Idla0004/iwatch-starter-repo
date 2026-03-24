import Image from "next/image";
import { FaApple } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";

export default function Home() {
  return (
    <body>
      <header>
        <div className="header-bar">
          <div className="navbar-logo">
            <FaApple size={50} />
          </div>
          <nav></nav>
          <div className="navbar-search-checkout">
            <FaSearch size={50} />
            <FiShoppingBag size={50} />
          </div>
        </div>
      </header>
      <main>
        <section>
          <div></div>
          <div></div>
          <div></div>
        </section>
        <section>
          <div>
            <div></div>
            <div>
              <Image
                src="/navy.png"
                width={500}
                height={500}
                alt="Apple watch in navy color"
              />
              <Image
                src="/mint.png"
                width={500}
                height={500}
                alt="Apple watch in mint color"
              />
              <Image
                src="/ocean.png"
                width={500}
                height={500}
                alt="Apple watch in ocean pink color"
              />
            </div>
          </div>
        </section>
      </main>
    </body>
  );
}
