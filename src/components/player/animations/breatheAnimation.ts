import { keyframes } from 'styled-components';
import { AnimationProps, PlayerAnimationSet } from './PlayerAnimation.type';

const body: AnimationProps = {
  keyframes: keyframes`
    0% { transform: scaleY(100%); }
    100% { transform: scaleY(97%); }
  `,
  duration: 2
};

const hat: AnimationProps = {
  keyframes: keyframes`
    0% { transform: translateY(0); }
    100% { transform: translateY(-2px); }
  `,
  duration: 2
};

const leftHand: AnimationProps = {
  keyframes: keyframes`
    0% { transform: translateY(0) rotate(-10deg); }
    100% { transform: translateY(1px) rotate(10deg); }
  `,
  duration: 2
};

const rightHand: AnimationProps = {
  keyframes: keyframes`
    0% { transform: translateY(0) rotate(-35deg); }
    100% { transform: translateY(1px) rotate(-15deg); }
  `,
  duration: 2
};

const eyes: AnimationProps = {
  keyframes: keyframes`
    0% { transform: translateY(0); }
    100% { transform: translateY(-1.5px); }
  `,
  duration: 2
};

const eyeLidTop: AnimationProps = {
  keyframes: keyframes`
    0% { bottom: 70%; }
    90% { bottom: 70%; }
    100% { bottom: 25%; }
  `,
  duration: 5
};

const eyeLidBottom: AnimationProps = {
  keyframes: keyframes`
    0% { bottom: -175%; }
    90% { bottom: -175%; }
    100% { bottom: -105%; }
  `,
  duration: 5
};

const animation: PlayerAnimationSet = {
  body,
  hat,
  leftHand,
  rightHand,
  leftEye: eyes,
  rightEye: eyes,
  leftEyeLidTop: eyeLidTop,
  rightEyeLidTop: eyeLidTop,
  leftEyeLidBottom: eyeLidBottom,
  rightEyeLidBottom: eyeLidBottom,
}
export default animation;