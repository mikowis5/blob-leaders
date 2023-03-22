import { useAtom, useAtomValue } from 'jotai';
import { emitCustomEvent } from 'react-custom-events';
import { FaArrowLeft, FaCamera, FaCameraRetro, FaDownload, FaFile, FaFilm, FaPhotoVideo, FaPlusCircle, FaSave, FaTrophy, FaVideo } from 'react-icons/fa';
import styled from 'styled-components';
import Events from '../../events/Events';
import { cameraAtom, CameraState } from '../../state/camera/cameraState';
import { leaderboardAtom } from '../../state/leaderboard/LeaderboardState';
import { maxRoundsAtom, roundsAtom } from '../../state/rounds/RoundsState';
import Row from '../common/Row';
import SaveStateProvider from '../utils/SaveStateProvider';
import ButtonCircle from './ButtonCircle';
import Rounds from './Rounds';


const SidebarContainer = styled.div`
  flex: 1;
  height: calc(100% - 60px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  padding-left: 0;
  flex-direction: column;
`;

type Props = {
  finishAnimationCallback: React.MouseEventHandler<HTMLDivElement>
}
const Sidebar = ({ finishAnimationCallback }: Props) => {

  
  const leaderboard = useAtomValue(leaderboardAtom);
  const rounds = useAtomValue(roundsAtom);
  const maxRounds = useAtomValue(maxRoundsAtom);
  const [cameraState, setCameraState] = useAtom(cameraAtom);

  const openPlayerModalHandler = () => {
    setCameraState(CameraState.Idle);
    emitCustomEvent(Events.OpenAddPlayerEvent, { });
  }

  const openLoadGameModal = () => {
    setCameraState(CameraState.Idle);
    emitCustomEvent(Events.OpenLoadGameEvent);
  }

  const toggleCamera = () => {
    if(cameraState === CameraState.Idle) {
      setCameraState(CameraState.Forward);
    } else {
      setCameraState(CameraState.Idle);
    }
  }

  return (
    <SidebarContainer>
      <Row style={{ justifyContent: 'flex-end' }}>
        <ButtonCircle opacity={0.75} color='default' size='md' onClick={openLoadGameModal}>
          <FaDownload size={15}/>
        </ButtonCircle>
        <SaveStateProvider>
          <ButtonCircle opacity={0.75} color='blue' size='md'>
            <FaSave size={15}/>
          </ButtonCircle>
        </SaveStateProvider>
      </Row>
      <Rounds/>
      <Row>
        <ButtonCircle color='green' size='lg' onClick={openPlayerModalHandler}>
          <FaPlusCircle size={20}/>
        </ButtonCircle>
        <ButtonCircle opacity={cameraState === CameraState.Idle ? 0.25 : 1} color='default' size='lg' onClick={toggleCamera}>
          <FaVideo size={20}/>
        </ButtonCircle>
        <ButtonCircle active={leaderboard.length > 2 && rounds === maxRounds} color='blue' size='lg' onClick={finishAnimationCallback}>
          <FaTrophy size={20}/>
        </ButtonCircle>
      </Row>
    </SidebarContainer>
  );

}

export default Sidebar;