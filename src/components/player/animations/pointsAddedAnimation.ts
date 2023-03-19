import { keyframes } from 'styled-components';
import { AnimationProps, PlayerAnimationSet } from './PlayerAnimation.type';

const container: AnimationProps = {
  keyframes: keyframes`
    0% { opacity: 0; transform: scale(0.75) translateX(0) translateY(0px) rotate(0deg); }
    10% { opacity: 1; transform: translateX(10px) translateY(-20px) rotate(0deg); }
    100% { transform: translateX(15px) translateY(-30px) rotate(-10deg); }
  `,
  duration: 2
}

const leftHand: AnimationProps = {
  keyframes: keyframes`
    0% { transform: translateX(0) translateY(-20px) rotate(-35deg); }
    100% { transform: translateX(0) translateY(-25px) rotate(-45deg); }
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
    100% { bottom: 70%; }
  `,
  duration: 4
};

const eyeLidBottom: AnimationProps = {
  keyframes: keyframes`
    0% { bottom: -140%; }
    100% { bottom: -140%; }
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
  container,
  mouth,
  leftHand,
  rightHand,
  leftEye: eyes,
  rightEye: eyes,
  leftEyeLidTop: eyeLidTop,
  rightEyeLidTop: eyeLidTop,
  leftEyeLidBottom: eyeLidBottom,
  rightEyeLidBottom: eyeLidBottom
}
export default animation;