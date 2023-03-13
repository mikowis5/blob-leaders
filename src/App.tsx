import LeaderBoardApplication from './components/leaderboard/LeaderBoardApplication';
import styled from 'styled-components';
import './player.css';


const AppScreen = styled.div`
  background: #f2edff;
  width: 100vh;
  height: 100vh;
  overflow: hidden;
`;

const App: React.FC = () => {
  return (
    <AppScreen>
      <LeaderBoardApplication />
    </AppScreen>
  );
}

export default App;
