import { useAtomValue } from 'jotai';
import { emitCustomEvent } from 'react-custom-events';
import { FaPlusCircle, FaTrophy } from 'react-icons/fa';
import styled from 'styled-components';
import Events from '../../events/Events';
import { leaderboardAtom } from '../../state/leaderboard/LeaderboardState';
import { maxRoundsAtom, roundsAtom } from '../../state/rounds/RoundsState';
import Row from '../common/Row';
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

  const openPlayerModalHandler = () => emitCustomEvent(Events.OpenAddPlayerEvent);
  const leaderboard = useAtomValue(leaderboardAtom);
  const rounds = useAtomValue(roundsAtom);
  const maxRounds = useAtomValue(maxRoundsAtom);

  return (
    <SidebarContainer>
      <div/>
      <Rounds/>
      <Row>
        <ButtonCircle color='green' size='lg' onClick={openPlayerModalHandler}>
          <FaPlusCircle size={20}/>
        </ButtonCircle>
        <ButtonCircle active={leaderboard.length > 2 && rounds === maxRounds} color='blue' size='lg' onClick={finishAnimationCallback}>
          <FaTrophy size={20}/>
        </ButtonCircle>
      </Row>
    </SidebarContainer>
  );

}

export default Sidebar;