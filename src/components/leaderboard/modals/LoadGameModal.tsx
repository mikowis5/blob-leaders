import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { emitCustomEvent, useCustomEventListener } from 'react-custom-events'
import Events, { EventData, OpenAddPointsEventData, PointsAddedEventData } from '../../../events/Events';
import ButtonCircle from '../../ui/ButtonCircle';
import { FaArrowRight, FaCheck, FaTimes } from 'react-icons/fa';
import { useAtomValue, useSetAtom } from 'jotai';
import { useMoveRowsAnimation } from '../../../state/animations/actions/moveRowsAnimation';
import { addPointsToPlayerAction } from '../../../state/leaderboard/actions/addPointsToPlayerAction';
import { isAnimatingAtom } from '../../../state/animations/AnimationState';
import { sortLeaderboardAction } from '../../../state/leaderboard/actions/sortLeaderboardAction';
import { AddedPointsAnimationDuration } from '../../animations/AddedPointsAnimation';
import { ModalBg, ModalContainer } from '../../common/Modal';
import useModal from '../../../hooks/modalHook';
import Row from '../../common/Row';
import PlayerData from '../row/PlayerData.type';
import { GameState } from '../../utils/SaveStateProvider';
import { leaderboardAtom } from '../../../state/leaderboard/LeaderboardState';
import { maxRoundsAtom, roundsAtom } from '../../../state/rounds/RoundsState';
import { gameIdAtom } from '../../../state/GameIdState';


const PopupAnimation = keyframes`
  0% { transform: scale(65%); opacity: 0; }
  100% { transform: scale(100%); opacity: 1; }
`;

const Content = styled.div`
  position: absolute;
  z-index: 10;
  background: white;
  border-radius: 15px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  inset: 20%;
  overflow-y: hidden;
  overflow-x: visible;

  animation: ${PopupAnimation};
  animation-duration: 0.25s;
  animation-fill-mode: forwards;
`;

const ScrollContent = styled.div`
  flex: 1;
  border-top: 1px solid #ccc;
  padding-top: 10px;
  margin-top: 10px;
  width: 100%;
  overflow-x: visible;
  overflow-y: auto;
`;

const AvailableGameContainer = styled.div`
  margin: 5px;
  padding: 10px;
  background: white;
  border-radius: 15px;
  box-shadow: 2px 2px 5px rgba(0,0,0,.125);
`;


type AvailableGame = {
  game_state: GameState,
  timestamp: string
}

const LoadGameModal = () => {

  const [availableGames, setAvailableGames] = useState<AvailableGame[]>([]);
  const setGameId = useSetAtom(gameIdAtom);
  const setLeaderboard = useSetAtom(leaderboardAtom);
  const setRounds = useSetAtom(roundsAtom);
  const setMaxRounds = useSetAtom(maxRoundsAtom);

  const { isModalVisible, hideModal } = useModal(Events.OpenLoadGameEvent, () => {
    
    setAvailableGames([]);
    fetch('/availableStates.php')
      .then(data => {
        data.json().then(json => {
          if(json && Array.isArray(json)) {
            setAvailableGames(json);
          }
        });
      });

  });

  const loadGame = (state: GameState) => {
    setGameId(state.gameId);
    setLeaderboard(state.leaderboard);
    setRounds(state.rounds);
    setMaxRounds(state.maxRounds);

    hideModal();
  }

  const renderAvailableGames = () => {
    return availableGames.map((game, i) => 
      <AvailableGameContainer key={i}>
        <Row style={{ justifyContent: 'space-between' }}>
          <div>
            <span style={{ color: '#8877ff' }}>{game.game_state.gameId}</span>
            <span> | </span>
            <span style={{ opacity: 0.5 }}>{game.timestamp}</span>
          </div>
          <ButtonCircle size='md' color='blue' onClick={() => loadGame(game.game_state)}>
            <FaArrowRight size={10}/>
          </ButtonCircle>
        </Row>
      </AvailableGameContainer>);
  }

  return (
    <>
      {
        isModalVisible &&
        <ModalContainer style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Content>
            <Row style={{ justifyContent: 'space-between' }}>
              <h3 style={{ margin: 0 }}>Przywróć zapisaną grę</h3>
              <ButtonCircle size='lg' onClick={() => hideModal()}>
                <FaTimes size={15} />
              </ButtonCircle>
            </Row>
            <ScrollContent>
              {availableGames.length === 0 ? "Ładuję dostępne gry..." : renderAvailableGames()}
            </ScrollContent>
          </Content>
          <ModalBg onClick={() => hideModal()} />
        </ModalContainer>
      }
    </>
  );

}

export default LoadGameModal;
