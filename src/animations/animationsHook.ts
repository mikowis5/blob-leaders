import { useEffect, useState } from "react";
import { animate } from "framer-motion"
import { arrayInterpolate } from "./math";

type AnimationValueMap = {
  setter: Function,
  frames: number[],
  values: (number|string)[],
  delay?: number
}

const useAnimation = (props: AnimationValueMap): Function => {

  const { setter, frames, values, delay } = props;
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if(!isAnimating) return;
    let duration = frames[frames.length - 1];

    animate(0, 1, {
      delay: delay ?? 0,
      duration,
      onUpdate: latest => {
        if(isAnimating) {
          setter(arrayInterpolate(frames, values, latest));
        }
      },
      onComplete: () => {
        setIsAnimating(false);
      },
    });
  }, [isAnimating]);

  const runAnimation = () => {
    setIsAnimating(true);
  };

  return runAnimation;

}

export default useAnimation;