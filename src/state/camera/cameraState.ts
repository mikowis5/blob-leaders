import { atom } from 'jotai';

export enum CameraState {
  Idle,
  Forward,
  Backward
}

export const cameraAtom = atom(CameraState.Idle);