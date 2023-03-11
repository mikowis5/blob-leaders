import { atom } from 'jotai';
import PlayerData from '../components/leaderboard/row/PlayerData.type';


export const leaderboardAtom = atom<PlayerData[]>([]);

type AddPointsArgs = {
  id: number,
  points: number
}
export const addPointsToPlayerAction = atom(null, (get, set, data: AddPointsArgs) => {
  set(leaderboardAtom, get(leaderboardAtom).map(
    (player: PlayerData) => {
      if(player.id === data.id) {
        player.points += data.points;
      }
      return player;
    }
  ));
});

export const sortLeaderboardAction = atom(null, (get, set) => {
  set(
    leaderboardAtom,
    get(leaderboardAtom).sort((playerA, playerB) => playerB.points - playerA.points)
  );
});