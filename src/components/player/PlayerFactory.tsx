import { useMemo } from "react";
import characterStyles from "../../data/characterStyles";
import PlayerCharacter from "./PlayerCharacter";

type Props = {
  characterId: number
}
const PlayerFactory = ({ characterId }: Props) => {

  const playerStyle = useMemo(() => characterStyles(characterId), [])

  return (
    <PlayerCharacter characterStyle={playerStyle} />
  );

}

export default PlayerFactory;