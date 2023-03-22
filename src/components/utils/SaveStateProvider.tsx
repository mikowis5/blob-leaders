import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { useAtom, useAtomValue } from 'jotai';
import { leaderboardAtom } from '../../state/leaderboard/LeaderboardState';
import { maxRoundsAtom, roundsAtom } from '../../state/rounds/RoundsState';
import PlayerData from '../leaderboard/row/PlayerData.type';
import { gameIdAtom } from '../../state/GameIdState';


const makeid = (length: number) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export type GameState = {
  gameId: string,
  leaderboard: PlayerData[],
  rounds: number,
  maxRounds: number
}

type Props = {
  children?: string | JSX.Element | JSX.Element[]
}
const SaveStateProvider: React.FC<Props> = ({children} : Props) => {

  const [gameId, setGameId] = useAtom(gameIdAtom);
  const leaderboard = useAtomValue(leaderboardAtom);
  const rounds = useAtomValue(roundsAtom);
  const maxRounds = useAtomValue(maxRoundsAtom);

  const [shouldAutoSave, setShouldAutoSave] = useState(0);

  useEffect(() => {
    const interval = setInterval(autoSave, 35000);
    return () => clearInterval(interval);
  }, [leaderboard, gameId, shouldAutoSave]);

  const autoSave = () => {
    if(leaderboard.length < 3) return;
    setShouldAutoSave(shouldAutoSave + 1);
    if(!gameId && shouldAutoSave < 4) return;
    if(!gameId && shouldAutoSave > 4) {
      setGameId( makeid(5).toUpperCase() + "-" + Date.now() );
    }
    if(gameId) {
      saveState();
    }
  }

  const saveState = () => {

    let newId = gameId;
    if(!newId) {
      newId = makeid(5).toUpperCase() + "-" + Date.now();
      setGameId( newId );
    }

    const state: GameState = {
      gameId: newId,
      leaderboard,
      rounds,
      maxRounds
    }

    try {
      const requestOptions = {
        method: "POST",
        body: JSON.stringify({ game_state: state })
      };
      fetch('/storeState.php', requestOptions);
    } catch (e) {
      console.warn(e);
    }

  }

  return (
    <div onClick={saveState}>
      {children}
    </div>
  );
}

export default SaveStateProvider;