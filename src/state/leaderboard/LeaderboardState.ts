import { atom } from 'jotai';
import PlayerData from '../../components/leaderboard/row/PlayerData.type';

export const leaderboardAtom = atom<PlayerData[]>([]);

export const currentLeaderId = atom(1);