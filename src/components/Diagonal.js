import React from "react";

 export  function Diagonal({ color = "fill-primary-700", flip = false, points = "0,0 100,10 0,10" }) {
  return (
    <svg
      aria-hidden="true"
      preserveAspectRatio="none"
      viewBox="0 0 100 10"
      className={`block w-full h-10 transition-transform duration-300 ${flip ? "rotate-270" : ""}`}
    >
      <polygon points={points} className={color} />
    </svg>
  );
}


