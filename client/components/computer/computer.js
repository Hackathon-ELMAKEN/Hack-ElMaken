"use client"
import { useLottie, useLottieInteractivity } from "lottie-react";
import computerAnimation from "@/public/computerAnimation.json"

const style = {
  height: "100%",
  width: "100%",
};

const options = {
  animationData: computerAnimation,
};

const Computer = () => {
  const lottieObj = useLottie(options,style);
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: "scroll",
    actions: [
      {
        visibility: [0.4, 0.9],
        type: "play",
        frames: [0, 38],
      },
    ],
  });

  return Animation;
};

export default Computer;