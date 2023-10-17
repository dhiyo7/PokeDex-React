import React, { useEffect, useRef } from "react";
import anime from "animejs";



export const StatsBar = ({ value }) => {
  const barRef = useRef(null);

  useEffect(() => {
    anime({
      targets: barRef.current,
      width: value,
      duration: 700,
      easing: "spring", // Anime.js uses different easing names
      round: 10, // Equivalent to "points" in GSAP
    //   direction: "alternate", // Equivalent to "taper" in GSAP
      elasticity: 1, // Equivalent to "strength" in GSAP
    });
  }, [value]);

  return (
    <div className="bg-gray-200 w-full h-4 rounded-full overflow-hidden">
      <div
        ref={barRef}
        className="bg-black h-full"
        style={{ width: "0%" }}
      ></div>
    </div>
  );
};
