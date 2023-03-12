import { leaderboardAtom } from "../LeaderboardState";
import { atom } from 'jotai';

export const selectPlayer = atom(
  (get) => (playerId: number) => {

    return get(leaderboardAtom).find(row => row.id === playerId) ?? null;

  }
);