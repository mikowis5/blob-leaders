import { useEffect, useMemo, useState } from "react";
import { getCharacterStyle } from "../../data/characterStyles";
import PlayerCharacter from "./PlayerCharacter";
import breatheAnimation from "./animations/breatheAnimation";
import yawnAnimation from "./animations/yawnAnimation";
import wavingAnimation from "./animations/wavingAnimation";

const animations = [
  breatheAnimation, yawnAnimation, wavingAnimation
];

type Props = {
  characterId: number
}
const PlayerFactory = ({ characterId }: Props) => {

  let animationCarousel = false;
  const playerStyle = useMemo(() => getCharacterStyle(characterId), [characterId])
  const [currentAnimation, setCurrentAnimation] = useState(breatheAnimation);

  const decideNewAnimation = () => {
    const rand = Math.random();
    const newAnimation = rand < 0.5 ? breatheAnimation
      : animations.sort(a => 0.5 - Math.random())[0];
    setCurrentAnimation(newAnimation);
    setTimeout(decideNewAnimation, (newAnimation?.animationDuration || 4) * 1000);
  };

  useEffect(() => {
    if(!animationCarousel) {
      animationCarousel = true;
      setTimeout(decideNewAnimation, Math.random() * 10000);
    }
  }, []);

  return (
    <PlayerCharacter animation={currentAnimation} characterStyle={playerStyle} />
  );

}

export default PlayerFactory;