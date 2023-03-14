import { useState } from 'react';
import styled from 'styled-components';
import { emitCustomEvent, useCustomEventListener } from 'react-custom-events'
import Events, { EventData, OpenAddPointsEventData, PointsAddedEventData } from '../../../events/Events';
import ButtonCircle from '../../ui/ButtonCircle';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { useAtomValue, useSetAtom } from 'jotai';
import { useMoveRowsAnimation } from '../../../state/animations/actions/moveRowsAnimation';
import { addPointsToPlayerAction } from '../../../state/leaderboard/actions/addPointsToPlayerAction';
import { isAnimatingAtom } from '../../../state/animations/AnimationState';
import { sortLeaderboardAction } from '../../../state/leaderboard/actions/sortLeaderboardAction';
import { AddedPointsAnimationDuration } from '../../animations/AddedPointsAnimation';
import { ModalBg, ModalContainer } from '../../common/Modal';
import useModal from '../../../hooks/modalHook';


const InputContainer = styled.div<{ positionX: number, positionY: number }>`
  position: fixed;
  z-index: 10;
  background: white;
  border-radius: 8px;
  padding: 10px;
  width: 180px;
  left: ${({positionX}) => positionX}px;
  top: ${({positionY}) => positionY}px;
  display: flex;
  align-items: center;
  justify-content:center;
  transform: translateX(-25%) translateY(115%);

  input {
    width: 50px;
    display: inline;
    margin-right: 10px;
    padding: 8px;
    font-size: 20px;
    border-radius: 16px;
    border-color: #eaf;
  }
`;

const Arrow = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  transform: rotate(45deg);
  left: calc(50% - 8px);
  top: -6px;
  background: white;
`;

const AddPointsModal = () => {

  const [playerId, setPlayerId] = useState<number>(-1);
  const [posX, setPosX] = useState<number>(-1);
  const [posY, setPosY] = useState<number>(-1);
  const [inputPoints, setInputPoints] = useState<any>(0);

  const isAnimating = useAtomValue(isAnimatingAtom);
  const addPointsToPlayer = useSetAtom(addPointsToPlayerAction);
  const runMoveRowsAnimation = useMoveRowsAnimation();
  const sortLeaderboard = useSetAtom(sortLeaderboardAction);

  const { isModalVisible, hideModal } = useModal(Events.OpenAddPointsEvent, (eventData: OpenAddPointsEventData) => {
    setInputPoints(0);
    setPosX(eventData.positionX);
    setPosY(eventData.positionY);
    setPlayerId(eventData.playerId);
  });

  const submitPoints = () => {
    if(inputPoints > 0) {

      const points = parseInt(inputPoints);
      const eventData: PointsAddedEventData = { playerId, points, positionX: posX, positionY: posY };
      emitCustomEvent(Events.PointsAddedEvent, eventData);

      setTimeout(() => {
        addPointsToPlayer({id: playerId, points});
        runMoveRowsAnimation(playerId);
      }, AddedPointsAnimationDuration - 200)
      
    } else if (inputPoints < 0) {
      addPointsToPlayer({id: playerId, points: parseInt(inputPoints)});
      sortLeaderboard();
    }
    hideModal();
  }

  const handleInputOnChange = (e: any) => {
    setInputPoints(e.target.value ? parseInt(e.target.value) : "");
  }

  return (
    <>
      {
        isModalVisible && !isAnimating &&
        <ModalContainer>
          <InputContainer positionX={posX} positionY={posY}>
            <Arrow/>
            <input value={inputPoints} type="number" onChange={handleInputOnChange} />
            <ButtonCircle color='blue' onClick={submitPoints}>
              <FaCheck />
            </ButtonCircle>
            <ButtonCircle onClick={() => hideModal()}>
              <FaTimes />
            </ButtonCircle>
          </InputContainer>
          <ModalBg onClick={() => hideModal()} />
        </ModalContainer>
      }
    </>
  );

}

export default AddPointsModal;
