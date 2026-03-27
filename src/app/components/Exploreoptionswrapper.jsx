// "use client";
// import Image from "next/image";

// /* Kode forklaret til mig selv */
// /* colorChangeClick er fra Productcolorselector komponent og vælger mellem produkterne ud fra farve
// onClick=>{()=> colorChangeClick("enellerandenfarve")} div med billede lytter efter klik
// på billedet, for at den viser det rigtige billede valgt */

// const Exploreoptionswrapper = ({
//   colorChangeClick,
// }) => {
//   return (
//     <div className="explore-watch-images">
//       <div
//         className="navy-background"
//         onClick={() => colorChangeClick("navy")}
//       >
//         <Image
//           src="/navy.png"
//           width={150}
//           height={150}
//           alt="Apple watch in navy color"
//           className="navy"
//         />
//       </div>
//       <div
//         className="mint-background"
//         onClick={() => colorChangeClick("mint")}
//       >
//         <Image
//           src="/mint.png"
//           width={150}
//           height={150}
//           alt="Apple watch in mint color"
//         />
//       </div>
//       <div
//         className="ocean-background"
//         onClick={() => colorChangeClick("ocean")}
//       >
//         <Image
//           src="/ocean.png"
//           width={150}
//           height={150}
//           alt="Apple watch in ocean pink color"
//         />
//       </div>
//     </div>
//   );
// };

// export default Exploreoptionswrapper;

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
          className="navy"
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
