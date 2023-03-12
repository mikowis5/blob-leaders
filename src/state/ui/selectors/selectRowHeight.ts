import { displayedRowsNumber } from "../UIState";
import { atom } from 'jotai';

export const selectRowHeight = atom(
  (get) => window.innerHeight / get(displayedRowsNumber) * 0.75
);