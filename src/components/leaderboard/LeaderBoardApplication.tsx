import { useState } from "react";
import LeaderBoardContainer from "./LeaderBoardContainer";
import PlayerData from "./row/PlayerData.type";
import PlayerRow from "./row/PlayerRow";
import _mockupData from "../../data/mockupPlayerData.json";

const entryPlayerData = _mockupData.players as PlayerData[];

const LeaderBoardApplication: React.FC = () => {

  const [playersData, setPlayersData] = useState<PlayerData[]>(entryPlayerData);

  return (
    <LeaderBoardContainer>
        {playersData.map((p: PlayerData, i) => <PlayerRow key={i} data={p} place={i+1} />)}
    </LeaderBoardContainer>
  )

}

export default LeaderBoardApplication;