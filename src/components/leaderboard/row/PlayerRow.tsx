import PlayerData from "./PlayerData.type";
import { useSetAtom } from 'jotai';
import { addPointsToPlayerAction, sortLeaderboardAction } from "../../../state/LeaderboardState";

type Props = {
  data: PlayerData,
  place: number
}

const PlayerRow: React.FC<Props> = ({data, place}: Props) => {

  const { id, classNumber, points, characterId } = data;
  const addPointsToPlayer = useSetAtom(addPointsToPlayerAction);
  const sortLeaderboard = useSetAtom(sortLeaderboardAction);

  return (
    <div className="player-row">
      <span><i>{place}.</i> Class: {classNumber}, CharacterId: {characterId}</span>
      <div>
        <strong>{points}</strong>
        <button 
          style={{ marginLeft: '0.25rem' }} 
          onClick={() => {
            addPointsToPlayer({id, points: 5});
            sortLeaderboard();
          }}
        >+</button>
      </div>
    </div>
  );
}

export default PlayerRow;