import PlayerData from "./PlayerData";

type Props = {
  data: PlayerData
}

const PlayerRow: React.FC<Props> = ({data}: Props) => {
  return <div>
    <strong>PlayerRow</strong>
    <span> Miejsce: {data.place}, Klasa: {data.classNumber}, Pkt: {data.points}, CharacterId: {data.characterId}</span>
  </div>
}

export default PlayerRow;