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
      onClick={() =>
        setActiveWatchImage(relatedImage)
      }
      style={{ backgroundColor: color }}
      className={`dot-selected ${relatedImage == activeWatchImage && "myborder"}`}
    ></div>
  );
};

// border bliver sat på dots'ne, selv når man klikker på thumbnailbillede, fordi de begge lytter efter activeWatchImage statet. De læser begge fra det samme state.
// når statet opdateres, så trigger det en re-render og betingelsen siger "enten det eller enten dét"
export default Dots;
