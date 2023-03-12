import { useEffect, useState } from "react";
import LeaderBoardContainer from "./LeaderBoardContainer";
import PlayerData from "./row/PlayerData.type";
import PlayerRow from "./row/PlayerRow";
import { useAtom } from 'jotai';
import { leaderboardAtom } from "../../state/leaderboard/LeaderboardState";
import _mockupData from './../../data/mockupPlayerData.json';


const entryPlayerData = _mockupData.players as PlayerData[];

const LeaderBoardApplication: React.FC = () => {

  const [leaderboardState, setLeaderboardState] = useAtom(leaderboardAtom);

  useEffect(() => {
    setLeaderboardState(entryPlayerData);
  }, []);

  return (
    <LeaderBoardContainer>
      {leaderboardState.map((p: PlayerData, i) => <PlayerRow key={p.id} data={p} place={i+1} />)}
    </LeaderBoardContainer>
  )

}

export default LeaderBoardApplication;