/* Dynamisk/Interaktivt*/
// Kode forklaret til mig selv //
// colors-array: En liste med de farver, man kan skifte imellem
// Bruger if/else til at vælge den rigtige billedsti ud fra const colorchangeclick og de definerede farver i const.
// Venstre pil (←) kalder på handleClick("previous").
// Midterste knap kalder på handleClick("number").
// Højre pil (→) kalder på handleClick("next").
// currentIndexChoice: Et tal, der fortæller, hvilket billede der er valgt. Hvis currentIndexChoice er 0, er det aktuelle billede "navy".
// Hvis currentIndexChoice er 1, er det aktuelle billede "mint".
// Hvis currentIndexChoice er 2, er det aktuelle billede "ocean".
// newIndexChoice: Et tal, der fortæller, hvilket billede der skal vises som det næste ved klik.

/* Dynamisk 1 */
// "use client";
// import { useState } from "react";

// const Arrownavigation = ({
//   colorChangeClick,
// }) => {
//   const [currentIndexChoice, setCurrentIndex] =
//     useState(0);
//   const colors = ["navy", "mint", "ocean"];

//   const handleClick = (direction) => {
//     let newIndexChoice;

//     if (direction === "previous") {
//       if (currentIndexChoice === 0) {
//         newIndexChoice = colors.length - 1;
//       }
//       //Hvis man er ved det første billede, så gå til det sidste billede.
//       else {
//         newIndexChoice = currentIndexChoice - 1;
//       }
//       // Hvis det nuværende billede ikke er det første billede så skift til det forrige billede.
//     } else if (direction === "next") {
//       if (
//         currentIndexChoice ===
//         colors.length - 1
//       ) // Hvis du er ved det sidste billede, så gå til det første billede.
//       {
//         newIndexChoice = 0;
//       } else {
//         newIndexChoice = currentIndexChoice + 1;
//       }
//       // Ellers gå til det næste billede.
//     } else if (direction === "number") {
//       if (
//         currentIndexChoice ===
//         colors.length - 1
//       ) {
//         newIndexChoice = 0;
//       } else {
//         newIndexChoice = currentIndexChoice + 1;
//       } // Tryk på tal gør det samme som højre pil.
//     }

//     setCurrentIndex(newIndexChoice);
//     colorChangeClick(colors[newIndexChoice]);
//   };

//   return (
//     <div className="choice-navigation">
//       <button
//         onClick={() => handleClick("previous")}
//       >
//         ←
//       </button>
//       <button
//         onClick={() => handleClick("number")}
//       >
//         {currentIndexChoice + 1}
//       </button>
//       <button onClick={() => handleClick("next")}>
//         →
//       </button>
//     </div>
//   );
// };

// export default Arrownavigation;

/* Statisk */
const Arrownavigation = () => {
  return (
    <div className="choice-navigation">
      <button>←</button>
      <button>1</button>
      <button>→</button>
    </div>
  );
};

export default Arrownavigation;
