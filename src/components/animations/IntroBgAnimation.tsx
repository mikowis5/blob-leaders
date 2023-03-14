import styled, { keyframes } from 'styled-components';
import defaultFrontBg from './../../assets/img/characters/default_bg_3.png';
import defaultMainBg from './../../assets/img/characters/default_bg_2.png';
import defaultBackBg from './../../assets/img/characters/default_bg_1.png';
import PlayerStyle from '../player/PlayerStyle.type';

const PopupAnimation = keyframes`
  0% { transform: scale(5%); opacity: 0; }
  10% { transform: scale(100%); opacity: 1; }
  90% { transform: scale(100%); opacity: 1; }
  100% { transform: scale(50%); opacity: 0; }
`;

const ParalaxBackAnimation = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-10px); }
`;

const ParalaxRegularAnimation = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(25px); }
`;

const ParalaxFrontAnimation = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50px); }
`;

const AnimationContainer = styled.div`

  animation: ${PopupAnimation};
  animation-duration: 4s;
  animation-fill-mode: both;
  animation-delay: 1.2s;

  width: 400px;
  height: 400px;
  border-radius: 50%;
  border: 5px solid white;
  position: absolute;
  z-index: 1;
  box-shadow 2px 2px 5px rgba(0,0,0,.25);
  overflow: hidden;
`;

const FrontBackground = styled.div<{ bgFile: string }>`

  animation: ${ParalaxFrontAnimation};
  animation-duration: 5s;
  animation-fill-mode: both;
  animation-delay: 1.35s;
  animation-timing-function: linear;

  position: absolute;
  inset: 0;
  z-index: 2;
  inset: 0 -50px;
  background: url(${({ bgFile }) => bgFile});
  background-position: bottom left;
  filter: blur(3px);
`;

const RegularBackground = styled.div<{ bgFile: string }>`
  position: absolute;
  inset: 0;
  z-index: 1;
  background: url(${({ bgFile }) => bgFile});
  background-position: bottom left;
  inset: 0 -50px;

  animation: ${ParalaxRegularAnimation};
  animation-duration: 5s;
  animation-fill-mode: both;
  animation-delay: 1.35s;
  animation-timing-function: linear;

`;

const BackBackground = styled.div<{ bgFile: string }>`

  animation: ${ParalaxBackAnimation};
  animation-duration: 5s;
  animation-fill-mode: both;
  animation-delay: 1.35s;
  animation-timing-function: linear;

  filter: blur(2px);
  position: absolute;
  inset: 0 -50px;
  z-index: 0;
  background: url(${({ bgFile }) => bgFile});
  background-position: bottom right;
`;

type Props = {
  characterStyle: PlayerStyle
}
const IntroBgAnimation = ({ characterStyle }: Props) => {

  return (
    <AnimationContainer>
      <FrontBackground bgFile={characterStyle.introBgFront ?? defaultFrontBg}/>
      <RegularBackground bgFile={characterStyle.introBgReg ?? defaultMainBg}/>
      <BackBackground bgFile={characterStyle.introBgBack ?? defaultBackBg}/>
    </AnimationContainer>
  );

}

export default IntroBgAnimation;