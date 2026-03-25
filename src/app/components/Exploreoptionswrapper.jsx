import Image from "next/image";

const Exploreoptionswrapper = () => {
  return (
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
  );
};

export default Exploreoptionswrapper;
