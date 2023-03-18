import { useState } from 'react';
import styled from 'styled-components';
import { useCustomEventListener } from 'react-custom-events'
import Events, { NewRoundEventData, PointsAddedEventData } from '../../events/Events';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { isAnimatingAtom } from '../../state/animations/AnimationState';
import PlayerData from '../leaderboard/row/PlayerData.type';
import { selectPlayer } from '../../state/leaderboard/selectors/selectPlayer';
import useAnimation from '../../animations/animationsHook';
import linesBg from '../../assets/img/anime-lines.jpeg'


const Container = styled.div<{ opacity: number }>`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0,0,0, .2);
  opacity: ${({ opacity }) => opacity};
  transition: 0.75s;
`;

const LinesBg = styled.div`
  position: fixed;
  inset: 0;
  background-image: url(${linesBg});
  background-position: center;
  background-size: cover;
  opacity: 0.3;
  z-index: 1;
`;

const RoundLabel = styled.h1`
  position: absolute;
  left: 20%;
  top: 17.5%;
  font-size: 100px;
  -webkit-text-stroke: 5px black;
  text-stroke: 5px black;
  color: white;
  font-weight: 900;
  z-index: 2;
`;

const RoundHeader = styled.h1<{ left: string, top: string }>`
  position: absolute;
  left: ${({ left }) => left};
  top: ${({ top }) => top};
  font-size: 250px;
  -webkit-text-stroke: 8px black;
  text-stroke: 8px black;
  color: white;
  font-weight: 900;
  transition: 0.5s;
  z-index: 2;
`;

export const NewRoundAnimationDuration = 1850;

const NewRoundAnimation = () => {

  const [isVisible, setIsVisble] = useState(false);
  const [isAnimating, setIsAnimating] = useAtom(isAnimatingAtom);

  const [round, setRound] = useState(0);

  const [opacity, setOpacity] = useState(0);
  const [pointsOffsetX, setPointsOffsetX] = useState('45%');
  const [pointsOffsetY, setPointsOffsetY] = useState('12.5%');

  const [textOffsets, setTextOffsets] = useState(250);
  const runTextOffsetsAnimation = useAnimation({
    setter: setTextOffsets,
    frames: [0, 0.1, 2],
    values: [250, 25, -25]
  });

  const restoreDefaults = () => {
    setPointsOffsetX('45%');
    setPointsOffsetY('12.5%');
    setTextOffsets(textOffsets);
    setOpacity(0);
  };

  useCustomEventListener(Events.NewRoundEvent, ({ round }: NewRoundEventData) => {

    setRound(round);
    setOpacity(1);
    runTextOffsetsAnimation();
    
    setTimeout(() => {
      setIsAnimating(true);
      setIsVisble(true);
    }, 50);

    setTimeout(() => {
      setOpacity(0);
    }, NewRoundAnimationDuration - 500);

    setTimeout(() => {
      setIsAnimating(false);
      setIsVisble(false);
      restoreDefaults();
    }, NewRoundAnimationDuration);

  });

  return (
    <>
      {
        isVisible && isAnimating &&
        <Container opacity={opacity}>
          <RoundLabel style={{ transform: `translateX(${-textOffsets}px)` }}>
            Runda
          </RoundLabel>
          <div style={{ zIndex: 2, position: 'absolute', inset: 0, transform: `translateX(${textOffsets}px)`}}>
            <RoundHeader
              top={pointsOffsetY} 
              left={pointsOffsetX}>
              {round}
            </RoundHeader>
          </div>
          <LinesBg style={{ transform: `scale(${ 1.5 - (textOffsets/500) })` }} />
        </Container>
      }
    </>
  );

}

export default NewRoundAnimation;
