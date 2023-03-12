import PlayerData from "./PlayerData.type";
import Events, { RowStandingMoveUpEventData } from "../../../events/Events";
import { useAtomValue, useSetAtom } from 'jotai';
import { useCustomEventListener } from 'react-custom-events';
import { useState } from "react";
import { isAnimatingAtom } from "../../../state/animations/AnimationState";
import { addPointsToPlayerAction } from "../../../state/leaderboard/actions/addPointsToPlayerAction";
import { useMoveRowsAnimation } from "../../../state/animations/actions/moveRowsAnimation";
import styled from 'styled-components'
import useAnimation from "../../../animations/animationsHook";
import EdgePlatform from "./EdgePlatform";
import MainPlatform from "./MainPlatform";
import { selectRowHeight } from "../../../state/ui/selectors/selectRowHeight";


const RowContainer = styled.div<{ margin: number }>`
  display: flex;
  justify-content: space-between;
  margin: ${({ margin }) => margin}px;
  border-radius: 0.25rem;
  position: relative;
`;

type Props = {
  data: PlayerData,
  place: number
}
const PlayerRow: React.FC<Props> = ({data, place}: Props) => {

  const { id, classNumber, points, characterId } = data;

  const [offsetY, setOffsetY] = useState(0);
  const [countAhead, setCountAhead] = useState(0);
  const rowMargin = 30;
  const rowHeight = useAtomValue(selectRowHeight) + rowMargin;

  const runDownAnimation = useAnimation({
    setter: setOffsetY,
    frames: [0, 1],
    values: [-rowHeight, 0],
  });

  const runUpAnimation = useAnimation({
    setter: setOffsetY,
    frames: [0, 1],
    values: [rowHeight * countAhead, 0],
  });

  const isAnimating = useAtomValue(isAnimatingAtom);
  const addPointsToPlayer = useSetAtom(addPointsToPlayerAction);
  const runMoveRowsAnimation = useMoveRowsAnimation();

  /**
   * Move row down when another row takesover
   */
  useCustomEventListener(Events.RowStandingMoveDownEvent, (rowId) => {
    if(rowId !== id) return;
    runDownAnimation();
  });

  /**
   * Move row up amount of passed rows
   */
  useCustomEventListener(Events.RowStandingMoveUpEvent, (data: RowStandingMoveUpEventData) => {
      if(data.rowId !== id) return;
      setCountAhead(data.count);
      runUpAnimation();
  });

  const plusButtonHandler = () => {
    addPointsToPlayer({id, points: 5});
    runMoveRowsAnimation(id);
  }

  return (
    <RowContainer 
      margin={rowMargin}
      style={{ zIndex: 100-place, transform: `translateY(${offsetY}px)`
    }}>
      <EdgePlatform displayNumber={place + "."} placement='left' />
      <MainPlatform>
        <span>Class: {classNumber}, CharacterId: {characterId}</span>
        <div>
          <button
            disabled={isAnimating}
            style={{ marginLeft: '0.25rem' }} 
            onClick={plusButtonHandler}
          >+</button>
        </div>
      </MainPlatform>
      <EdgePlatform displayNumber={points} placement='right' />
    </RowContainer>
  );
}

export default PlayerRow;