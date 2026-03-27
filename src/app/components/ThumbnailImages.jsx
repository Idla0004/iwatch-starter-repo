"use client";
import Image from "next/image";

const ThumbnailImages = ({
  img,
  setActiveWatchImage,
}) => {
  return (
    <Image
      onClick={() => setActiveWatchImage(img)}
      // () => skal være der for at være et callback, der definere hvad vi skal gøre. lidt ligesom forEach. En funktion, der ikke har noget navn.
      // setActiveWatchImage(img) - opdateret statet på img med setActiveImage
      src={img}
      width={150}
      height={150}
      alt="Apple watch"
    />
  );
};

export default ThumbnailImages;
