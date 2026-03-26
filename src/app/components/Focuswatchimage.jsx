// Kode forklaret til mig selv //
// Bruger if/else til at vælge den rigtige billedsti
// imageSrc bruges til at hente og vise det rigtige billede ud fra chosenColor og string literal til fx Navy.
// Er chosenColor navy? Så vis navy.png ^
// Mit default billede på siden er det navy farvede ur
// Return bruges til at sørge for at "returne" Image-komponenten med den valgte billedsti
// I alt bruger jeg ${} for at vise den rigtige farve i billede beskrivelsen ud fra chosenColor.

/* dynamisk/interaktiv*/
"use client";
import Image from "next/image";

const Focuswatchimage = ({ chosenColor }) => {
  let imageSrc;

  if (chosenColor === "navy") {
    imageSrc = "/navy.png";
  } else if (chosenColor === "mint") {
    imageSrc = "/mint.png";
  } else if (chosenColor === "ocean") {
    imageSrc = "/ocean.png";
  } else {
    // Default billede er navy
    imageSrc = "/navy.png";
  }

  return (
    <div className="focus-watch-image">
      <Image
        src={imageSrc}
        width={450}
        height={450}
        alt={`Apple watch in ${chosenColor} color`}
      />
    </div>
  );
};

export default Focuswatchimage;

/* statisk */
// import Image from "next/image";

// const Focuswatchimage = () => {
//   return (
//     <div className="focus-watch-image">
//       <Image
//         src="/navy.png"
//         width={450}
//         height={450}
//         alt="Apple watch in navy color"
//       />
//     </div>
//   );
// };

// export default Focuswatchimage;

/* dynamisk med kode fra nettet, har ikke større forståelse for switch og case endnu, så bruger if/else i stedet*/
// "use client";
// import Image from "next/image";

// const Focuswatchimage = ({ chosenColor }) => {
//   const getColorChoice = () => {
//     switch (chosenColor) {
//       case "navy":
//         return "/navy.png";
//       case "mint":
//         return "/mint.png";
//       case "ocean":
//         return "/ocean.png";
//     }
//   };
//   return (
//     <div className="focus-watch-image">
//       <Image
//         src={getColorChoice()}
//         width={450}
//         height={450}
//         alt="Apple watch in navy color"
//       />
//     </div>
//   );
// };

// export default Focuswatchimage;
