
import React, { useEffect, useRef } from "react";
import anime from "animejs";

const NumAnim = (props) => {
  const roundLogRef = useRef(null);
  const met = props.met

  useEffect(() => {
    const animationProps = {
      targets: roundLogRef.current,
      innerHTML: [0, `${props.value} ${props.met}`],
      easing: "linear",
      round: 1, // Will round the animated value to 1 decimal
    };

    anime(animationProps);
  }, []);

  return (
    <div className="text-3xl font-bold" ref={roundLogRef}>
      0 {met}
    </div>
  );
};  

export default NumAnim;