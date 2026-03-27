/* Kode forklaret til mig selv */
/* colorChangeClick vælger mellem produkterne ud fra farve
onClick=>{()=> colorChangeClick("enellerandenfarve")} med billede lytter efter klik 
på billedet, for at den viser det rigtige billede valgt */

// "use client";

// const Productcolorselector = ({
//   colorChangeClick,
// }) => {
//   return (
//     <div className="color-select">
//       <button
//         className="navy"
//         onClick={() => colorChangeClick("navy")}
//       ></button>
//       <div className="circles"></div>
//       <button
//         className="mint"
//         onClick={() => colorChangeClick("mint")}
//       ></button>
//       <div className="circles"></div>
//       <button
//         className="ocean"
//         onClick={() => colorChangeClick("ocean")}
//       ></button>
//     </div>
//   );
// };

// export default Productcolorselector;

const Productcolorselector = () => {
  return (
    <div className="color-select">
      <button className="navy"></button>
      <div className="circles"></div>
      <button className="mint"></button>
      <div className="circles"></div>
      <button className="ocean"></button>
    </div>
  );
};

export default Productcolorselector;
