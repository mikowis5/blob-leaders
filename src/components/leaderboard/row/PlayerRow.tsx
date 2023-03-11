import PlayerData from "./PlayerData.type";

type Props = {
  data: PlayerData,
  place: number
}

const PlayerRow: React.FC<Props> = ({data, place}: Props) => {

  const { classNumber, points, characterId } = data;

  return (
    <div className="player-row">
      <span><i>{place}.</i> Class: {classNumber}, CharacterId: {characterId}</span>
      <div>
        <strong>{points}</strong>
        <button style={{ marginLeft: '0.25rem' }}>+</button>
      </div>
    </div>
  );
}

export default PlayerRow;