import PlayerData from "./PlayerData.type";
import Events, { RowStandingMoveUpEventData } from "../../../events/Events";
import { useAtomValue } from 'jotai';
import { useCustomEventListener } from 'react-custom-events';
import { useState } from "react";
import { isAnimatingMoveRowsAtom } from "../../../state/animations/AnimationState";
import styled from 'styled-components'
import useAnimation from "../../../animations/animationsHook";
import EdgePlatform from "./EdgePlatform";
import MainPlatform from "./MainPlatform";
import { selectRowHeight } from "../../../state/ui/selectors/selectRowHeight";
import AddPointsProvider from "./AddPointsProvider";
import ClassSign from "./ClassSign";
import PlayerFactory from "../../player/PlayerFactory";


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
  const isAnimatingMoveRows = useAtomValue(isAnimatingMoveRowsAtom);

  /**
   * Move row down when another row takesover
   */
  const runDownAnimation = useAnimation({
    setter: setOffsetY,
    frames: [0, 1],
    values: [-rowHeight, 0],
  });
  useCustomEventListener(Events.RowStandingMoveDownEvent, (rowId) => {
    if(rowId !== id) return;
    runDownAnimation();
  });

  /**
   * Move row up amount of passed rows
   */
  const runUpAnimation = useAnimation({
    setter: setOffsetY,
    frames: [0, 1],
    values: [rowHeight * countAhead, 0],
  });
  useCustomEventListener(Events.RowStandingMoveUpEvent, (data: RowStandingMoveUpEventData) => {
      if(data.rowId !== id) return;
      setCountAhead(data.count);
      runUpAnimation();
  });

  return (
    <RowContainer 
      margin={rowMargin}
      style={{ zIndex: 100 + ( (isAnimatingMoveRows ? -1 : 1)*place), transform: `translateY(${offsetY}px)`
    }}>
      <EdgePlatform displayNumber={place + "."} placement='left' />
      <MainPlatform>
        <div style={{ marginLeft: '15px', transform: 'translateY(-15px)' }}>
          <PlayerFactory characterId={characterId} />
          <div className="blob-shadow"/>
        </div>
        <ClassSign classNumber={classNumber} />
      </MainPlatform>
      <AddPointsProvider playerId={id}>
        <EdgePlatform displayNumber={points} placement='right' />
      </AddPointsProvider>
    </RowContainer>
  );
}

export default PlayerRow;