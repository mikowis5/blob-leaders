import { useState } from 'react';
import styled from 'styled-components';
import { useCustomEventListener } from 'react-custom-events'
import Events, { PointsAddedEventData } from '../../events/Events';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { isAnimatingAtom } from '../../state/animations/AnimationState';
import PlayerData from '../leaderboard/row/PlayerData.type';
import { selectPlayer } from '../../state/leaderboard/selectors/selectPlayer';
import useAnimation from '../../animations/animationsHook';
import linesBg from '../../assets/img/anime-lines.jpeg'
import PlayerCharacter from '../player/PlayerCharacter';
import { getCharacterStyle } from '../../data/characterStyles';
import pointsAddedAnimation from '../player/animations/pointsAddedAnimation';


const Container = styled.div<{ opacity: number }>`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100vh;
  z-index: 9999;
  background: rgba(0,0,0, .2);
  opacity: ${({ opacity }) => opacity};
  transition: 1s;
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

const PlayerName = styled.h1`
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

const AddedPoints = styled.h1<{ opacity: number, fontSize: number, left: string, top: string }>`
  position: absolute;
  left: ${({ left }) => left};
  top: ${({ top }) => top};
  font-size: ${({ fontSize }) => fontSize}px;
  -webkit-text-stroke: 8px black;
  text-stroke: 8px black;
  color: white;
  font-weight: 900;
  opacity: ${({ opacity }) => opacity};
  transition: 0.5s;
  z-index: 2;
`;

const PlayerAnim = styled.div`
  z-index: 5;
  position: absolute;
  left: 175px;
  bottom: 175px;
  transform: scale(3);
`;

export const AddedPointsAnimationDuration = 1850;

const AddedPointsAnimation = () => {

  const [isVisible, setIsVisble] = useState(false);
  const [isAnimating, setIsAnimating] = useAtom(isAnimatingAtom);
  const getPlayer = useAtomValue(selectPlayer);

  const [player, setPlayer] = useState<PlayerData|null>(null);
  const [addedPoints, setAddedPoints] = useState(0);

  const [pointsOpacity, setPointsOpacity] = useState(0);
  const [pointsFontSize, setPointsFontSize] = useState(250);
  const [pointsOffsetX, setPointsOffsetX] = useState('35%');
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
    setPointsFontSize(250);
    setTextOffsets(textOffsets);
    setPointsOpacity(0);
  };

  useCustomEventListener(Events.PointsAddedEvent, (data: PointsAddedEventData) => {

    setPointsOpacity(1);
    setPlayer(getPlayer(data.playerId));
    setAddedPoints(data.points);
    runTextOffsetsAnimation();
    
    setTimeout(() => {
      setIsAnimating(true);
      setIsVisble(true);
    }, 50);

    setTimeout(() => {
      setPointsOffsetX(data.positionX + 5 + 'px');
      setPointsOffsetY(data.positionY - 20 + 'px');
      setPointsFontSize(50);
      setPointsOpacity(0);
    }, AddedPointsAnimationDuration - 500);

    setTimeout(() => {
      setIsVisble(false);
      restoreDefaults();
    }, AddedPointsAnimationDuration);

  });

  return (
    <>
      {
        isVisible && isAnimating &&
        <Container opacity={pointsOpacity}>
          {player && (
            <>
              <PlayerName style={{ transform: `translateX(${-textOffsets}px)` }}>
                Klasa {player.classNumber}
              </PlayerName>
              <div style={{ zIndex: 2, position: 'absolute', inset: 0, transform: `translateX(${textOffsets}px)`}}>
                <AddedPoints 
                  opacity={pointsOpacity} 
                  fontSize={pointsFontSize} 
                  top={pointsOffsetY} 
                  left={pointsOffsetX}>
                  +{addedPoints}
                </AddedPoints>
              </div>
            </>
          )}
          <LinesBg style={{ transform: `scale(${ 1.5 - (textOffsets/500) })` }} />
          <PlayerAnim>
            {player && <PlayerCharacter characterStyle={getCharacterStyle(player.characterId)} animation={pointsAddedAnimation} />}
        </PlayerAnim>
        </Container>
      }
    </>
  );

}

export default AddedPointsAnimation;
