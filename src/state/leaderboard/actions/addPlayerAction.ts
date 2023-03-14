import { leaderboardAtom } from "../LeaderboardState";
import { atom } from 'jotai';
import PlayerData from "../../../components/leaderboard/row/PlayerData.type";

type AddPlayerArgs = {
  characterId: number,
  classNumber: string
}
export const addPlayerAction = atom(null, (get, set, data: AddPlayerArgs) => {

  const newPlayer: PlayerData = {
    id: get(leaderboardAtom).length + 1,
    classNumber: data.classNumber,
    characterId: data.characterId,
    points: 0
  }

  set(leaderboardAtom, [...get(leaderboardAtom), newPlayer]);

});