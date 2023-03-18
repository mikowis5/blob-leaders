import { useAtom } from 'jotai';
import { emitCustomEvent } from 'react-custom-events';
import { FaCaretDown, FaCaretLeft, FaCaretRight, FaCaretUp } from 'react-icons/fa';
import styled from 'styled-components';
import Events from '../../events/Events';
import { isAnimatingAtom } from '../../state/animations/AnimationState';
import { maxRoundsAtom, roundsAtom } from '../../state/rounds/RoundsState';
import Row from '../common/Row';
import ButtonCircle from './ButtonCircle';

const MaxArrows = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  opacity: 0;
  right: 15px;
  justify-content: space-between;
  height: 40px;
`;

const RoundsContainer = styled.div`
  width: 100%;

  &:hover {
    ${MaxArrows} {
      opacity: 1;
    }
  }

`;

const RoundDot = styled.div<{ background: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${ ({ background }) => background };
  margin: 3px;
`;

const RoundsHeader = styled.div<{ fontSize: number, rotation?: number }>`
  font-size: ${({fontSize}) => fontSize}px;
  font-weight: 900;
  color: white;
  transform: rotate(${({rotation}) => rotation ?? 0}deg);
  text-align: center;
  -webkit-text-stroke: 2px black;
  text-stroke: 2px black;
`;

const Rounds = () => {

  const [rounds, setRounds] = useAtom(roundsAtom);
  const [maxRounds, setMaxRounds] = useAtom(maxRoundsAtom);
  const [isAnimating] = useAtom(isAnimatingAtom);

  const goToNextRound = () => {
    if(!isAnimating && rounds < maxRounds) {
      emitCustomEvent(Events.NewRoundEvent, { round: rounds + 1 });
      setRounds(rounds + 1);
    }
  }

  const goToPreviousRound = () => {
    if(rounds > 1) {
      setRounds(rounds - 1);
    }
  }

  const incrementMaxRounds = () => setMaxRounds(maxRounds + 1);

  const decrementMaxRounds = () => {
    if(maxRounds > 1) {
      setMaxRounds(maxRounds - 1);
    }
  }

  return (
    <RoundsContainer>
      <RoundsHeader rotation={5} fontSize={35}>Runda</RoundsHeader>
      <Row style={{ flexWrap: 'nowrap', justifyContent: 'center' }}>
        <RoundsHeader rotation={5} fontSize={80}>{rounds}</RoundsHeader> 
        <RoundsHeader style={{ marginLeft: 7.5 }} rotation={5} fontSize={45}>/</RoundsHeader>
        <RoundsHeader style={{ marginLeft: 10 }} rotation={5} fontSize={35}>{maxRounds}</RoundsHeader>
        <MaxArrows>
          <ButtonCircle size='xs' onClick={incrementMaxRounds} >
            <FaCaretUp/>
          </ButtonCircle>
          <ButtonCircle size='xs' onClick={decrementMaxRounds} >
            <FaCaretDown/>
          </ButtonCircle>
        </MaxArrows>
      </Row>
      <Row style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
        {[...Array(rounds)].map((n, i) => <RoundDot background='#ee7788' key={i} />)}
        {[...Array(maxRounds - rounds)].map((n, i) => <RoundDot background='#cccccc' key={i} />)}
      </Row>
      <Row style={{ justifyContent: 'center' }} >
        <ButtonCircle size='sm' onClick={goToPreviousRound} >
          <FaCaretLeft/>
        </ButtonCircle>
        <ButtonCircle size='sm' onClick={goToNextRound} >
          <FaCaretRight/>
        </ButtonCircle>
      </Row>
    </RoundsContainer>
  );

}

export default Rounds;