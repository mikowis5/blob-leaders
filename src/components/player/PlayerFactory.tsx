import { useMemo } from "react";
import { getCharacterStyle } from "../../data/characterStyles";
import PlayerCharacter from "./PlayerCharacter";
import breatheAnimation from "./animations/breatheAnimation";

type Props = {
  characterId: number
}
const PlayerFactory = ({ characterId }: Props) => {

  const playerStyle = useMemo(() => getCharacterStyle(characterId), [characterId])

  return (
    <PlayerCharacter animation={breatheAnimation} characterStyle={playerStyle} />
  );

}

export default PlayerFactory;