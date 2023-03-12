import { leaderboardAtom } from "../LeaderboardState";
import { atom } from 'jotai';

export const selectRowsToAnimateToBottom = atom(
  (get) => (currentRowId: number) => {

    const rowsToAnimateToBottom: number[] = [];

    let currentPoints: number|null = null;
    [...get(leaderboardAtom)].reverse().forEach(row => {
      if(!currentPoints) {
        if(currentRowId !== row.id) return;
        else {
          currentPoints = row.points;
          return;
        }
      }
      if(row.points < currentPoints) {
        rowsToAnimateToBottom.push(row.id);
      }
    });

    return rowsToAnimateToBottom;

  }
);