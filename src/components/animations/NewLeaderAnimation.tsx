import { useAtom, useAtomValue } from "jotai";
import { useEffect, useState } from "react";
import { useCustomEventListener } from "react-custom-events";
import styled from "styled-components";
import useAnimation from "../../animations/animationsHook";
import { getCharacterStyle } from "../../data/characterStyles";
import Events from "../../events/Events";
import { isAnimatingAtom } from "../../state/animations/AnimationState";
import { currentLeaderId } from "../../state/leaderboard/LeaderboardState";
import { selectPlayer } from "../../state/leaderboard/selectors/selectPlayer";
import { ModalBg, ModalContainer } from "../common/Modal";
import PlayerData from "../leaderboard/row/PlayerData.type";
import PlayerStyle from "../player/PlayerStyle.type";
import BumpImage from "./BumpImage";
import ClassInfo from "./ClassInfo";
import fanfareSound from '../../assets/sfx/fanfare.mp3';
import Sound from 'react-sound';


const NewLeaderAnimationDuration = 6500;

const BgContainer = styled.div<{ opacity: number }>`
  transition: 0.4s;
  opacity: ${({ opacity }) => opacity};
`;

export const NewLeaderAnimation = () => {

  const [focus, setFocus] = useState(false);
  const [isHiding, setIsHiding] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useAtom(isAnimatingAtom);
  const leaderId = useAtomValue(currentLeaderId);
  const getPlayer = useAtomValue(selectPlayer);
  const [player, setPlayer] = useState<PlayerData|null>(null);
  const [playPlayerSound, setPlayPlayerSound] = useState(false);
  const [playerStyle, setPlayerStyle] = useState<PlayerStyle|null>(null);

  const [textOffsets, setTextOffsets] = useState(250);
  const runTextOffsetsAnimation = useAnimation({
    setter: setTextOffsets,
    frames: [0, 4],
    values: [0, 50]
  });

  // useEffect(() => {
  //   setIsHiding(false);
  //   setIsVisible(true);
  //   const _player = getPlayer(2);
  //   setPlayer(_player);
  //   if(_player) {
  //     setPlayerStyle( getCharacterStyle(_player.characterId) );
  //   }

  //   setTimeout(() => {
  //     setIsHiding(true);
  //   }, NewLeaderAnimationDuration - 500);
  //   setTimeout(() => {
  //     setFocus(true);
  //   }, NewLeaderAnimationDuration/4);
  //   runTextOffsetsAnimation();

  // }, []);

  useCustomEventListener(Events.NewLeaderEvent, () => {

    setPlayPlayerSound(false);
    setIsVisible(true);
    setIsAnimating(true);
    setIsHiding(false);

    const _player = getPlayer(leaderId);
    setPlayer(_player);

    if(_player) {
      setPlayerStyle( getCharacterStyle(_player.characterId) );
    }

    setTimeout(() => {
      setPlayPlayerSound(true);
    }, 750);

    runTextOffsetsAnimation();
    setTimeout(() => {
      setFocus(true);
    }, NewLeaderAnimationDuration/4);

    setTimeout(() => {
      setIsHiding(true);
    }, NewLeaderAnimationDuration - 500);

    setTimeout(() => {
      setIsVisible(false);
      setIsAnimating(false);
      setFocus(false);
    }, NewLeaderAnimationDuration);

  });

  return(
    <>
      {
        isVisible && player && playerStyle &&
        <ModalContainer style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {!isHiding && <Sound
            url={fanfareSound}
            playStatus="PLAYING"
            loop={false}
            volume={100}
          />}
          {playPlayerSound && !isHiding && <Sound
            url={playerStyle.leaderSfx ?? ""}
            playStatus="PLAYING"
            loop={false}
            volume={100}
          />}
          <ClassInfo 
            delay={0} 
            topText={"Klasa " + player.classNumber} 
            bottomText="NOWYM LIDEREM!"
            duration={NewLeaderAnimationDuration/1000 - 0.25}
          />
          <BumpImage 
            bgImage={playerStyle.leaderBg}
            style={{
              marginRight: textOffsets + "px"
            }}
            blur={focus ? 3 : 0} 
            delay={0.1} 
            duration={NewLeaderAnimationDuration/1000 - 0.1} 
          />
          <BumpImage 
            bgImage={playerStyle.leaderImg}
            style={{
              marginRight: -textOffsets + "px"
            }}
            blur={focus ? 0 : 8} 
            delay={0.1} 
            duration={NewLeaderAnimationDuration/1000 - 0.1} 
          />
          <BgContainer opacity={!isHiding ? 1 : 0}>
            <ModalBg />
          </BgContainer>
        </ModalContainer>
      }
    </>
  );

}