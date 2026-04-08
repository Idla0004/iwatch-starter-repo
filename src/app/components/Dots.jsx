"use client";
import "../globals.css";

const Dots = ({
  color,
  relatedImage,
  activeWatchImage,
  setActiveWatchImage,
}) => {
  return (
    <div
      onClick={() => setActiveWatchImage(relatedImage)}
      style={{ backgroundColor: color }}
      className={`h-[clamp(24px,19.5px+1.125cqi,33px)] w-[clamp(24px,19.5px+1.125cqi,33px)] rounded-full hover:cursor-pointer hover:shadow-[0_2px_5px_#17171748] ${relatedImage == activeWatchImage ? "border-2 border-solid border-white" : ""} `}
    ></div>
  );
};

// border bliver sat på dots'ne, selv når man klikker på thumbnailbillede, fordi de begge lytter efter activeWatchImage statet. De læser begge fra det samme state.
// når statet opdateres, så trigger det en re-render og betingelsen siger "enten det eller enten dét"
export default Dots;
