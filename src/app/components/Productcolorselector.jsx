"use client";

const Productcolorselector = ({
  colorChangeClick,
}) => {
  return (
    <div className="color-select">
      <button
        className="navy"
        onClick={() => colorChangeClick("navy")}
      ></button>
      <div className="circles"></div>
      <button
        className="mint"
        onClick={() => colorChangeClick("mint")}
      ></button>
      <div className="circles"></div>
      <button
        className="ocean"
        onClick={() => colorChangeClick("ocean")}
      ></button>
    </div>
  );
};

export default Productcolorselector;
