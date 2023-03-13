import { keyframes } from 'styled-components';
import { AnimationProps, PlayerAnimationSet } from './PlayerAnimation.type';

const body: AnimationProps = {
  keyframes: keyframes`
    0% { transform: scaleY(100%); }
    20% { transform: scaleY(98%); }
    50% { transform: scaleY(100%); }
    100% { transform: scaleY(90%); }
  `,
  duration: 4
};

const leftHand: AnimationProps = {
  keyframes: keyframes`
    0% { transform: translateX(0) translateY(0) rotate(-15deg); }
    50% { transform: translateX(0) translateY(0) rotate(-15deg); }
    100% { transform: translateX(-15px) translateY(-35px) rotate(100deg); }
  `,
  duration: 4
};

const rightHand: AnimationProps = {
  keyframes: keyframes`
    0% { transform: translateX(0) translateY(0) rotate(-15deg); }
    50% { transform: translateX(0) translateY(0) rotate(-15deg); }
    100% { transform: translateX(5px) translateY(-25px) rotate(-110deg); }
  `,
  duration: 4
};

const eyeLidTop: AnimationProps = {
  keyframes: keyframes`
    0% { bottom: 75%; }
    10% { bottom: 75%; }
    40% { bottom: 65%; }
    100% { bottom: 50%; }
  `,
  duration: 4
};

const eyeLidBottom: AnimationProps = {
  keyframes: keyframes`
    0% { bottom: -175%; }
    10% { bottom: -175%; }
    40% { bottom: -145%; }
    100% { bottom: -110%; }
  `,
  duration: 4
};

const mouth: AnimationProps = {
  keyframes: keyframes`
    0% { transform: scaleX(1) scaleY(1); }
    40% { transform: scaleX(1) scaleY(1); border-top-right-radius: 0%; border-top-left-radius: 0%; }
    100% { transform: scaleX(0.5) scaleY(2); border-top-right-radius: 50%; border-top-left-radius: 50%; }
  `,
  duration: 4
};

const animation: PlayerAnimationSet = {
  animationDuration: 8,
  body,
  mouth,
  leftHand,
  rightHand,
  leftEyeLidTop: eyeLidTop,
  rightEyeLidTop: eyeLidTop,
  leftEyeLidBottom: eyeLidBottom,
  rightEyeLidBottom: eyeLidBottom,
}
export default animation;