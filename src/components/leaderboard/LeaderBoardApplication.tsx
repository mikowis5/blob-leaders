import { useEffect, useRef, useState } from "react";
import LeaderBoardContainer from "./LeaderBoardContainer";
import PlayerData from "./row/PlayerData.type";
import PlayerRow from "./row/PlayerRow";
import { useAtom } from 'jotai';
import { leaderboardAtom } from "../../state/leaderboard/LeaderboardState";
import _mockupData from './../../data/mockupPlayerData.json';
import styled from 'styled-components';
import AddPointsModal from "./modals/AddPointsModal";
import AddedPointsAnimation from "../animations/AddedPointsAnimation";
import Sidebar from "../ui/Sidebar";
import AddPlayerModal from "./modals/AddPlayerModal";
import NewRoundAnimation from "../animations/NewRoundAnimation";
import { NewLeaderAnimation } from "../animations/NewLeaderAnimation";
import { FaArrowRight } from "react-icons/fa";
import FinishAnimation from "../animations/FinishAnimation";


const entryPlayerData = _mockupData.players as PlayerData[];

const ApplicationContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
`;

const LeaderBoardApplication: React.FC = () => {

  const [leaderboardState, setLeaderboardState] = useAtom(leaderboardAtom);
  const [showFinish, setShowFinish] = useState(false);

  useEffect(() => {
    setLeaderboardState([]);
  }, []);

  return (
    <ApplicationContainer>
      {showFinish && <FinishAnimation close={() => setShowFinish(false)} />}
      <NewLeaderAnimation/>
      <NewRoundAnimation/>
      <AddedPointsAnimation/>
      <AddPointsModal/>
      <AddPlayerModal/>
      <LeaderBoardContainer>
        {leaderboardState.map((p: PlayerData, i) => <PlayerRow key={p.id} data={p} place={i+1} />)}
      </LeaderBoardContainer>
      <Sidebar finishAnimationCallback={() => setShowFinish(true)} />
      {!leaderboardState.length && 
        <h3 style={{ position: 'absolute', bottom: '20px', right: '20%', opacity: 0.25 }} >
          Kliknij tutaj aby dodać nowego gracza
          <FaArrowRight style={{ marginLeft: 10 }}/>
        </h3>}
    </ApplicationContainer>
  )

}

export default LeaderBoardApplication;