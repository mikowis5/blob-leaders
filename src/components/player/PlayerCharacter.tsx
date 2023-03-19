import styled from 'styled-components';
import {ReactComponent as BlobSvg} from './../../assets/blob.svg';
import PlayerStyle from './PlayerStyle.type';
import shadeColor from '../../utils/shadeColor';
import {PlayerAnimationSet } from './animations/PlayerAnimation.type';

const BlobContainer = styled.div<{ styleSet: PlayerStyle, animation?: PlayerAnimationSet }>`
  position: relative;
  display: inline-block;
  z-index: 1;

  animation-name: ${({ animation }) => animation?.container?.keyframes ?? 'none'};
  animation-duration: ${({ animation }) => animation?.container?.duration ?? 0}s;
  animation-iteration-count: ${({ animation }) => animation?.container?.iterationCount ?? 'infinite'};
  animation-direction: ${({ animation }) => animation?.container?.direction ?? 'alternate'};
  animation-fill-mode: ${({ animation }) => animation?.container?.fillMode ?? 'none'};

  .blob-body {
    animation-name: ${({ animation }) => animation?.body?.keyframes ?? 'none'};
    animation-duration: ${({ animation }) => animation?.body?.duration ?? 0}s;
    animation-iteration-count: ${({ animation }) => animation?.body?.iterationCount ?? 'infinite'};
    animation-direction: ${({ animation }) => animation?.body?.direction ?? 'alternate'};
    animation-fill-mode: ${({ animation }) => animation?.body?.fillMode ?? 'none'};
  }
  .eye-container.eye-right {
    animation-name: ${({ animation }) => animation?.rightEye?.keyframes ?? 'none'};
    animation-duration: ${({ animation }) => animation?.rightEye?.duration ?? 0}s;
    animation-iteration-count: ${({ animation }) => animation?.rightEye?.iterationCount ?? 'infinite'};
    animation-direction: ${({ animation }) => animation?.rightEye?.direction ?? 'alternate'};
    animation-fill-mode: ${({ animation }) => animation?.rightEye?.fillMode ?? 'none'};
  }
  .eye-container.eye-left {
    animation-name: ${({ animation }) => animation?.leftEye?.keyframes ?? 'none'};
    animation-duration: ${({ animation }) => animation?.leftEye?.duration ?? 0}s;
    animation-iteration-count: ${({ animation }) => animation?.leftEye?.iterationCount ?? 'infinite'};
    animation-direction: ${({ animation }) => animation?.leftEye?.direction ?? 'alternate'};
    animation-fill-mode: ${({ animation }) => animation?.leftEye?.fillMode ?? 'none'};
  }
  .eye-container.eye-right .eye-pupil {
    animation-name: ${({ animation }) => animation?.rightEyePupil?.keyframes ?? 'none'};
    animation-duration: ${({ animation }) => animation?.rightEyePupil?.duration ?? 0}s;
    animation-iteration-count: ${({ animation }) => animation?.rightEyePupil?.iterationCount ?? 'infinite'};
    animation-direction: ${({ animation }) => animation?.rightEyePupil?.direction ?? 'alternate'};
    animation-fill-mode: ${({ animation }) => animation?.rightEyePupil?.fillMode ?? 'none'};
  }
  .eye-container.eye-left .eye-pupil {
    animation-name: ${({ animation }) => animation?.leftEyePupil?.keyframes ?? 'none'};
    animation-duration: ${({ animation }) => animation?.leftEyePupil?.duration ?? 0}s;
    animation-iteration-count: ${({ animation }) => animation?.leftEyePupil?.iterationCount ?? 'infinite'};
    animation-direction: ${({ animation }) => animation?.leftEyePupil?.direction ?? 'alternate'};
    animation-fill-mode: ${({ animation }) => animation?.leftEyePupil?.fillMode ?? 'none'};
  }
  .eye-container.eye-left .eye-lid-top {
    animation-name: ${({ animation }) => animation?.leftEyeLidTop?.keyframes ?? 'none'};
    animation-duration: ${({ animation }) => animation?.leftEyeLidTop?.duration ?? 0}s;
    animation-iteration-count: ${({ animation }) => animation?.leftEyeLidTop?.iterationCount ?? 'infinite'};
    animation-direction: ${({ animation }) => animation?.leftEyeLidTop?.direction ?? 'alternate'};
    animation-fill-mode: ${({ animation }) => animation?.leftEyeLidTop?.fillMode ?? 'none'};
  }
  .eye-container.eye-left .eye-lid-bottom {
    animation-name: ${({ animation }) => animation?.leftEyeLidBottom?.keyframes ?? 'none'};
    animation-duration: ${({ animation }) => animation?.leftEyeLidBottom?.duration ?? 0}s;
    animation-iteration-count: ${({ animation }) => animation?.leftEyeLidBottom?.iterationCount ?? 'infinite'};
    animation-direction: ${({ animation }) => animation?.leftEyeLidBottom?.direction ?? 'alternate'};
    animation-fill-mode: ${({ animation }) => animation?.leftEyeLidBottom?.fillMode ?? 'none'};
  }
  .eye-container.eye-right .eye-lid-top {
    animation-name: ${({ animation }) => animation?.rightEyeLidTop?.keyframes ?? 'none'};
    animation-duration: ${({ animation }) => animation?.rightEyeLidTop?.duration ?? 0}s;
    animation-iteration-count: ${({ animation }) => animation?.rightEyeLidTop?.iterationCount ?? 'infinite'};
    animation-direction: ${({ animation }) => animation?.rightEyeLidTop?.direction ?? 'alternate'};
    animation-fill-mode: ${({ animation }) => animation?.rightEyeLidTop?.fillMode ?? 'none'};
  }
  .eye-container.eye-right .eye-lid-bottom {
    animation-name: ${({ animation }) => animation?.rightEyeLidBottom?.keyframes ?? 'none'};
    animation-duration: ${({ animation }) => animation?.rightEyeLidBottom?.duration ?? 0}s;
    animation-iteration-count: ${({ animation }) => animation?.rightEyeLidBottom?.iterationCount ?? 'infinite'};
    animation-direction: ${({ animation }) => animation?.rightEyeLidBottom?.direction ?? 'alternate'};
    animation-fill-mode: ${({ animation }) => animation?.rightEyeLidBottom?.fillMode ?? 'none'};
  }
  .blob-mouth {
    animation-name: ${({ animation }) => animation?.mouth?.keyframes ?? 'none'};
    animation-duration: ${({ animation }) => animation?.mouth?.duration ?? 0}s;
    animation-iteration-count: ${({ animation }) => animation?.mouth?.iterationCount ?? 'infinite'};
    animation-direction: ${({ animation }) => animation?.mouth?.direction ?? 'alternate'};
    animation-fill-mode: ${({ animation }) => animation?.mouth?.fillMode ?? 'none'};
  }
  .right-hand {
    animation-name: ${({ animation }) => animation?.rightHand?.keyframes ?? 'none'};
    animation-duration: ${({ animation }) => animation?.rightHand?.duration ?? 0}s;
    animation-iteration-count: ${({ animation }) => animation?.rightHand?.iterationCount ?? 'infinite'};
    animation-direction: ${({ animation }) => animation?.rightHand?.direction ?? 'alternate'};
    animation-fill-mode: ${({ animation }) => animation?.rightHand?.fillMode ?? 'none'};
  }
  .left-hand {
    animation-name: ${({ animation }) => animation?.leftHand?.keyframes ?? 'none'};
    animation-duration: ${({ animation }) => animation?.leftHand?.duration ?? 0}s;
    animation-iteration-count: ${({ animation }) => animation?.leftHand?.iterationCount ?? 'infinite'};
    animation-direction: ${({ animation }) => animation?.leftHand?.direction ?? 'alternate'};
    animation-fill-mode: ${({ animation }) => animation?.leftHand?.fillMode ?? 'none'};
  }
  .blob-hat {
    animation-name: ${({ animation }) => animation?.hat?.keyframes ?? 'none'};
    animation-duration: ${({ animation }) => animation?.hat?.duration ?? 0}s;
    animation-iteration-count: ${({ animation }) => animation?.hat?.iterationCount ?? 'infinite'};
    animation-direction: ${({ animation }) => animation?.hat?.direction ?? 'alternate'};
    animation-fill-mode: ${({ animation }) => animation?.hat?.fillMode ?? 'none'};
  }
  .eye-pupil {
    background: ${({ styleSet }) => styleSet.eyeColor};
    border: 1px solid ${({ styleSet }) => shadeColor(styleSet.eyeColor, -30)};
  }
  .eye-lid {
    background: ${({ styleSet }) => shadeColor(styleSet.bodyColor, -40)};
  }
  .eye-lid-bottom {
    border-top: 2px solid ${({ styleSet }) => shadeColor(styleSet.bodyColor, -60)};
  }
  .eye-lid-top {
    border-bottom: 2px solid ${({ styleSet }) => shadeColor(styleSet.bodyColor, -60)};
  }
  .eye {
    border: 4px solid ${({ styleSet }) => shadeColor(styleSet.bodyColor, -50)};
  }
  .blob-hand {
    background: ${({ styleSet }) => styleSet.bodyColor};
    border: 4px solid ${({ styleSet }) => shadeColor(styleSet.bodyColor, -50)};
  }
  .blob-mouth {
    background: ${({ styleSet }) => shadeColor(styleSet.bodyColor, -50)};
  }
  svg {
    fill: ${({ styleSet }) => styleSet.bodyColor};
    filter:
      drop-shadow(-2px -2px 0px ${({ styleSet }) => shadeColor(styleSet.bodyColor, -50)})
      drop-shadow(3px -2px 0px ${({ styleSet }) => shadeColor(styleSet.bodyColor, -50)})
      drop-shadow(3px 3px 0px ${({ styleSet }) => shadeColor(styleSet.bodyColor, -50)})
      drop-shadow(-2px 3px 0px ${({ styleSet }) => shadeColor(styleSet.bodyColor, -50)})
  }
  .blob-hat{
    display: ${({ styleSet }) => styleSet.hat ? 'inline' : 'none'};
    background: url('${({ styleSet }) => styleSet.hat}');
    background-size: cover;
  }
  .blob-addbody {
    position: absolute;
    display: ${({ styleSet }) => styleSet.addBody ? 'inline' : 'none'};
    background: url('${({ styleSet }) => styleSet.addBody}');
    background-size: cover;
    width: 180px;
    height: 180px;
    left: -42px;
    top: -45px;
  }
`;
type Props = {
  characterStyle: PlayerStyle,
  animation?: PlayerAnimationSet
}
const PlayerCharacter = ({ characterStyle, animation } : Props) => {
  return (
    <BlobContainer animation={animation} styleSet={characterStyle} >
      <div className="eye-left eye-container">
        <div className="eye-brow"/>
        <div className="eye">
          <div className="eye-pupil">
            <div className="pupil-shrinkle"/>
          </div>
          <div className="eye-lid eye-lid-top"/>
          <div className="eye-lid eye-lid-bottom"/>
        </div>
      </div>
      <div className="eye-right eye-container">
        <div className="eye-brow"/>
        <div className="eye">
          <div className="eye-pupil">
            <div className="pupil-shrinkle"/>
          </div>
          <div className="eye-lid eye-lid-top"/>
          <div className="eye-lid eye-lid-bottom"/>
        </div>
      </div>
      <div className="blob">
        <div className="blob-addbody"/>
        <div className="blob-body">
          <BlobSvg/>
        </div>
        <div className="blob-hat"/>
        <div className="blob-mouth"/>
        <div className="blob-hand left-hand"/>
        <div className="blob-hand right-hand"/>
      </div>
    </BlobContainer>
  );
};

export default PlayerCharacter;