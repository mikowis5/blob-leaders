import { Keyframes } from "styled-components";

export type AnimationProps = {
  keyframes: Keyframes,
  duration: number;
  direction?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse',
  iterationCount?: number | 'infinite' | 'revert'
}

export type PlayerAnimationSet = {
  animationDuration?: number,
  container?: AnimationProps,
  body?: AnimationProps,
  leftHand?: AnimationProps,
  rightHand?: AnimationProps,
  mouth?: AnimationProps,
  leftBrew?: AnimationProps,
  rightBrew?: AnimationProps,
  leftEye?: AnimationProps,
  rightEye?: AnimationProps,
  rightEyeLidTop?: AnimationProps,
  rightEyeLidBottom?: AnimationProps,
  leftEyeLidTop?: AnimationProps,
  leftEyeLidBottom?: AnimationProps,
  leftEyePupil?: AnimationProps,
  rightEyePupil?: AnimationProps
}