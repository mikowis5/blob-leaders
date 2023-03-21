import styled from 'styled-components';
import { No, Platform } from './EdgePlatform';
import { emitCustomEvent } from 'react-custom-events';
import Events, { OpenAddPointsEventData } from '../../../events/Events';
import { useRef } from 'react';
import { isAnimatingAtom } from '../../../state/animations/AnimationState';
import { useAtom, useAtomValue } from 'jotai';
import { cameraAtom, CameraState } from '../../../state/camera/cameraState';

const Container = styled.div`
  &:hover {
    cursor: pointer;
    ${Platform} {
      transition: 0.25s;
      transform: translateX(3px);
    }
    ${No} {
      transition: 0.25s;
      transform: scale(1.05);
    }
  }
`;

type Props = {
  children?: string | JSX.Element | JSX.Element[],
  playerId: number
}
const AddPointsProvider: React.FC<Props> = ({children, playerId} : Props) => {

  const isAnimating = useAtomValue(isAnimatingAtom);
  const [cameraState, setCameraState] = useAtom(cameraAtom);

  const emitAddPointsEvent = () => {
    const element = document.getElementById("add-points-provider" + playerId);
    if(isAnimating || !element) return;

    setCameraState(CameraState.Idle);

    const offset = element.getBoundingClientRect();
    const data: OpenAddPointsEventData = { 
      playerId, 
      positionX: offset.left,
      positionY: offset.top
    };
    emitCustomEvent(Events.OpenAddPointsEvent, data);
  }

  return (
    <Container id={"add-points-provider" + playerId} onClick={emitAddPointsEvent}>
      {children}
    </Container>
  );
}

export default AddPointsProvider;