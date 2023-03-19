import { keyframes } from 'styled-components';
import { AnimationProps, PlayerAnimationSet } from './PlayerAnimation.type';

const container: AnimationProps = {
  keyframes: keyframes`
    0% { transform:  translateY(0) }
    90% { transform: translateY(0) }
    95% { transform: translateY(-4px) }
    100% { transform: translateX(0) }  
  `,
  duration: 4
};

const leftHand: AnimationProps = {
  keyframes: keyframes`
    0% { transform: translateX(0) translateY(0) rotate(-35deg); }
    30% { transform: translateX(0) translateY(0) rotate(-35deg); }
    70% { transform: translateX(-15px) translateY(-30px) rotate(-135deg); }
    80% { transform: translateX(-15px) translateY(-30px) rotate(-135deg); }
    83% { transform: translateX(-10px) translateY(-30px) rotate(-115deg); }
    86% { transform: translateX(-20px) translateY(-30px) rotate(-155deg); }
    90% { transform: translateX(-15px) translateY(-30px) rotate(-135deg); }
    100% { transform: translateX(-15px) translateY(-30px) rotate(-135deg); }
  `,
  duration: 4
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
    20% { bottom: 80%; }
    100% { bottom: 80%; }
  `,
  duration: 4
};

const eyeLidBottom: AnimationProps = {
  keyframes: keyframes`
    0% { bottom: -175%; }
    100% { bottom: -175%; }
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
    0% { transform: scaleY(1) translateX(0px); }
    40% { transform: scaleY(1.4) translateX(-3px); }
    100% { transform: scaleY(1.5) translateX(-3px); }
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
  container,
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