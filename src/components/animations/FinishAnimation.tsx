import { useAtom, useAtomValue } from "jotai";
import { FaArrowLeft } from "react-icons/fa";
import styled from "styled-components";
import { leaderboardAtom } from "../../state/leaderboard/LeaderboardState";
import ButtonCircle from "../ui/ButtonCircle";
import { Fireworks } from '@fireworks-js/react'
import standingsImg from "../../assets/img/standings.png";
import Row from "../common/Row";
import PlayerCharacter from "../player/PlayerCharacter";
import { getCharacterStyle } from "../../data/characterStyles";
import clappingAnimation from "../player/animations/clappingAnimation";
import introAnimation from "../player/animations/introAnimation";
import wavingAnimation from "../player/animations/wavingAnimation";
import { useEffect, useState } from "react";
import useAnimation from "../../animations/animationsHook";
import ClassInfo from "./ClassInfo";
import IntroBgAnimation from "./IntroBgAnimation";
import { cameraAtom, CameraState } from "../../state/camera/cameraState";

const ModalContainer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
`;

const ModalBg = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.95);
`;

const ModalContent = styled.div`
  position: absolute;
  inset: 0;
  z-index: 3;
`;

const Standings = styled.div`
  width: 50vh;
  height: 50vh;
  top: 20%;
  position: absolute;
  background: url(${standingsImg});
  background-size: cover;
`;

const AudienceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  bottom: 0;
  justify-content: center;
`;

const Audience = styled.div`
  margin-top: -35px;
`;

const StandingPlayer = styled.div`
  position: absolute;
  transform: scaleX(-1.25) scaleY(1.25);
`;

const CenterScene = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 15;
  padding-bottom: 75px;
  box-sizing: border-box;
`;

const ClassLabel = styled.h2`
  color: white;
  padding: 6px;
  position: absolute;
  background: black;
  border: 2px solid white;
  left: 30px;
  bottom: -40px;
  z-index: 100;
  transform: scaleX(-1);
`;

type Props = {
  close: React.MouseEventHandler<HTMLDivElement>
}
const FinishAnimation = ({ close }: Props) => {

  const leaderboard = useAtomValue(leaderboardAtom);

  const [cameraState, setCameraState] = useAtom(cameraAtom);
  const [animationState, setAnimationState] = useState(0);
  const runTextOffsetsAnimation = useAnimation({
    setter: setAnimationState,
    frames: [0, 50],
    values: [0, 50]
  });

  useEffect(() => {
    setCameraState(CameraState.Idle);
    runTextOffsetsAnimation();
  }, []);

  if(leaderboard.length < 3) {
    return <div/>
  }

  return (

    <ModalContainer>
      
      <ModalContainer style={{ opacity: animationState/2  }}>
        <Standings>
          {animationState > 6 && <StandingPlayer style={{ top: '42%', left: '61.5%' }}>
            <PlayerCharacter animation={wavingAnimation} characterStyle={getCharacterStyle(leaderboard[2].characterId)} />
            {animationState > 40 && <ClassLabel>{leaderboard[2].classNumber}</ClassLabel>}
          </StandingPlayer>}
          {animationState > 20.25 && <StandingPlayer style={{ top: '5%', left: '11%' }}>
            <PlayerCharacter animation={wavingAnimation} characterStyle={getCharacterStyle(leaderboard[1].characterId)} />
            {animationState > 40 && <ClassLabel>{leaderboard[1].classNumber}</ClassLabel>}
          </StandingPlayer>}
          {animationState > 33.5 && <StandingPlayer style={{ top: '8%', left: '41%' }}>
            <PlayerCharacter animation={wavingAnimation} characterStyle={getCharacterStyle(leaderboard[0].characterId)} />
            {animationState > 40 && <ClassLabel>{leaderboard[0].classNumber}</ClassLabel>}
          </StandingPlayer>}
        </Standings>
        <Row style={{ zIndex: 125, width: '100%', justifyContent: 'space-between', position: 'absolute', top: 0 }}>
          <ButtonCircle color='default' size='lg' onClick={close}>
            <FaArrowLeft size={20}/>
          </ButtonCircle>
          <div/>
        </Row>

        {animationState > 3 && animationState < 12 &&
        <CenterScene>
          <div style={{ transform: 'scale(1.5)', zIndex: 2 }}>
            <PlayerCharacter animation={introAnimation} characterStyle={getCharacterStyle(leaderboard[2].characterId)}/>
          </div>
          <IntroBgAnimation characterStyle={getCharacterStyle(leaderboard[2].characterId)} />
          <ClassInfo topText={"Klasa " + leaderboard[2].classNumber} bottomText="3. Miejsce!" />
        </CenterScene>}

        {animationState > 13 && animationState < 22 &&
        <CenterScene>
          <div style={{ transform: 'scale(1.5)', zIndex: 2 }}>
            <PlayerCharacter animation={introAnimation} characterStyle={getCharacterStyle(leaderboard[1].characterId)}/>
          </div>
          <IntroBgAnimation characterStyle={getCharacterStyle(leaderboard[1].characterId)} />
          <ClassInfo topText={"Klasa " + leaderboard[1].classNumber} bottomText="2. Miejsce!" />
        </CenterScene>}

        {animationState > 25 && animationState < 35 &&
        <CenterScene>
          <div style={{ transform: 'scale(1.5)', zIndex: 2 }}>
            <PlayerCharacter animation={introAnimation} characterStyle={getCharacterStyle(leaderboard[0].characterId)}/>
          </div>
          <IntroBgAnimation characterStyle={getCharacterStyle(leaderboard[0].characterId)} />
          <ClassInfo topText={"Klasa " + leaderboard[0].classNumber} bottomText="1. Miejsce!" />
        </CenterScene>}

        <AudienceContainer>
          {leaderboard.map(
          (player, i) => {
            if(i < 3) return "";
            const style = getCharacterStyle(player.characterId);
            style.leftHandSpecial = undefined;
            style.rightHandSpecial = undefined;
            return <Audience key={player.id}>
                      <PlayerCharacter characterStyle={style} animation={clappingAnimation} />
                    </Audience>
            }
          )}
        </AudienceContainer>
      </ModalContainer>

      <Fireworks
        options={{
          rocketsPoint: {
            min: 0,
            max: 100
          },
          traceSpeed: 1,
          acceleration: 1.01,
        }}
        style={{
          zIndex: 2,
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          position: 'fixed',
          background: '#000'
        }}
      />
      
      <ModalBg/>
    </ModalContainer>
  );

}

export default FinishAnimation;