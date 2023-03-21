import { useAtom, useAtomValue } from 'jotai';
import { useEffect, useRef } from 'react';
import styled from 'styled-components'
import { cameraAtom, CameraState } from '../../state/camera/cameraState';

const LeaderBoardList = styled.div`
  width: 80%;
  overflow-y: auto;
  direction: rtl;
  scroll-behavior: smooth;

  > div {
    direction: ltr;
  }

`;

const CameraSpeed = 2;

type Props = {
  children: string | JSX.Element | JSX.Element[]
}

const LeaderBoardContainer: React.FC<Props> = ({children} : Props) => {

  const scroller = useRef(null);
  const [cameraState, setCameraState] = useAtom(cameraAtom);

  useEffect(() => {

    const interval = setInterval(function() {
      const selectedElement = document.getElementById('container-scroll');
      if(selectedElement && cameraState !== CameraState.Idle) {
        if(cameraState === CameraState.Forward) {
          selectedElement.scrollTop = selectedElement.scrollTop + CameraSpeed;
          if(selectedElement.scrollTop + 25 >= (selectedElement.scrollHeight - window.innerHeight)) {
            selectedElement.scrollTop = selectedElement.scrollTop - 2*CameraSpeed;
            setCameraState(CameraState.Backward);
          }
        } else if (cameraState === CameraState.Backward) {
          selectedElement.scrollTop = selectedElement.scrollTop - CameraSpeed;
          if(selectedElement.scrollTop <= 3) {
            selectedElement.scrollTop = selectedElement.scrollTop + CameraSpeed;
            setCameraState(CameraState.Forward);
          }
        }
      }
    }, 50);

    return () => clearInterval(interval)

  }, [cameraState]);

  return (
    <LeaderBoardList id='container-scroll' ref={scroller}>
      <div style={{ padding: "5px 0" }} />
      {children}
      <div style={{ padding: "5px 0" }} />
    </LeaderBoardList>
  )

}

export default LeaderBoardContainer;