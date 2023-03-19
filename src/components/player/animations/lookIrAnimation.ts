import { keyframes } from 'styled-components';
import { AnimationProps, PlayerAnimationSet } from './PlayerAnimation.type';


const leftHand: AnimationProps = {
  keyframes: keyframes`
    0% { transform: translateX(0) translateY(0) rotate(-35deg); }
    100% { transform: translateX(0) translateY(-1px) rotate(-45deg); }
  `,
  duration: 2
};

const rightHand: AnimationProps = {
  keyframes: keyframes`
    0% { transform: translateX(0) translateY(0) rotate(-15deg); }
    100% { transform: translateX(2px) translateY(0) rotate(-45deg); }
  `,
  duration: 4
};

const eyeLidTop: AnimationProps = {
  keyframes: keyframes`
    0% { bottom: 70%; }
    10% { bottom: 70%; }
    20% { bottom: 65%; }
    100% { bottom: 65%; }
  `,
  duration: 4
};

const eyeLidBottom: AnimationProps = {
  keyframes: keyframes`
    0% { bottom: -120%; }
    100% { bottom: -100%; }
  `,
  duration: 4
};

const eyePupil: AnimationProps = {
  keyframes: keyframes`
    0% { transform: translateX(0) }
    50% { transform: translateX(-4px) }
    100% { transform: translateX(-4px) }
  `,
  duration: 4
};

const mouth: AnimationProps = {
  keyframes: keyframes`
    0% { transform: scaleX(1) translateX(0px); }
    40% { transform: scaleX(1.25) translateX(-3px); }
    100% { transform: scaleX(1.1) translateX(-3px); }
  `,
  duration: 4
};

const eyes: AnimationProps = {
  keyframes: keyframes`
    0% { transform: translateX(0px); }
    40% { transform: translateX(-3px); }
    100% { transform: translateX(-3px); }
  `,
  duration: 4
};

const animation: PlayerAnimationSet = {
  animationDuration: 8,
  mouth,
  leftHand,
  rightHand,
  leftEye: eyes,
  rightEye: eyes,
  leftEyeLidTop: eyeLidTop,
  rightEyeLidTop: eyeLidTop,
  leftEyeLidBottom: eyeLidBottom,
  rightEyeLidBottom: eyeLidBottom,
  leftEyePupil: eyePupil,
  rightEyePupil: eyePupil
}
export default animation;