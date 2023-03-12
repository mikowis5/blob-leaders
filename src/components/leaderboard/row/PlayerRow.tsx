import PlayerData from "./PlayerData.type";
import Events, { RowStandingMoveUpEventData } from "../../../events/Events";
import { useAtomValue, useSetAtom } from 'jotai';
import { useCustomEventListener } from 'react-custom-events';
import { useState } from "react";
import { isAnimatingAtom } from "../../../state/animations/AnimationState";
import { addPointsToPlayerAction } from "../../../state/leaderboard/actions/addPointsToPlayerAction";
import { moveRowsAnimationDuration, useMoveRowsAnimation } from "../../../state/animations/actions/moveRowsAnimation";
import styled from 'styled-components'


const rowHeight = 70;

const RowContainer = styled.div<{ offsetY: number, transition: number, zIndex: number }>`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  margin: 1rem;
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 2px 2px 5px rgba(0,0,0,.125);
  transform: translateY(${({ offsetY }) => offsetY}px);
  transition: ${({ transition }) => transition}ms;
  z-index: ${({ zIndex }) => zIndex};
  position: relative;
`;

type Props = {
  data: PlayerData,
  place: number
}

const PlayerRow: React.FC<Props> = ({data, place}: Props) => {

  const { id, classNumber, points, characterId } = data;
  const [offsetY, setOffsetY] = useState(0);
  const [transition, setTransition] = useState(0);

  const isAnimating = useAtomValue(isAnimatingAtom);
  const addPointsToPlayer = useSetAtom(addPointsToPlayerAction);
  const runMoveRowsAnimation = useMoveRowsAnimation();

  /**
   * Move row down when another row takesover
   */
  useCustomEventListener(Events.RowStandingMoveDownEvent, (rowId) => {
    if(rowId !== id) return;
    setOffsetY(-rowHeight);
    resetAnimationTimer();
  });

  /**
   * Move row up amount of passed rows
   */
  useCustomEventListener(Events.RowStandingMoveUpEvent, (data: RowStandingMoveUpEventData) => {
      if(data.rowId !== id) return;
      setOffsetY(data.count * rowHeight);
      resetAnimationTimer();
  });

  const resetAnimationTimer = () => {
    setTimeout(function() {
      setTransition(moveRowsAnimationDuration);
      setOffsetY(0);
    }, 5);
    setTimeout(() => {
      setTransition(0);
    }, moveRowsAnimationDuration - 5);
  }

  const plusButtonHandler = () => {
    addPointsToPlayer({id, points: 5});
    runMoveRowsAnimation(id);
  }

  return (
    <RowContainer offsetY={offsetY} transition={transition} zIndex={100-place}>
      <span><i>{place}.</i> Class: {classNumber}, CharacterId: {characterId}</span>
      <div>
        <strong>{points}</strong>
        <button 
          disabled={isAnimating}
          style={{ marginLeft: '0.25rem' }} 
          onClick={plusButtonHandler}
        >+</button>
      </div>
    </RowContainer>
  );
}

export default PlayerRow;