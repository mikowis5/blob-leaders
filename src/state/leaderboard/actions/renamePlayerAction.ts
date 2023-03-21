import { leaderboardAtom } from "../LeaderboardState";
import { atom } from 'jotai';

type RenamePlayerArgs = {
  playerId: number,
  classNumber: string
}
export const renamePlayerAction = atom(null, (get, set, data: RenamePlayerArgs) => {

  set(leaderboardAtom, get(leaderboardAtom).map(player => {
    if(player.id === data.playerId) {
      player.classNumber = data.classNumber;
    }
    return player
  }));

});