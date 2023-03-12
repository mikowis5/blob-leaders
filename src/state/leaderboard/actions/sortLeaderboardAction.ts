import { leaderboardAtom } from "../LeaderboardState";
import { atom } from 'jotai';

export const sortLeaderboardAction = atom(null, (get, set) => {
  set(
    leaderboardAtom,
    get(leaderboardAtom).sort((playerA, playerB) => playerB.points - playerA.points)
  );
});