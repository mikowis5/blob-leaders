import { keyframes } from 'styled-components';
import { AnimationProps, PlayerAnimationSet } from './PlayerAnimation.type';

const container: AnimationProps = {
  keyframes: keyframes`
    0% { opacity: 0; transform: rotate(20deg) translateX(-75px) translateY(50px); }
    1.25% { opacity: 0; transform: rotate(20deg) translateX(-75px) translateY(50px); }
    6.75% { opacity: 1; }
    20% { transform: rotate(-10deg) translateX(-20px) translateY(-50px); }
    25% { transform: rotate(0deg) translateX(-2px) translateY(15px); }
    80% { opacity: 1; transform: scale(1) rotate(0deg) translateX(4px) translateY(15px); }
    90% { opacity: 0; transform: scale(0.5) rotate(0deg) translateX(4px) translateY(15px); }
    100% { opacity: 0; transform: rotate(0deg) translateX(4px) translateY(15px); }
  `,
  duration: 6,
  fillMode: 'forwards',
  iterationCount: 1,
}

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
    0% { transform: translateX(-10px) translateY(-30px) rotate(180deg); }
    75% { transform: translateX(0px) translateY(0px) rotate(10deg); }
    100% { transform: translateX(0px) translateY(0px) rotate(10deg); }
  `,
  fillMode: 'forwards',
  iterationCount: 1,
  duration: 2
};

const rightHand: AnimationProps = {
  keyframes: keyframes`
    0% { transform: translateX(-10px) translateY(-30px) rotate(180deg); }
    75% { transform: translateX(0px) translateY(0px) rotate(10deg); }
    100% { transform: translateX(0px) translateY(0px) rotate(10deg); }
  `,
  fillMode: 'forwards',
  iterationCount: 1,
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
  container,
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