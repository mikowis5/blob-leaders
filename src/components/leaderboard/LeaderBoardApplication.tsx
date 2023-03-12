import { useEffect, useState } from "react";
import LeaderBoardContainer from "./LeaderBoardContainer";
import PlayerData from "./row/PlayerData.type";
import PlayerRow from "./row/PlayerRow";
import { useAtom } from 'jotai';
import { leaderboardAtom } from "../../state/leaderboard/LeaderboardState";
import _mockupData from './../../data/mockupPlayerData.json';
import styled from 'styled-components';
import AddPointsModal from "./modals/AddPointsModal";
import AddedPointsAnimation from "../animations/AddedPointsAnimation";


const entryPlayerData = _mockupData.players as PlayerData[];

const ApplicationContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
`;

const LeaderBoardApplication: React.FC = () => {

  const [leaderboardState, setLeaderboardState] = useAtom(leaderboardAtom);

  useEffect(() => {
    setLeaderboardState(entryPlayerData);
  }, []);

  return (
    <ApplicationContainer>
      <AddedPointsAnimation/>
      <AddPointsModal/>
      <LeaderBoardContainer>
        {leaderboardState.map((p: PlayerData, i) => <PlayerRow key={p.id} data={p} place={i+1} />)}
      </LeaderBoardContainer>
    </ApplicationContainer>
  )

}

export default LeaderBoardApplication;